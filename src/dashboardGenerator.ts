import { promises as fs } from 'fs';
import path from 'path';
import { AnalysisResult, CytoscapeNode, CytoscapeEdge, FileCommit } from './types';

export async function generateDashboard(analysisResult: AnalysisResult, artifactsPath: string) {
    const html = generateHTML(analysisResult);
    await fs.writeFile(path.join(artifactsPath, 'dashboard.html'), html);
}

function generateHTML(analysisResult: AnalysisResult): string {
    const nodes: CytoscapeNode[] = generateNodes(analysisResult);
    const edges: CytoscapeEdge[] = generateEdges(analysisResult);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kaizen Dashboard</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.21.0/cytoscape.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        #cy { width: 100%; height: 70vh; }
        .table-container { padding: 20px; }
        table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .collapsible { background-color: #777; color: white; cursor: pointer; padding: 18px; width: 100%; border: none; text-align: left; outline: none; font-size: 15px; }
        .active, .collapsible:hover { background-color: #555; }
        .content { padding: 0 18px; display: none; overflow: hidden; background-color: #f1f1f1; }
    </style>
</head>
<body>
    <button class="collapsible">Combined Relations Graph</button>
    <div class="content">
        <div id="cy"></div>
    </div>

    <div class="table-container">
        <button class="collapsible">Most Frequently Changed Files</button>
        <div class="content">
            <table id="frequentlyChangedFiles"></table>
        </div>

        <button class="collapsible">Files with Most Imports/Dependents</button>
        <div class="content">
            <table id="mostImportsDependents"></table>
        </div>

        <button class="collapsible">Highest Fix Ratio Files</button>
        <div class="content">
            <table id="highestFixRatio"></table>
        </div>
    </div>

    <script>
        const nodes = ${JSON.stringify(nodes)};
        const edges = ${JSON.stringify(edges)};
        const fileCommits = ${JSON.stringify(analysisResult.fileCommits)};
        const fileRelations = ${JSON.stringify(analysisResult.fileRelations)};
        const staticRelations = ${JSON.stringify(analysisResult.staticRelations)};

        function initCytoscape() {
            const cy = cytoscape({
                container: document.getElementById('cy'),
                elements: {
                    nodes: nodes,
                    edges: edges
                },
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': 'data(color)',
                            'label': 'data(id)',
                            'width': 'data(size)',
                            'height': 'data(size)'
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 'data(weight)',
                            'line-color': '#ccc',
                            'target-arrow-color': '#ccc',
                            'target-arrow-shape': 'triangle'
                        }
                    }
                ],
                layout: {
                    name: 'cose',
                    idealEdgeLength: 100,
                    nodeOverlap: 20,
                    refresh: 20,
                    fit: true,
                    padding: 30,
                    randomize: false,
                    componentSpacing: 100,
                    nodeRepulsion: 400000,
                    edgeElasticity: 100,
                    nestingFactor: 5,
                    gravity: 80,
                    numIter: 1000,
                    initialTemp: 200,
                    coolingFactor: 0.95,
                    minTemp: 1.0
                }
            });

            cy.on('tap', 'node', function(evt){
                const node = evt.target;
                console.log( 'tapped ' + node.id() );
            });
        }

        function populateTables() {
            populateFrequentlyChangedFiles();
            populateMostImportsDependents();
            populateHighestFixRatio();
        }

        function populateFrequentlyChangedFiles() {
            const table = document.getElementById('frequentlyChangedFiles');
            const header = table.createTHead();
            const headerRow = header.insertRow(0);
            ['File Name', 'Total Commits', 'Fix Commits', 'Enhancement Commits'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });

            const sortedFiles = fileCommits.sort((a, b) => b.totalCommits - a.totalCommits).slice(0, 10);
            const body = table.createTBody();
            sortedFiles.forEach(file => {
                const row = body.insertRow();
                [file.fileName, file.totalCommits, file.fixCommits, file.enhancementCommits].forEach(text => {
                    const cell = row.insertCell();
                    cell.textContent = text;
                });
            });
        }

        function populateMostImportsDependents() {
            const table = document.getElementById('mostImportsDependents');
            const header = table.createTHead();
            const headerRow = header.insertRow(0);
            ['File Name', 'Number of Imports', 'Number of Dependents'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });

            const importCounts = new Map();
            const dependentCounts = new Map();

            staticRelations.forEach(relation => {
                importCounts.set(relation.file1, (importCounts.get(relation.file1) || 0) + 1);
                dependentCounts.set(relation.file2, (dependentCounts.get(relation.file2) || 0) + 1);
            });

            const sortedFiles = Array.from(new Set([...importCounts.keys(), ...dependentCounts.keys()]))
                .map(file => ({
                    fileName: file,
                    imports: importCounts.get(file) || 0,
                    dependents: dependentCounts.get(file) || 0
                }))
                .sort((a, b) => (b.imports + b.dependents) - (a.imports + a.dependents))
                .slice(0, 10);

            const body = table.createTBody();
            sortedFiles.forEach(file => {
                const row = body.insertRow();
                [file.fileName, file.imports, file.dependents].forEach(text => {
                    const cell = row.insertCell();
                    cell.textContent = text;
                });
            });
        }

        function populateHighestFixRatio() {
            const table = document.getElementById('highestFixRatio');
            const header = table.createTHead();
            const headerRow = header.insertRow(0);
            ['File Name', 'Total Commits', 'Fix Commits', 'Fix Ratio'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });

            const sortedFiles = fileCommits
                .map(file => ({
                    ...file,
                    fixRatio: file.totalCommits > 0 ? file.fixCommits / file.totalCommits : 0
                }))
                .sort((a, b) => b.fixRatio - a.fixRatio)
                .slice(0, 10);

            const body = table.createTBody();
            sortedFiles.forEach(file => {
                const row = body.insertRow();
                [file.fileName, file.totalCommits, file.fixCommits, file.fixRatio.toFixed(2)].forEach(text => {
                    const cell = row.insertCell();
                    cell.textContent = text;
                });
            });
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            initCytoscape();
            populateTables();

            const coll = document.getElementsByClassName("collapsible");
            for (let i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    const content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                });
            }
        });
    </script>
</body>
</html>
  `;
}

function generateNodes(analysisResult: AnalysisResult): CytoscapeNode[] {
    const maxCommits = Math.max(...analysisResult.fileCommits.map(fc => fc.totalCommits));
    return analysisResult.fileCommits.map(fc => ({
        data: {
            id: fc.fileName,
            size: 20 + (fc.totalCommits / maxCommits) * 30,
            color: getColor(fc)
        }
    }));
}

function generateEdges(analysisResult: AnalysisResult): CytoscapeEdge[] {
    const maxSharedCommits = Math.max(...analysisResult.fileRelations.map(fr => fr.sharedCommits));
    return [
        ...analysisResult.fileRelations.map(fr => ({
            data: {
                source: fr.file1,
                target: fr.file2,
                weight: 1 + (fr.sharedCommits / maxSharedCommits) * 5
            }
        })),
        ...analysisResult.staticRelations.map(sr => ({
            data: {
                source: sr.file1,
                target: sr.file2,
                weight: 1
            }
        }))
    ];
}

function getColor(fileCommit: FileCommit): string {
    const fixRatio = fileCommit.totalCommits > 0 ? fileCommit.fixCommits / fileCommit.totalCommits : 0;
    const r = Math.floor(255 * fixRatio);
    const g = Math.floor(255 * (1 - fixRatio));
    const b = 0;
    return `rgb(${r},${g},${b})`;
}
