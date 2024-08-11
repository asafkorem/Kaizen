import { promises as fs } from 'fs';
import path from 'path';
import { AnalysisResult, CytoscapeNode, CytoscapeEdge, FileCommit } from '../types';

export async function generateDashboard(analysisResult: AnalysisResult, artifactsPath: string): Promise<string> {
    const html = generateHTML(analysisResult);
    const dashboardPath = path.join(artifactsPath, 'index.html');
    await fs.writeFile(dashboardPath, html);
    return dashboardPath;
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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        ${generateCSS()}
    </style>
</head>
<body>
    <div class="container">
        <h1>Kaizen Dashboard</h1>
        
        <h2>Code Relationship Network</h2>
        <div id="cy"></div>

        <h2>Code Analytics</h2>
        <div class="chart-container">
            <div class="chart">
                <canvas id="commitTypesChart"></canvas>
            </div>
            <div class="chart">
                <canvas id="topChangedFilesChart"></canvas>
            </div>
        </div>

        <h2>Most Frequently Changed Files</h2>
        <div class="table-container">
            <table id="frequentlyChangedFiles"></table>
        </div>

        <h2>Files with Most Imports/Dependents</h2>
        <div class="table-container">
            <table id="mostImportsDependents"></table>
        </div>

        <h2>Highest Fix Ratio Files</h2>
        <div class="table-container">
            <table id="highestFixRatio"></table>
        </div>
    </div>

    <div id="errorMessage"></div>

    <script>
        ${generateJavaScript(nodes, edges, analysisResult)}
    </script>
</body>
</html>
  `;
}

function generateCSS(): string {
    return `
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
        margin: 0;
        padding: 0;
        background-color: #0d1117;
        color: #c9d1d9;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    h1, h2 {
        border-bottom: 1px solid #30363d;
        padding-bottom: 10px;
        color: #c9d1d9;
    }
    #cy {
        width: 100%;
        height: 500px;
        border: 1px solid #30363d;
        margin-bottom: 20px;
    }
    .chart-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .chart {
        width: 48%;
        height: 300px;
        background-color: #161b22;
        border: 1px solid #30363d;
        border-radius: 6px;
        padding: 10px;
    }
    .table-container {
        margin-bottom: 20px;
        overflow-x: auto;
    }
    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }
    th, td {
        border: 1px solid #30363d;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #161b22;
        font-weight: 600;
    }
    tr:nth-child(even) {
        background-color: #161b22;
    }
    tr:hover {
        background-color: #1f2937;
    }
    #errorMessage {
        color: #f85149;
        padding: 20px;
        text-align: center;
    }
  `;
}

function generateJavaScript(nodes: CytoscapeNode[], edges: CytoscapeEdge[], analysisResult: AnalysisResult): string {
    return `
    const nodes = ${JSON.stringify(nodes)};
    const edges = ${JSON.stringify(edges)};
    const fileCommits = ${JSON.stringify(analysisResult.fileCommits)};
    const fileRelations = ${JSON.stringify(analysisResult.commitRelations)};
    const staticRelations = ${JSON.stringify(analysisResult.staticRelations)};

    function initCytoscape() {
        const cy = cytoscape({
            container: document.getElementById('cy'),
            elements: { nodes, edges },
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': 'data(color)',
                        'label': 'data(id)',
                        'width': 'data(size)',
                        'height': 'data(size)',
                        'font-size': '8px',
                        'text-valign': 'center',
                        'text-halign': 'center',
                        'text-outline-width': 2,
                        'text-outline-color': '#161b22',
                        'color': '#c9d1d9'
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 'data(weight)',
                        'line-color': '#58a6ff',
                        'target-arrow-color': '#58a6ff',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
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

    function createCommitTypesChart() {
        const totalCommits = fileCommits.reduce((sum, file) => sum + file.totalCommits, 0);
        const totalFixes = fileCommits.reduce((sum, file) => sum + file.fixCommits, 0);
        const totalEnhancements = fileCommits.reduce((sum, file) => sum + file.enhancementCommits, 0);
        const otherCommits = totalCommits - totalFixes - totalEnhancements;

        const ctx = document.getElementById('commitTypesChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Fixes', 'Enhancements', 'Other'],
                datasets: [{
                    data: [totalFixes, totalEnhancements, otherCommits],
                    backgroundColor: ['#f85149', '#3fb950', '#58a6ff']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Commit Types Distribution',
                        color: '#c9d1d9'
                    },
                    legend: {
                        labels: {
                            color: '#c9d1d9'
                        }
                    }
                }
            }
        });
    }

    function createTopChangedFilesChart() {
        const topFiles = fileCommits
            .sort((a, b) => b.totalCommits - a.totalCommits)
            .slice(0, 5);

        const ctx = document.getElementById('topChangedFilesChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: topFiles.map(file => file.fileName),
                datasets: [{
                    label: 'Total Commits',
                    data: topFiles.map(file => file.totalCommits),
                    backgroundColor: '#58a6ff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Top 5 Most Changed Files',
                        color: '#c9d1d9'
                    },
                    legend: {
                        labels: {
                            color: '#c9d1d9'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#c9d1d9' },
                        grid: { color: '#30363d' }
                    },
                    y: {
                        ticks: { color: '#c9d1d9' },
                        grid: { color: '#30363d' }
                    }
                }
            }
        });
    }

    function populateTables() {
        populateTable('frequentlyChangedFiles', fileCommits, ['fileName', 'totalCommits', 'fixCommits', 'enhancementCommits'], 
                      ['File Name', 'Total Commits', 'Fix Commits', 'Enhancement Commits']);
        
        const importDependentData = calculateImportsDependents();
        populateTable('mostImportsDependents', importDependentData, ['fileName', 'imports', 'dependents'],
                      ['File Name', 'Number of Imports', 'Number of Dependents']);
        
        const fixRatioData = calculateFixRatios();
        populateTable('highestFixRatio', fixRatioData, ['fileName', 'totalCommits', 'fixCommits', 'fixRatio'],
                      ['File Name', 'Total Commits', 'Fix Commits', 'Fix Ratio']);
    }

    function populateTable(tableId, data, fields, headers) {
        const table = document.getElementById(tableId);
        table.innerHTML = '';
        
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        data.forEach(item => {
            const row = tbody.insertRow();
            fields.forEach(field => {
                const cell = row.insertCell();
                cell.textContent = field === 'fixRatio' ? (item[field] * 100).toFixed(2) + '%' : item[field];
            });
        });
    }

    function calculateImportsDependents() {
        const importCounts = new Map();
        const dependentCounts = new Map();

        staticRelations.forEach(relation => {
            importCounts.set(relation.file1, (importCounts.get(relation.file1) || 0) + 1);
            dependentCounts.set(relation.file2, (dependentCounts.get(relation.file2) || 0) + 1);
        });

        return Array.from(new Set([...importCounts.keys(), ...dependentCounts.keys()]))
            .map(file => ({
                fileName: file,
                imports: importCounts.get(file) || 0,
                dependents: dependentCounts.get(file) || 0
            }))
            .sort((a, b) => (b.imports + b.dependents) - (a.imports + a.dependents))
            .slice(0, 10);
    }

    function calculateFixRatios() {
        return fileCommits
            .map(file => ({
                ...file,
                fixRatio: file.totalCommits > 0 ? file.fixCommits / file.totalCommits : 0
            }))
            .sort((a, b) => b.fixRatio - a.fixRatio)
            .slice(0, 10);
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        try {
            console.log('Initializing dashboard...');
            initCytoscape();
            createCommitTypesChart();
            createTopChangedFilesChart();
            populateTables();
            console.log('Dashboard initialized successfully');
        } catch (error) {
            console.error('Error initializing dashboard:', error);
            document.getElementById('errorMessage').textContent = 'Error initializing dashboard: ' + error.message;
        }
    });
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
    const maxSharedCommits = Math.max(...analysisResult.commitRelations.map(fr => fr.sharedCommits || 0));
    return [
        ...analysisResult.commitRelations.map(fr => ({
            data: {
                source: fr.file1,
                target: fr.file2,
                weight: 1 + ((fr.sharedCommits || 0) / maxSharedCommits) * 5
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
    const b = 80;
    return `rgb(${r},${g},${b})`;
}
