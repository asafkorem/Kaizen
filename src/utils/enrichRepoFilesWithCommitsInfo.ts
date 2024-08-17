import { FileCommit, CommitAuthor } from '../types';
import { exec } from 'child_process';
import { promisify } from 'util';
import { classifyCommit } from "../model/classifyCommit";

const execAsync = promisify(exec);

export async function enrichRepoFilesWithCommitsInfo(repoPath: string, files: string[]): Promise<FileCommit[]> {
    return Promise.all(files.map(file => analyzeFileCommits(repoPath, file)));
}

async function analyzeFileCommits(repoPath: string, file: string): Promise<FileCommit> {
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

async function classifyCommits(commits: { hash: string; message: string }[]): Promise<{ fixCommits: number; featCommits: number; otherCommits: number }> {
    const commitTypes = await Promise.all(commits.map(c => classifyCommit(c.message)));
    const fixCommits = commitTypes.filter(ct => ct.categories.includes('fix')).length;
    const featCommits = commitTypes.filter(ct => ct.categories.includes('feature')).length;
    const otherCommits = commitTypes.filter(ct => ct.categories.includes('others') || ct.categories.includes('None')).length

    return { fixCommits, featCommits, otherCommits };
}

async function getCommitAuthors(repoPath: string, file: string): Promise<CommitAuthor[]> {
    const { stdout } = await execAsync(`git log --follow --format="%aN" -- "${file}" | sort | uniq -c | sort -rn`, { cwd: repoPath });
    return stdout.trim().split('\n').map(line => {
        const [count, ...nameParts] = line.trim().split(' ');
        return { name: nameParts.join(' '), count: parseInt(count, 10) };
    });
}
