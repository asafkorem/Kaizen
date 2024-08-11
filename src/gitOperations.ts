import { exec } from 'child_process';
import { promisify } from 'util';
import { AnalysisResult, FileCommit, FileRelation } from './types';
import {analyzeRepoDependencies} from './fileAnalysis';

const execAsync = promisify(exec);

export async function analyzeRepository(repoPath: string): Promise<AnalysisResult> {
    const isRepo = await checkIsRepo(repoPath);

    if (!isRepo) {
        throw new Error(`${repoPath} is not a valid Git repository.`);
    }

    // TODO: Consider using the main branch instead of the current branch (`git rev-parse --abbrev-ref HEAD`).

    const files = await getRepositoryFiles(repoPath);
    const filteredFiles = files.filter(file => !file.includes('node_modules'));

    const fileCommits = await analyzeFileCommits(repoPath, files);
    const commitRelations = await analyzeCommitRelations(fileCommits);
    const staticRelations = await analyzeStaticRelations(repoPath, files);

    return {
        fileCommits,
        commitRelations,
        staticRelations
    };
}

async function checkIsRepo(repoPath: string): Promise<boolean> {
    try {
        await execAsync('git rev-parse --is-inside-work-tree', { cwd: repoPath });
        return true;
    } catch (error) {
        return false;
    }
}

async function getRepositoryFiles(repoPath: string): Promise<string[]> {
    const { stdout } = await execAsync('git ls-files', { cwd: repoPath });
    return stdout.split('\n').filter(Boolean);
}

function filterFiles(files: string[]): string[] {
    // Filter out non-code files
    return files.filter(file => file.match(/\.(js|jsx|ts|tsx)$/));
}

async function analyzeFileCommits(repoPath: string, files: string[]): Promise<FileCommit[]> {
    const fileCommits: FileCommit[] = [];

    for (const file of files) {
        const { stdout } = await execAsync(`git log --follow --format="%H %s" -- "${file}"`, { cwd: repoPath });
        const commits = stdout.split('\n').filter(Boolean).map(line => {
            const [hash, ...messageParts] = line.split(' ');
            return { hash, message: messageParts.join(' ') };
        });

        const fixCommits = commits.filter(commit => commit.message.toLowerCase().includes('fix'));
        const enhancementCommits = commits.filter(commit =>
            commit.message.toLowerCase().includes('feature') ||
            commit.message.toLowerCase().includes('enhancement')
        );

        fileCommits.push({
            fileName: file,
            totalCommits: commits.length,
            fixCommits: fixCommits.length,
            enhancementCommits: enhancementCommits.length
        });
    }

    return fileCommits;
}

async function analyzeCommitRelations(fileCommits: FileCommit[]): Promise<FileRelation[]> {
    const relations: Map<string, number> = new Map();

    for (const commit of fileCommits) {
        for (const otherCommit of fileCommits) {
            if (commit.fileName < otherCommit.fileName) {
                const key = `${commit.fileName}|${otherCommit.fileName}`;
                relations.set(key, (relations.get(key) || 0) + 1);
            }
        }
    }

    return Array.from(relations.entries()).map(([key, count]) => {
        const [file1, file2] = key.split('|');
        return { file1, file2, sharedCommits: count };
    });
}

async function analyzeStaticRelations(repoPath: string, files: string[]): Promise<FileRelation[]> {
    const jsFiles = files.filter(file => file.match(/\.(js|jsx|ts|tsx)$/));

    const dependencies = await analyzeRepoDependencies(repoPath, jsFiles);

    return Object.entries(dependencies).flatMap(([file, deps]) => {
        return deps.map(dep => ({
            file1: file,
            file2: dep,
        }));
    });
}
