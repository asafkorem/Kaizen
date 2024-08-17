import madge from 'madge';
import path from 'path';
import { FileRelation } from '../types';

export class JSDriver {
    supports(file: string): boolean {
        return /\.(js|jsx|ts|tsx|css|scss|sass|less)$/.test(file);
    }

    async getStaticRelations(repoPath: string, file: string): Promise<FileRelation[]> {
        const madgeResult = await madge(path.join(repoPath, file));
        const dependencies = madgeResult.obj();

        // split file to file and the prefix (e.g. src/drivers/jsDriver.ts -> src/drivers & jsDriver.ts)
        const fileParts = file.split('/');
        const filePrefix = fileParts.slice(0, -1).join('/');
        const fileName = fileParts[fileParts.length - 1];

        const fileDependencies = dependencies[fileName];
        if (!fileDependencies) {
            console.warn(`No dependencies found for file ${file}`);
            return [];
        }

        return fileDependencies.map((dep: string) => {
            return {
                file1: file,
                file2: path.join(filePrefix, dep)
            };
        });
    }
}
