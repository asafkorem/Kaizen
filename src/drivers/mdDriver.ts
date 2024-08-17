// TODO: this is just a stub, implement the driver.

import fs from 'fs/promises';
import path from 'path';
import { FileRelation } from '../types';

export class MDDriver {
    supports(file: string): boolean {
        return /\.md$/.test(file);
    }

    async getStaticRelations(repoPath: string, file: string): Promise<FileRelation[]> {
        const content = await fs.readFile(path.join(repoPath, file), 'utf-8');
        const linkRegex = /\[.*?\]\((.*?)\)/g;
        const links = Array.from(content.matchAll(linkRegex)).map(match => match[1]);

        return links.map(link => ({
            file1: file,
            file2: link
        }));
    }
}
