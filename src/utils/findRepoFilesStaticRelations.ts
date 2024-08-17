import { FileRelation } from '../types';
import { getDriverForFile } from '../drivers/driverRegistry';

export async function findRepoFilesStaticRelations(repoPath: string, files: string[]): Promise<FileRelation[]> {
    const relations: FileRelation[] = [];

    for (const file of files) {
        const driver = getDriverForFile(file);
        if (driver) {
            const fileRelations = await driver.getStaticRelations(repoPath, file);
            relations.push(...fileRelations);
        }
    }

    return relations;
}
