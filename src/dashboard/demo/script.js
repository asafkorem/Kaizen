const fileChanges = [
  { fileName: "public/index.html", linesOfCode: 85, totalCommits: 12, fixCommits: 3, enhancementCommits: 9 },
  { fileName: "public/favicon.ico", linesOfCode: 1, totalCommits: 2, fixCommits: 0, enhancementCommits: 2 },
  { fileName: "src/components/Calculator/Calculator.jsx", linesOfCode: 250, totalCommits: 90, fixCommits: 15, enhancementCommits: 30 },
  { fileName: "src/components/Calculator/Calculator.module.css", linesOfCode: 120, totalCommits: 30, fixCommits: 8, enhancementCommits: 22 },
  { fileName: "src/components/Display/Display.jsx", linesOfCode: 80, totalCommits: 240, fixCommits: 7, enhancementCommits: 18 },
  { fileName: "src/components/Display/Display.module.css", linesOfCode: 50, totalCommits: 50, fixCommits: 5, enhancementCommits: 15 },
  { fileName: "src/components/Keypad/Keypad.jsx", linesOfCode: 300, totalCommits: 50, fixCommits: 18, enhancementCommits: 32 },
  { fileName: "src/components/Keypad/Keypad.module.css", linesOfCode: 150, totalCommits: 60, fixCommits: 10, enhancementCommits: 25 },
  { fileName: "src/redux/actions/calculatorActions.js", linesOfCode: 100, totalCommits: 40, fixCommits: 12, enhancementCommits: 28 },
  { fileName: "src/redux/actions/index.js", linesOfCode: 20, totalCommits: 15, fixCommits: 3, enhancementCommits: 12 },
  { fileName: "src/redux/reducers/calculatorReducer.js", linesOfCode: 200, totalCommits: 55, fixCommits: 20, enhancementCommits: 35 },
  { fileName: "src/redux/reducers/index.js", linesOfCode: 30, totalCommits: 20, fixCommits: 5, enhancementCommits: 15 },
  { fileName: "src/redux/reducers/reducerHelpers.js", linesOfCode: 150, totalCommits: 35, fixCommits: 12, enhancementCommits: 23 },
  { fileName: "src/redux/selectors/calculatorSelectors.js", linesOfCode: 80, totalCommits: 30, fixCommits: 8, enhancementCommits: 22 },
  { fileName: "src/redux/store.js", linesOfCode: 50, totalCommits: 25, fixCommits: 6, enhancementCommits: 19 },
  { fileName: "src/utils/mathOperations.js", linesOfCode: 300, totalCommits: 70, fixCommits: 25, enhancementCommits: 45 },
  { fileName: "src/utils/formatters.js", linesOfCode: 100, totalCommits: 35, fixCommits: 10, enhancementCommits: 25 },
  { fileName: "src/hooks/useCalculator.js", linesOfCode: 150, totalCommits: 40, fixCommits: 15, enhancementCommits: 25 },
  { fileName: "src/services/calculatorService.js", linesOfCode: 400, totalCommits: 80, fixCommits: 30, enhancementCommits: 50 },
  { fileName: "src/constants/actionTypes.js", linesOfCode: 50, totalCommits: 20, fixCommits: 5, enhancementCommits: 15 },
  { fileName: "src/constants/mathConstants.js", linesOfCode: 30, totalCommits: 10, fixCommits: 2, enhancementCommits: 8 },
  { fileName: "src/config/featureToggles.js", linesOfCode: 40, totalCommits: 25, fixCommits: 8, enhancementCommits: 17 },
  { fileName: "src/config/appConfig.js", linesOfCode: 60, totalCommits: 30, fixCommits: 10, enhancementCommits: 20 },
  { fileName: "src/App.jsx", linesOfCode: 100, totalCommits: 35, fixCommits: 12, enhancementCommits: 23 },
  { fileName: "src/index.js", linesOfCode: 40, totalCommits: 15, fixCommits: 4, enhancementCommits: 11 },
  { fileName: "src/styles/global.css", linesOfCode: 200, totalCommits: 45, fixCommits: 15, enhancementCommits: 30 },
  { fileName: "src/styles/variables.css", linesOfCode: 80, totalCommits: 30, fixCommits: 8, enhancementCommits: 22 },
  { fileName: "tests/unit/mathOperations.test.js", linesOfCode: 300, totalCommits: 60, fixCommits: 22, enhancementCommits: 38 },
  { fileName: "tests/integration/Calculator.test.js", linesOfCode: 400, totalCommits: 70, fixCommits: 25, enhancementCommits: 45 },
  { fileName: "package.json", linesOfCode: 150, totalCommits: 100, fixCommits: 30, enhancementCommits: 70 },
  { fileName: "README.md", linesOfCode: 200, totalCommits: 50, fixCommits: 10, enhancementCommits: 40 },
  { fileName: ".gitignore", linesOfCode: 50, totalCommits: 10, fixCommits: 2, enhancementCommits: 8 },
  { fileName: ".eslintrc.js", linesOfCode: 100, totalCommits: 25, fixCommits: 8, enhancementCommits: 17 },
  { fileName: ".prettierrc", linesOfCode: 30, totalCommits: 15, fixCommits: 4, enhancementCommits: 11 },
  { fileName: "jest.config.js", linesOfCode: 60, totalCommits: 20, fixCommits: 6, enhancementCommits: 14 },
  { fileName: "babel.config.js", linesOfCode: 40, totalCommits: 15, fixCommits: 4, enhancementCommits: 11 }
];

