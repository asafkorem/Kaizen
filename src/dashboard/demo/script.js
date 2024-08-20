const fileChanges = [{"fileName":".gitignore","linesOfCode":5,"totalCommits":4,"authors":[{"name":"Asaf Korem","count":4}],"fixCommits":0,"featCommits":1,"otherCommits":1},{"fileName":"Formula/code-kaizen.rb","linesOfCode":11,"totalCommits":18,"authors":[{"name":"Asaf Korem","count":18}],"fixCommits":0,"featCommits":2,"otherCommits":0},{"fileName":"README.md","linesOfCode":62,"totalCommits":14,"authors":[{"name":"Asaf Korem","count":14}],"fixCommits":4,"featCommits":1,"otherCommits":5},{"fileName":"package.json","linesOfCode":46,"totalCommits":39,"authors":[{"name":"Asaf Korem","count":39}],"fixCommits":2,"featCommits":30,"otherCommits":8},{"fileName":"release.sh","linesOfCode":82,"totalCommits":9,"authors":[{"name":"Asaf Korem","count":9}],"fixCommits":5,"featCommits":1,"otherCommits":5},{"fileName":"src/analyzeRepository.ts","linesOfCode":18,"totalCommits":2,"authors":[{"name":"Asaf Korem","count":2}],"fixCommits":0,"featCommits":1,"otherCommits":0},{"fileName":"src/cli.ts","linesOfCode":56,"totalCommits":10,"authors":[{"name":"Asaf Korem","count":10}],"fixCommits":3,"featCommits":6,"otherCommits":7},{"fileName":"src/csvGenerator.ts","linesOfCode":64,"totalCommits":6,"authors":[{"name":"Asaf Korem","count":6}],"fixCommits":2,"featCommits":4,"otherCommits":5},{"fileName":"src/dashboard/dashboardGenerator.ts","linesOfCode":46,"totalCommits":9,"authors":[{"name":"Asaf Korem","count":9}],"fixCommits":3,"featCommits":3,"otherCommits":5},{"fileName":"src/dashboard/demo/index.html","linesOfCode":50,"totalCommits":4,"authors":[{"name":"Asaf Korem","count":4}],"fixCommits":0,"featCommits":3,"otherCommits":3},{"fileName":"src/dashboard/demo/script.js","linesOfCode":391,"totalCommits":10,"authors":[{"name":"Asaf Korem","count":10}],"fixCommits":0,"featCommits":5,"otherCommits":5},{"fileName":"src/dashboard/demo/styles.css","linesOfCode":172,"totalCommits":6,"authors":[{"name":"Asaf Korem","count":6}],"fixCommits":0,"featCommits":4,"otherCommits":3},{"fileName":"src/drivers/driverRegistry.ts","linesOfCode":11,"totalCommits":3,"authors":[{"name":"Asaf Korem","count":3}],"fixCommits":0,"featCommits":1,"otherCommits":2},{"fileName":"src/drivers/jsDriver.ts","linesOfCode":32,"totalCommits":4,"authors":[{"name":"Asaf Korem","count":4}],"fixCommits":0,"featCommits":2,"otherCommits":3},{"fileName":"src/drivers/mdDriver.ts","linesOfCode":22,"totalCommits":4,"authors":[{"name":"Asaf Korem","count":4}],"fixCommits":0,"featCommits":2,"otherCommits":3},{"fileName":"src/index.ts","linesOfCode":14,"totalCommits":1,"authors":[{"name":"Asaf Korem","count":1}],"fixCommits":0,"featCommits":0,"otherCommits":0},{"fileName":"src/jsonGenerator.ts","linesOfCode":35,"totalCommits":1,"authors":[{"name":"Asaf Korem","count":1}],"fixCommits":0,"featCommits":1,"otherCommits":1},{"fileName":"src/model/classifyCommit.js","linesOfCode":34,"totalCommits":2,"authors":[{"name":"Asaf Korem","count":2}],"fixCommits":1,"featCommits":1,"otherCommits":2},{"fileName":"src/model/train/trainModel.ts","linesOfCode":35,"totalCommits":2,"authors":[{"name":"Asaf Korem","count":2}],"fixCommits":0,"featCommits":2,"otherCommits":1},{"fileName":"src/model/train/training_data.json","linesOfCode":171,"totalCommits":2,"authors":[{"name":"Asaf Korem","count":2}],"fixCommits":0,"featCommits":2,"otherCommits":1},{"fileName":"src/types.ts","linesOfCode":52,"totalCommits":6,"authors":[{"name":"Asaf Korem","count":6}],"fixCommits":1,"featCommits":3,"otherCommits":4},{"fileName":"src/utils/commit-relations/commitRelationsWorker.js","linesOfCode":28,"totalCommits":2,"authors":[{"name":"Asaf Korem","count":2}],"fixCommits":0,"featCommits":1,"otherCommits":0},{"fileName":"src/utils/commit-relations/getRepoFilesCommitRelations.ts","linesOfCode":60,"totalCommits":6,"authors":[{"name":"Asaf Korem","count":6}],"fixCommits":1,"featCommits":2,"otherCommits":2},{"fileName":"src/utils/file-analysis/enrichRepoFilesWithCommitsInfo.ts","linesOfCode":30,"totalCommits":6,"authors":[{"name":"Asaf Korem","count":6}],"fixCommits":1,"featCommits":4,"otherCommits":3},{"fileName":"src/utils/file-analysis/fileAnalysisWorker.js","linesOfCode":67,"totalCommits":4,"authors":[{"name":"Asaf Korem","count":4}],"fixCommits":2,"featCommits":2,"otherCommits":2},{"fileName":"src/utils/findRepoFilesStaticRelations.ts","linesOfCode":22,"totalCommits":4,"authors":[{"name":"Asaf Korem","count":4}],"fixCommits":0,"featCommits":2,"otherCommits":3},{"fileName":"src/utils/getRepoFiles.ts","linesOfCode":10,"totalCommits":4,"authors":[{"name":"Asaf Korem","count":4}],"fixCommits":0,"featCommits":1,"otherCommits":2},{"fileName":"tsconfig.json","linesOfCode":14,"totalCommits":1,"authors":[{"name":"Asaf Korem","count":1}],"fixCommits":0,"featCommits":0,"otherCommits":0}];
const commitRelations = [{"file1":".gitignore","file2":"package.json","sharedCommits":1},{"file1":".gitignore","file2":"tsconfig.json","sharedCommits":1},{"file1":".gitignore","file2":"release.sh","sharedCommits":1},{"file1":".gitignore","file2":"Formula/code-kaizen.rb","sharedCommits":1},{"file1":".gitignore","file2":"src/cli.ts","sharedCommits":1},{"file1":".gitignore","file2":"src/types.ts","sharedCommits":1},{"file1":".gitignore","file2":"README.md","sharedCommits":1},{"file1":".gitignore","file2":"src/index.ts","sharedCommits":1},{"file1":".gitignore","file2":"src/csvGenerator.ts","sharedCommits":1},{"file1":"package.json","file2":"tsconfig.json","sharedCommits":1},{"file1":"package.json","file2":"release.sh","sharedCommits":3},{"file1":"Formula/code-kaizen.rb","file2":"package.json","sharedCommits":2},{"file1":"package.json","file2":"src/cli.ts","sharedCommits":3},{"file1":"package.json","file2":"src/types.ts","sharedCommits":3},{"file1":"README.md","file2":"package.json","sharedCommits":5},{"file1":"package.json","file2":"src/index.ts","sharedCommits":1},{"file1":"package.json","file2":"src/csvGenerator.ts","sharedCommits":3},{"file1":"release.sh","file2":"tsconfig.json","sharedCommits":1},{"file1":"Formula/code-kaizen.rb","file2":"tsconfig.json","sharedCommits":1},{"file1":"src/cli.ts","file2":"tsconfig.json","sharedCommits":1},{"file1":"src/types.ts","file2":"tsconfig.json","sharedCommits":1},{"file1":"README.md","file2":"tsconfig.json","sharedCommits":1},{"file1":"src/index.ts","file2":"tsconfig.json","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"tsconfig.json","sharedCommits":1},{"file1":"Formula/code-kaizen.rb","file2":"release.sh","sharedCommits":1},{"file1":"release.sh","file2":"src/cli.ts","sharedCommits":1},{"file1":"release.sh","file2":"src/types.ts","sharedCommits":1},{"file1":"README.md","file2":"release.sh","sharedCommits":1},{"file1":"release.sh","file2":"src/index.ts","sharedCommits":1},{"file1":"release.sh","file2":"src/csvGenerator.ts","sharedCommits":1},{"file1":"Formula/code-kaizen.rb","file2":"src/cli.ts","sharedCommits":1},{"file1":"Formula/code-kaizen.rb","file2":"src/types.ts","sharedCommits":1},{"file1":"Formula/code-kaizen.rb","file2":"README.md","sharedCommits":1},{"file1":"Formula/code-kaizen.rb","file2":"src/index.ts","sharedCommits":1},{"file1":"Formula/code-kaizen.rb","file2":"src/csvGenerator.ts","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/types.ts","sharedCommits":3},{"file1":"README.md","file2":"src/cli.ts","sharedCommits":2},{"file1":"src/cli.ts","file2":"src/index.ts","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/csvGenerator.ts","sharedCommits":4},{"file1":"README.md","file2":"src/types.ts","sharedCommits":1},{"file1":"src/index.ts","file2":"src/types.ts","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"src/types.ts","sharedCommits":5},{"file1":"README.md","file2":"src/index.ts","sharedCommits":1},{"file1":"README.md","file2":"src/csvGenerator.ts","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"src/index.ts","sharedCommits":1},{"file1":"package.json","file2":"src/dashboard/demo/styles.css","sharedCommits":1},{"file1":"package.json","file2":"src/dashboard/demo/script.js","sharedCommits":3},{"file1":"src/dashboard/demo/script.js","file2":"src/dashboard/demo/styles.css","sharedCommits":3},{"file1":"package.json","file2":"src/utils/getRepoFiles.ts","sharedCommits":1},{"file1":"package.json","file2":"src/dashboard/dashboardGenerator.ts","sharedCommits":1},{"file1":"src/dashboard/dashboardGenerator.ts","file2":"src/utils/getRepoFiles.ts","sharedCommits":1},{"file1":"src/dashboard/demo/script.js","file2":"src/utils/getRepoFiles.ts","sharedCommits":1},{"file1":"src/dashboard/dashboardGenerator.ts","file2":"src/dashboard/demo/script.js","sharedCommits":4},{"file1":"package.json","file2":"src/jsonGenerator.ts","sharedCommits":1},{"file1":"package.json","file2":"src/drivers/jsDriver.ts","sharedCommits":1},{"file1":"package.json","file2":"src/drivers/mdDriver.ts","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/jsonGenerator.ts","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/drivers/jsDriver.ts","sharedCommits":2},{"file1":"src/cli.ts","file2":"src/drivers/mdDriver.ts","sharedCommits":2},{"file1":"src/jsonGenerator.ts","file2":"src/types.ts","sharedCommits":1},{"file1":"src/drivers/jsDriver.ts","file2":"src/types.ts","sharedCommits":1},{"file1":"src/drivers/mdDriver.ts","file2":"src/types.ts","sharedCommits":1},{"file1":"src/drivers/jsDriver.ts","file2":"src/jsonGenerator.ts","sharedCommits":1},{"file1":"src/drivers/mdDriver.ts","file2":"src/jsonGenerator.ts","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"src/jsonGenerator.ts","sharedCommits":1},{"file1":"src/drivers/jsDriver.ts","file2":"src/drivers/mdDriver.ts","sharedCommits":4},{"file1":"src/csvGenerator.ts","file2":"src/drivers/jsDriver.ts","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"src/drivers/mdDriver.ts","sharedCommits":1},{"file1":"src/model/classifyCommit.js","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/dashboard/dashboardGenerator.ts","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/dashboard/dashboardGenerator.ts","sharedCommits":4},{"file1":"src/csvGenerator.ts","file2":"src/dashboard/dashboardGenerator.ts","sharedCommits":2},{"file1":"src/utils/commit-relations/commitRelationsWorker.js","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/utils/commit-relations/getRepoFilesCommitRelations.ts","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/utils/file-analysis/enrichRepoFilesWithCommitsInfo.ts","file2":"src/utils/file-analysis/fileAnalysisWorker.js","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/utils/commit-relations/commitRelationsWorker.js","sharedCommits":1},{"file1":"src/utils/commit-relations/commitRelationsWorker.js","file2":"src/utils/commit-relations/getRepoFilesCommitRelations.ts","sharedCommits":1},{"file1":"src/utils/commit-relations/commitRelationsWorker.js","file2":"src/utils/file-analysis/enrichRepoFilesWithCommitsInfo.ts","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/utils/commit-relations/getRepoFilesCommitRelations.ts","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/utils/file-analysis/enrichRepoFilesWithCommitsInfo.ts","sharedCommits":1},{"file1":"src/utils/commit-relations/getRepoFilesCommitRelations.ts","file2":"src/utils/file-analysis/enrichRepoFilesWithCommitsInfo.ts","sharedCommits":1},{"file1":"src/dashboard/dashboardGenerator.ts","file2":"src/dashboard/demo/index.html","sharedCommits":1},{"file1":"src/dashboard/demo/index.html","file2":"src/dashboard/demo/script.js","sharedCommits":1},{"file1":"src/dashboard/demo/index.html","file2":"src/types.ts","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"src/dashboard/demo/index.html","sharedCommits":1},{"file1":"src/dashboard/demo/index.html","file2":"src/dashboard/demo/styles.css","sharedCommits":1},{"file1":"src/dashboard/demo/styles.css","file2":"src/types.ts","sharedCommits":1},{"file1":"src/csvGenerator.ts","file2":"src/dashboard/demo/styles.css","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/cli.ts","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/utils/findRepoFilesStaticRelations.ts","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/drivers/jsDriver.ts","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/drivers/mdDriver.ts","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/drivers/driverRegistry.ts","sharedCommits":1},{"file1":"src/analyzeRepository.ts","file2":"src/utils/getRepoFiles.ts","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/utils/findRepoFilesStaticRelations.ts","sharedCommits":2},{"file1":"src/cli.ts","file2":"src/drivers/driverRegistry.ts","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/utils/getRepoFiles.ts","sharedCommits":1},{"file1":"src/drivers/jsDriver.ts","file2":"src/utils/findRepoFilesStaticRelations.ts","sharedCommits":3},{"file1":"src/drivers/mdDriver.ts","file2":"src/utils/findRepoFilesStaticRelations.ts","sharedCommits":3},{"file1":"src/drivers/driverRegistry.ts","file2":"src/utils/findRepoFilesStaticRelations.ts","sharedCommits":3},{"file1":"src/utils/findRepoFilesStaticRelations.ts","file2":"src/utils/getRepoFiles.ts","sharedCommits":3},{"file1":"src/drivers/driverRegistry.ts","file2":"src/drivers/jsDriver.ts","sharedCommits":3},{"file1":"src/drivers/jsDriver.ts","file2":"src/utils/getRepoFiles.ts","sharedCommits":3},{"file1":"src/drivers/driverRegistry.ts","file2":"src/drivers/mdDriver.ts","sharedCommits":3},{"file1":"src/drivers/mdDriver.ts","file2":"src/utils/getRepoFiles.ts","sharedCommits":3},{"file1":"src/drivers/driverRegistry.ts","file2":"src/utils/getRepoFiles.ts","sharedCommits":3},{"file1":"src/model/train/trainModel.ts","file2":"src/model/train/training_data.json","sharedCommits":1},{"file1":"src/cli.ts","file2":"src/dashboard/demo/script.js","sharedCommits":2},{"file1":"src/dashboard/dashboardGenerator.ts","file2":"src/utils/findRepoFilesStaticRelations.ts","sharedCommits":1},{"file1":"src/dashboard/demo/script.js","file2":"src/utils/findRepoFilesStaticRelations.ts","sharedCommits":1},{"file1":"src/dashboard/dashboardGenerator.ts","file2":"src/types.ts","sharedCommits":2},{"file1":"README.md","file2":"src/dashboard/demo/script.js","sharedCommits":1}];
const staticRelations = [{"dependentFile":"src/analyzeRepository.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/analyzeRepository.ts","dependencyFile":"src/utils/commit-relations/getRepoFilesCommitRelations.ts"},{"dependentFile":"src/analyzeRepository.ts","dependencyFile":"src/utils/file-analysis/enrichRepoFilesWithCommitsInfo.ts"},{"dependentFile":"src/analyzeRepository.ts","dependencyFile":"src/utils/findRepoFilesStaticRelations.ts"},{"dependentFile":"src/analyzeRepository.ts","dependencyFile":"src/utils/getRepoFiles.ts"},{"dependentFile":"src/cli.ts","dependencyFile":"src/analyzeRepository.ts"},{"dependentFile":"src/cli.ts","dependencyFile":"src/csvGenerator.ts"},{"dependentFile":"src/cli.ts","dependencyFile":"src/dashboard/dashboardGenerator.ts"},{"dependentFile":"src/cli.ts","dependencyFile":"src/jsonGenerator.ts"},{"dependentFile":"src/cli.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/csvGenerator.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/dashboard/dashboardGenerator.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/drivers/driverRegistry.ts","dependencyFile":"src/drivers/jsDriver.ts"},{"dependentFile":"src/drivers/driverRegistry.ts","dependencyFile":"src/drivers/mdDriver.ts"},{"dependentFile":"src/drivers/jsDriver.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/drivers/mdDriver.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/index.ts","dependencyFile":"src/cli.ts"},{"dependentFile":"src/jsonGenerator.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/model/train/trainModel.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/utils/commit-relations/getRepoFilesCommitRelations.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/utils/file-analysis/enrichRepoFilesWithCommitsInfo.ts","dependencyFile":"src/types.ts"},{"dependentFile":"src/utils/file-analysis/fileAnalysisWorker.js","dependencyFile":"src/model/classifyCommit.js"},{"dependentFile":"src/utils/findRepoFilesStaticRelations.ts","dependencyFile":"src/drivers/driverRegistry.ts"},{"dependentFile":"src/utils/findRepoFilesStaticRelations.ts","dependencyFile":"src/types.ts"}];

