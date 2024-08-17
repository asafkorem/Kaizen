import { FileCommit } from '../types';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function enrichRepoFilesWithCommitsInfo(repoPath: string, files: string[]): Promise<FileCommit[]> {
    return Promise.all(files.map(file => analyzeFileCommits(repoPath, file)));
}

async function analyzeFileCommits(repoPath: string, file: string): Promise<FileCommit> {
    const commits = await getFileCommits(repoPath, file);
    const linesOfCode = await getFileLinesOfCode(repoPath, file);

    return {
        fileName: file,
        linesOfCode,
        totalCommits: commits.length,
        fixCommits: classifyCommits(commits, 'fix'),
        enhancementCommits: classifyCommits(commits, ['feature', 'enhancement'])
    };
}

async function getFileCommits(repoPath: string, file: string): Promise<{ hash: string; message: string }[]> {
    const { stdout } = await execAsync(`git log --follow --format="%H %s" -- "${file}"`, { cwd: repoPath });
    return stdout.split('\n').filter(Boolean).map(line => {
        const [hash, ...messageParts] = line.split(' ');
        return { hash, message: messageParts.join(' ') };
    });
}

async function getFileLinesOfCode(repoPath: string, file: string): Promise<number> {
    const { stdout } = await execAsync(`git show HEAD:"${file}" | wc -l`, { cwd: repoPath });
    return parseInt(stdout.trim(), 10);
}

function classifyCommits(commits: { hash: string; message: string }[], keywords: string | string[]): number {
    const keywordArray = Array.isArray(keywords) ? keywords : [keywords];
    return commits.filter(commit =>
        keywordArray.some(keyword => commit.message.toLowerCase().includes(keyword))
    ).length;
}
