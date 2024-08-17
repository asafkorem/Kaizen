import { FileRelation } from '../types';
import { getDriverForFile } from '../drivers/driverRegistry';

export async function findRepoFilesStaticRelations(repoPath: string, files: string[]): Promise<FileRelation[]> {
    const relations: FileRelation[] = [];

    for (const file of files) {
        const driver = getDriverForFile(file);
        if (driver) {
            let fileRelations = await driver.getStaticRelations(repoPath, file);

            // filter out relations that are not in the files list
            fileRelations = fileRelations.filter(
                ({ file1, file2 }) => files.includes(file1) && files.includes(file2)
            );

            relations.push(...fileRelations);
        }
    }

    return relations;
}