/* DO NOT REMOVE THIS */

const ROWS_PER_PAGE = 10;
const PAGINATION_ITEMS = 7;

const tableData = {
  frequentlyChangedFiles: { data: fileChanges, currentPage: 1, sortColumn: null, sortDirection: 'asc', filterType: 'string' },
  mostImportsDependents: { data: [], currentPage: 1, sortColumn: null, sortDirection: 'asc', filterType: 'string' },
  mostCoupledFiles: { data: commitRelations, currentPage: 1, sortColumn: null, sortDirection: 'asc', filterType: 'string' }
};

function initDashboard() {
  initCytoscape();
  createCharts();
  tableData.mostImportsDependents.data = calculateImportsDependents();
  initTables();
}

function initCytoscape() {
  const maxLoc = Math.max(...fileChanges.map(file => file.linesOfCode));
  const maxCommits = Math.max(...fileChanges.map(file => file.totalCommits));

  const nodes = fileChanges.map(file => ({
    data: {
      id: file.fileName,
      size: 10 + (file.linesOfCode / maxLoc) * 150,
      borderWidth: 1 + (file.totalCommits / maxCommits) * 9,
      color: calculateColor(file)
    }
  }));

  const edges = staticRelations.map(relation => ({
    data: {
      source: relation.dependentFile,
      target: relation.dependencyFile,
      weight: calculateEdgeWeight(relation.dependentFile, relation.dependencyFile)
    }
  }));

  cytoscape({
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
          'border-width': 'data(borderWidth)',
          'border-color': '#c9d1d9',
          'font-size': '14px',
          'text-valign': 'center',
          'text-halign': 'center',
          'text-outline-width': 3,
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
}

function calculateColor(file) {
  const total = file.totalCommits;
  const r = Math.floor((file.fixCommits / total) * 255);
  const g = Math.floor((file.featCommits / total) * 255);
  const b = Math.floor((file.otherCommits / total) * 255);
  return `rgb(${r},${g},${b})`;
}

function calculateEdgeWeight(file1, file2) {
  const relation = commitRelations.find(r =>
    (r.file1 === file1 && r.file2 === file2) || (r.file1 === file2 && r.file2 === file1)
  );
  const sharedCommits = relation ? relation.sharedCommits : 0;
  const maxSharedCommits = Math.max(...commitRelations.map(rel => rel.sharedCommits));
  return 1 + (sharedCommits / maxSharedCommits) * 9;
}

function createCharts() {
  createCommitTypesChart();
  createTopChangedFilesChart();
}

function createCommitTypesChart() {
  const commitTypes = fileChanges.reduce((acc, file) => {
    acc.fixes += file.fixCommits;
    acc.enhancements += file.featCommits;
    acc.others += file.otherCommits;
    return acc;
  }, { fixes: 0, enhancements: 0, others: 0 });

  new Chart(document.getElementById('commitTypesChart').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Fixes', 'Enhancements', 'Other'],
      datasets: [{
        data: [commitTypes.fixes, commitTypes.enhancements, commitTypes.others],
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
          labels: { color: '#c9d1d9' }
        }
      }
    }
  });
}

