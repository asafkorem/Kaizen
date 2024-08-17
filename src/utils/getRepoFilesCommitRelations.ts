import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { FileRelation } from '../types';

export async function getRepoFilesCommitRelations(repoPath: string, files: string[]): Promise<FileRelation[]> {
    const numWorkers = os.cpus().length;
    const chunkSize = Math.ceil(files.length / numWorkers);
    const chunks: string[][] = [];

    for (let i = 0; i < files.length; i += chunkSize) {
        chunks.push(files.slice(i, i + chunkSize));
    }

    const sharedCommitMap = new Map<string, Set<string>>();

    const workers = chunks.map(chunk =>
        new Promise<void>((resolve, reject) => {
            const worker = new Worker(path.join(__dirname, 'commitRelationsWorker.js'), {
                workerData: { repoPath, files: chunk }
            });
            worker.on('message', (message) => {
                if (message.type === 'update') {
                    const { commit, files } = message.data;
                    if (!sharedCommitMap.has(commit)) {
                        sharedCommitMap.set(commit, new Set());
                    }
                    for (const file of files) {
                        sharedCommitMap.get(commit)!.add(file);
                    }
                } else if (message.type === 'done') {
                    resolve();
                }
            });
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
            });
        })
    );

    await Promise.all(workers);

    const relations = new Map<string, number>();

    for (const files of sharedCommitMap.values()) {
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
