import { FileRelation } from '../types';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function getRepoFilesCommitRelations(repoPath: string, files: string[]): Promise<FileRelation[]> {
    const commitMap = new Map<string, Set<string>>();

    for (const file of files) {
        const { stdout } = await execAsync(`git log --format="%H" -- "${file}"`, { cwd: repoPath });
        const commits = stdout.split('\n').filter(Boolean);

        for (const commit of commits) {
            if (!commitMap.has(commit)) {
                commitMap.set(commit, new Set());
            }
            commitMap.get(commit)!.add(file);
        }
    }

    const relations = new Map<string, number>();

    for (const files of commitMap.values()) {
        const fileArray = Array.from(files);
        for (let i = 0; i < fileArray.length; i++) {
            for (let j = i + 1; j < fileArray.length; j++) {
                const key = [fileArray[i], fileArray[j]].sort().join('|');
                relations.set(key, (relations.get(key) || 0) + 1);
            }
        }
    }

    return Array.from(relations.entries()).map(([key, count]) => {
        const [file1, file2] = key.split('|');
        return { file1, file2, sharedCommits: count };
    });
}
//