function createTopChangedFilesChart() {
  const topFiles = fileChanges
  .sort((a, b) => b.totalCommits - a.totalCommits)
  .slice(0, 5);

  new Chart(document.getElementById('topChangedFilesChart').getContext('2d'), {
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
          labels: { color: '#c9d1d9' }
        }
      },
      scales: {
        x: { ticks: { color: '#c9d1d9' }, grid: { color: '#30363d' } },
        y: { ticks: { color: '#c9d1d9' }, grid: { color: '#30363d' } }
      }
    }
  });
}

function initTables() {
  ['frequentlyChangedFiles', 'mostImportsDependents', 'mostCoupledFiles'].forEach(tableId => {
    createTable(tableId);
    createSearchBar(tableId);
    createFilterTypeToggle(tableId);
    updateTable(tableId);
  });
}

function createSearchBar(tableId) {
  const container = document.getElementById(tableId).parentNode;
  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.placeholder = 'Filter by string...';
  searchBar.className = 'table-search';
  searchBar.addEventListener('input', () => filterTable(tableId));
  container.insertBefore(searchBar, container.firstChild);
}

function createFilterTypeToggle(tableId) {
  const container = document.getElementById(tableId).parentNode;
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Use Regex';
  toggleButton.className = 'filter-toggle-btn';
  toggleButton.addEventListener('click', () => toggleFilterType(tableId));
  container.insertBefore(toggleButton, container.firstChild.nextSibling);
}

