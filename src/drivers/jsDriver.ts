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

        return Object.entries(dependencies).flatMap(([source, deps]) =>
            deps.map(target => ({
                file1: source,
                file2: target
            }))
        );
    }
}