const commitRelations = [
  { file1: "src/components/Calculator/Calculator.jsx", file2: "src/components/Calculator/Calculator.module.css", sharedCommits: 25 },
  { file1: "src/components/Calculator/Calculator.jsx", file2: "src/components/Display/Display.jsx", sharedCommits: 18 },
  { file1: "src/components/Calculator/Calculator.jsx", file2: "src/components/Keypad/Keypad.jsx", sharedCommits: 22 },
  { file1: "src/components/Calculator/Calculator.jsx", file2: "src/redux/actions/calculatorActions.js", sharedCommits: 15 },
  { file1: "src/components/Calculator/Calculator.jsx", file2: "src/redux/reducers/calculatorReducer.js", sharedCommits: 20 },
  { file1: "src/components/Display/Display.jsx", file2: "src/components/Display/Display.module.css", sharedCommits: 15 },
  { file1: "src/components/Display/Display.jsx", file2: "src/utils/formatters.js", sharedCommits: 10 },
  { file1: "src/components/Keypad/Keypad.jsx", file2: "src/components/Keypad/Keypad.module.css", sharedCommits: 20 },
  { file1: "src/components/Keypad/Keypad.jsx", file2: "src/utils/mathOperations.js", sharedCommits: 25 },
  { file1: "src/redux/actions/calculatorActions.js", file2: "src/redux/reducers/calculatorReducer.js", sharedCommits: 30 },
  { file1: "src/redux/actions/calculatorActions.js", file2: "src/constants/actionTypes.js", sharedCommits: 15 },
  { file1: "src/redux/reducers/calculatorReducer.js", file2: "src/redux/reducers/reducerHelpers.js", sharedCommits: 18 },
  { file1: "src/redux/reducers/calculatorReducer.js", file2: "src/redux/selectors/calculatorSelectors.js", sharedCommits: 12 },
  { file1: "src/utils/mathOperations.js", file2: "src/services/calculatorService.js", sharedCommits: 35 },
  { file1: "src/utils/mathOperations.js", file2: "tests/unit/mathOperations.test.js", sharedCommits: 40 },
  { file1: "src/hooks/useCalculator.js", file2: "src/components/Calculator/Calculator.jsx", sharedCommits: 22 },
  { file1: "src/hooks/useCalculator.js", file2: "src/redux/actions/calculatorActions.js", sharedCommits: 18 },
  { file1: "src/services/calculatorService.js", file2: "tests/integration/Calculator.test.js", sharedCommits: 30 },
  { file1: "src/config/featureToggles.js", file2: "src/components/Calculator/Calculator.jsx", sharedCommits: 10 },
  { file1: "src/config/appConfig.js", file2: "src/index.js", sharedCommits: 8 },
  { file1: "package.json", file2: "src/index.js", sharedCommits: 12 },
  { file1: "README.md", file2: "package.json", sharedCommits: 15 },
  { file1: ".eslintrc.js", file2: "src/index.js", sharedCommits: 5 },
  { file1: "jest.config.js", file2: "tests/unit/mathOperations.test.js", sharedCommits: 8 },
  { file1: "babel.config.js", file2: "src/index.js", sharedCommits: 6 }
];