function toggleFilterType(tableId) {
  const tableInfo = tableData[tableId];
  tableInfo.filterType = tableInfo.filterType === 'string' ? 'regex' : 'string';
  const toggleButton = document.getElementById(tableId).parentNode.querySelector('.filter-toggle-btn');
  toggleButton.textContent = tableInfo.filterType === 'string' ? 'Use Regex' : 'Use String';
  const searchBar = document.getElementById(tableId).parentNode.querySelector('.table-search');
  searchBar.placeholder = `Filter by ${tableInfo.filterType}...`;
  filterTable(tableId);
}

function filterTable(tableId) {
  const searchTerm = document.querySelector(`#${tableId}`).parentNode.querySelector('.table-search').value;
  const tableInfo = tableData[tableId];

  if (tableInfo.filterType === 'string') {
    tableInfo.filteredData = tableInfo.data.filter(item =>
      Object.values(item).some(val =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  } else {
    try {
      const regex = new RegExp(searchTerm, 'i');
      tableInfo.filteredData = tableInfo.data.filter(item =>
        Object.values(item).some(val =>
          regex.test(val.toString())
        )
      );
    } catch (e) {
      // Invalid regex, return all data
      tableInfo.filteredData = tableInfo.data;
    }
  }

  tableInfo.currentPage = 1;
  updateTable(tableId);
}

function updateTable(tableId) {
  const table = document.getElementById(tableId);
  const tbody = table.tBodies[0];
  tbody.innerHTML = '';

  const startIndex = (tableData[tableId].currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const paginatedData = (tableData[tableId].filteredData || tableData[tableId].data).slice(startIndex, endIndex);

  paginatedData.forEach(item => {
    const row = tbody.insertRow();
    getTableFields(tableId).forEach(field => {
      const cell = row.insertCell();
      cell.textContent = item[field.key];
    });
  });

  updatePagination(tableId);
}

function updatePagination(tableId) {
  const container = document.getElementById(tableId).parentNode;
  let pagination = container.querySelector('.pagination');
  if (!pagination) {
    pagination = document.createElement('div');
    pagination.className = 'pagination';
    container.appendChild(pagination);
  }
  pagination.innerHTML = '';

  const totalPages = Math.ceil((tableData[tableId].filteredData || tableData[tableId].data).length / ROWS_PER_PAGE);

  const currentPage = tableData[tableId].currentPage;

  // Previous button
  addPaginationButton(pagination, '←', () => changePage(tableId, currentPage - 1), currentPage > 1);

  const pageItems = getPageItems(currentPage, totalPages);
  pageItems.forEach(item => {
    if (item === '...') {
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.className = 'pagination-ellipsis';
      ellipsis.setAttribute('aria-hidden', 'true');
      pagination.appendChild(ellipsis);
    } else {
      addPaginationButton(pagination, item.toString(), () => changePage(tableId, item), true, item === currentPage);
    }
  });

  // Next button
  addPaginationButton(pagination, '→', () => changePage(tableId, currentPage + 1), currentPage < totalPages);
}

function getPageItems(currentPage, totalPages) {
  if (totalPages <= PAGINATION_ITEMS - 2) { // -2 for prev and next buttons
    return Array.from({length: totalPages}, (_, i) => i + 1);
  }

  let items = [];
  const sideItems = Math.floor((PAGINATION_ITEMS - 3) / 2); // 3 = current + 2 ellipses
  const leftLimit = sideItems + 1;
  const rightLimit = totalPages - sideItems;

  // Always include first page
  items.push(1);

  if (currentPage <= leftLimit) {
    // Close to the start
    items = items.concat(range(2, PAGINATION_ITEMS - 2));
    items.push('...');
    items.push(totalPages);
  } else if (currentPage >= rightLimit) {
    // Close to the end
    items.push('...');
    items = items.concat(range(totalPages - PAGINATION_ITEMS + 3, totalPages));
  } else {
    // Middle case
    items.push('...');
    const rangeStart = Math.max(currentPage - Math.floor(sideItems / 2), leftLimit);
    const rangeEnd = Math.min(rangeStart + sideItems, rightLimit);
    items = items.concat(range(rangeStart, rangeEnd));
    items.push('...');
    items.push(totalPages);
  }

  return items;
}

function range(start, end) {
  return Array.from({length: end - start + 1}, (_, i) => start + i);
}

function addPaginationButton(container, text, onClick, enabled, isActive = false) {
  const button = document.createElement('button');
  button.textContent = text;
  button.onclick = onClick;
  button.disabled = !enabled;
  if (isActive) button.classList.add('active');
  container.appendChild(button);
}

function changePage(tableId, page) {
  tableData[tableId].currentPage = page;
  updateTable(tableId);
}

function calculateImportsDependents() {
  const importCounts = new Map();
  const dependentCounts = new Map();

  staticRelations.forEach(relation => {
    importCounts.set(relation.dependentFile, (importCounts.get(relation.dependentFile) || 0) + 1);
    dependentCounts.set(relation.dependencyFile, (dependentCounts.get(relation.dependencyFile) || 0) + 1);
  });

  return Array.from(new Set([...importCounts.keys(), ...dependentCounts.keys()]))
  .map(file => ({
    fileName: file,
    imports: importCounts.get(file) || 0,
    dependents: dependentCounts.get(file) || 0,
    linesOfCode: fileChanges.find(f => f.fileName === file)?.linesOfCode || 0
  }))
  .sort((a, b) => (b.imports + b.dependents) - (a.imports + a.dependents));
}

function getTableFields(tableId) {
  switch (tableId) {
    case 'frequentlyChangedFiles':
      return [
        { key: 'fileName', label: 'File Name' },
        { key: 'totalCommits', label: 'Total Commits' },
        { key: 'fixCommits', label: 'Bug Fixes' },
        { key: 'featCommits', label: 'New Features' },
        { key: 'otherCommits', label: 'Other Changes' },
        { key: 'linesOfCode', label: 'Lines of Code' }
      ];
    case 'mostImportsDependents':
      return [
        { key: 'fileName', label: 'File Name' },
        { key: 'imports', label: 'Imports' },
        { key: 'dependents', label: 'Dependents' },
        { key: 'linesOfCode', label: 'Lines of Code' }
      ];
    case 'mostCoupledFiles':
      return [
        { key: 'file1', label: 'File 1' },
        { key: 'file2', label: 'File 2' },
        { key: 'sharedCommits', label: 'Shared Commits' }
      ];
    default:
      return [];
  }
}

function createTable(tableId) {
  const table = document.getElementById(tableId);
  table.innerHTML = '';
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  getTableFields(tableId).forEach(field => {
    const th = document.createElement('th');
    th.textContent = field.label;
    th.onclick = () => sortTable(tableId, field.key);
    headerRow.appendChild(th);
  });
  table.createTBody();
}

function sortTable(tableId, column) {
  const tableInfo = tableData[tableId];
  tableInfo.sortDirection = tableInfo.sortColumn === column && tableInfo.sortDirection === 'asc' ? 'desc' : 'asc';
  tableInfo.sortColumn = column;

  tableInfo.data.sort((a, b) => {
    const aValue = a[column];
    const bValue = b[column];
    const comparison = isNaN(aValue) ? aValue.localeCompare(bValue) : aValue - bValue;
    return tableInfo.sortDirection === 'asc' ? comparison : -comparison;
  });

  tableInfo.currentPage = 1;
  updateTable(tableId);
}

function filterFiles() {
  ['frequentlyChangedFiles', 'mostImportsDependents', 'mostCoupledFiles'].forEach(filterTable);
}

document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
});

