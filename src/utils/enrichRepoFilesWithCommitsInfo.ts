import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { FileCommit } from "../types";

export async function enrichRepoFilesWithCommitsInfo(repoPath: string, files: string[]): Promise<FileCommit[]> {
    const numWorkers = os.cpus().length;
    const chunkSize = Math.ceil(files.length / numWorkers);
    const chunks: string[][] = [];

    for (let i = 0; i < files.length; i += chunkSize) {
        chunks.push(files.slice(i, i + chunkSize));
    }

    const workers = chunks.map(chunk =>
        new Promise<FileCommit[]>((resolve, reject) => {
            const worker = new Worker(path.join(__dirname, 'fileAnalysisWorker.js'), {
                workerData: { repoPath, files: chunk }
            });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
            });
        })
    );

    const results = await Promise.all(workers);
    return results.flat();
}