const staticRelations = [
  { dependentFile: "src/index.js", dependencyFile: "src/App.jsx" },
  { dependentFile: "src/index.js", dependencyFile: "src/redux/store.js" },
  { dependentFile: "src/App.jsx", dependencyFile: "src/components/Calculator/Calculator.jsx" },
  { dependentFile: "src/components/Calculator/Calculator.jsx", dependencyFile: "src/components/Display/Display.jsx" },
  { dependentFile: "src/components/Calculator/Calculator.jsx", dependencyFile: "src/components/Keypad/Keypad.jsx" },
  { dependentFile: "src/components/Calculator/Calculator.jsx", dependencyFile: "src/hooks/useCalculator.js" },
  { dependentFile: "src/components/Calculator/Calculator.jsx", dependencyFile: "src/config/featureToggles.js" },
  { dependentFile: "src/hooks/useCalculator.js", dependencyFile: "src/redux/actions/calculatorActions.js" },
  { dependentFile: "src/hooks/useCalculator.js", dependencyFile: "src/redux/selectors/calculatorSelectors.js" },
  { dependentFile: "src/redux/actions/calculatorActions.js", dependencyFile: "src/constants/actionTypes.js" },
  { dependentFile: "src/redux/reducers/calculat∂orReducer.js", dependencyFile: "src/constants/actionTypes.js" },
  { dependentFile: "src/redux/reducers/calculatorReducer.js", dependencyFile: "src/redux/reducers/reducerHelpers.js" },
  { dependentFile: "src/redux/selectors/calculatorSelectors.js", dependencyFile: "src/redux/reducers/index.js" },
  { dependentFile: "src/redux/store.js", dependencyFile: "src/redux/reducers/index.js" },
  { dependentFile: "src/redux/reducers/index.js", dependencyFile: "src/redux/reducers/calculatorReducer.js" },
  { dependentFile: "src/components/Display/Display.jsx", dependencyFile: "src/utils/formatters.js" },
  { dependentFile: "src/components/Keypad/Keypad.jsx", dependencyFile: "src/utils/mathOperations.js" },
  { dependentFile: "src/services/calculatorService.js", dependencyFile: "src/utils/mathOperations.js" },
  { dependentFile: "src/services/calculatorService.js", dependencyFile: "src/constants/mathConstants.js" },
  { dependentFile: "src/utils/mathOperations.js", dependencyFile: "src/constants/mathConstants.js" },
  { dependentFile: "tests/unit/mathOperations.test.js", dependencyFile: "src/utils/mathOperations.js" },
  { dependentFile: "tests/integration/Calculator.test.js", dependencyFile: "src/components/Calculator/Calculator.jsx" },
  { dependentFile: "tests/integration/Calculator.test.js", dependencyFile: "src/services/calculatorService.js" }
];

/* DO NOT REMOVE THIS */

function initDashboard() {
  initCytoscape();
  createCommitTypesChart();
  createTopChangedFilesChart();
  populateTables();
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
  const fixes = file.fixCommits;
  const enhancements = file.enhancementCommits;
  const others = total - fixes - enhancements;

  const r = Math.floor((fixes / total) * 255);
  const g = Math.floor((enhancements / total) * 255);
  const b = Math.floor((others / total) * 255);

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

function createCommitTypesChart() {
  const totalCommits = fileChanges.reduce((sum, file) => sum + file.totalCommits, 0);
  const totalFixes = fileChanges.reduce((sum, file) => sum + file.fixCommits, 0);
  const totalEnhancements = fileChanges.reduce((sum, file) => sum + file.enhancementCommits, 0);
  const otherCommits = totalCommits - totalFixes - totalEnhancements;

  new Chart(document.getElementById('commitTypesChart').getContext('2d'), {
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
  populateTable('frequentlyChangedFiles', fileChanges, ['fileName', 'totalCommits', 'fixCommits', 'enhancementCommits', 'linesOfCode']);
  populateTable('mostImportsDependents', calculateImportsDependents(), ['fileName', 'imports', 'dependents', 'linesOfCode']);
  populateTable('mostCoupledFiles', commitRelations, ['file1', 'file2', 'sharedCommits']);
}

function populateTable(tableId, data, fields) {
  const table = document.getElementById(tableId);
  table.innerHTML = '';

  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  fields.forEach((field, index) => {
    const th = document.createElement('th');
    th.textContent = field;
    th.onclick = () => sortTable(tableId, index);
    headerRow.appendChild(th);
  });

  const tbody = table.createTBody();
  data.forEach(item => {
    const row = tbody.insertRow();
    fields.forEach(field => {
      const cell = row.insertCell();
      cell.textContent = item[field];
    });
  });
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
    linesOfCode: fileChanges.find(f => f.fileName === file).linesOfCode
  }))
  .sort((a, b) => (b.imports + b.dependents) - (a.imports + a.dependents))
  .slice(0, 10);
}

function sortTable(tableId, columnIndex) {
  const table = document.getElementById(tableId);
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent;
    const bValue = b.cells[columnIndex].textContent;
    return isNaN(aValue) ? aValue.localeCompare(bValue) : Number(bValue) - Number(aValue);
  });

  rows.forEach(row => tbody.appendChild(row));
}

function filterFiles() {
  const filter = document.getElementById('fileSearchBox').value.toUpperCase();
  const table = document.getElementById('frequentlyChangedFiles');
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const cellText = rows[i].cells[0].textContent || rows[i].cells[0].innerText;
    rows[i].style.display = cellText.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
  document.getElementById('fileSearchBox').addEventListener('keyup', filterFiles);
  console.log('Dashboard initialized successfully');
});
