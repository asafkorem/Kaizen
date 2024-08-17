const { parentPort, workerData } = require('worker_threads');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

async function analyzeFileCommits(repoPath, file) {
  const commits = await getFileCommits(repoPath, file);
  const linesOfCode = await getFileLinesOfCode(repoPath, file);
  const authors = await getCommitAuthors(repoPath, file);

  return {
    fileName: file,
    linesOfCode,
    totalCommits: commits.length,
    authors,
    ...await classifyCommits(commits)
  };
}

async function getFileCommits(repoPath, file) {
  const { stdout } = await execAsync(`git log --follow --format="%H %s" -- "${file}"`, { cwd: repoPath });
  return stdout.split('\n').filter(Boolean).map(line => {
    const [hash, ...messageParts] = line.split(' ');
    return { hash, message: messageParts.join(' ') };
  });
}

async function getFileLinesOfCode(repoPath, file) {
  const { stdout } = await execAsync(`git show HEAD:"${file}" | wc -l`, { cwd: repoPath });
  return parseInt(stdout.trim(), 10);
}

async function classifyCommits(commits) {
  // You'll need to implement this function or import it from another file
  // For now, let's assume it returns a simple object
  return { fixCommits: 0, featCommits: 0, otherCommits: commits.length };
}

async function getCommitAuthors(repoPath, file) {
  const { stdout } = await execAsync(`git log --follow --format="%aN" -- "${file}" | sort | uniq -c | sort -rn`, { cwd: repoPath });
  return stdout
      .trim().split('\n')
      .map(line => {
        const [count, ...nameParts] = line.trim().split(' ');
        return { name: nameParts.join(' '), count: parseInt(count, 10) };
      })
      .sort((a, b) => b.count - a.count);
}

async function processFiles() {
  const { repoPath, files } = workerData;
  const results = await Promise.all(files.map(file => analyzeFileCommits(repoPath, file)));
  parentPort.postMessage(results);
}

processFiles().catch(error => {
  console.error('Error in worker:', error);
  process.exit(1);
});