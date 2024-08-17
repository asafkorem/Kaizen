const { parentPort, workerData } = require('worker_threads');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

async function processFile(repoPath, file) {
  const { stdout } = await execAsync(`git log --format="%H" -- "${file}"`, { cwd: repoPath });
  const commits = stdout.split('\n').filter(Boolean);

  for (const commit of commits) {
    parentPort.postMessage({
      type: 'update',
      data: { commit, files: [file] }
    });
  }
}

async function processFiles() {
  const { repoPath, files } = workerData;
  await Promise.all(files.map(file => processFile(repoPath, file)));
  parentPort.postMessage({ type: 'done' });
}

processFiles().catch(error => {
  console.error('Error in worker:', error);
  process.exit(1);
});
