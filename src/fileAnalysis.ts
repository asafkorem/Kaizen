import madge from "madge";
import * as fs from 'fs';
import path from "path";

export async function analyzeRepoDependencies(repoPath: string, files: string[]): Promise<{ [key: string]: string[] }> {
    if (!fs.existsSync(repoPath)) {
        throw new Error(`Path not found: ${repoPath}`);
    }

    const madgeResult = await madge(files.map(file => path.join(repoPath, file)));
    const dependencies = madgeResult.obj();

    let resolvedDependencies: { [key: string]: string[] } = {};
    // For each dependency, replace the path with the most similar file name from `files`.
    for (const [file, deps] of Object.entries(dependencies)) {
        const resolvedFileDependencies = deps.map(dep => {
            const similarFile = files.find(f => f.includes(dep));
            return similarFile || dep;
        });

        const resolvedFile: string = files.find(f => f.includes(file)) || file;

        resolvedDependencies[resolvedFile] = resolvedFileDependencies;
    }

    return resolvedDependencies;
}
