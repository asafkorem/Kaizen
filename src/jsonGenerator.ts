import { promises as fs } from 'fs';
import path from 'path';
import { AnalysisResult } from './types';

export async function generateJSONFiles(analysisResult: AnalysisResult, artifactsPath: string) {
    await generateFileChangesJSON(analysisResult.fileCommits, artifactsPath);
    await generateCommitRelationsJSON(analysisResult.commitRelations, artifactsPath);
    await generateStaticRelationsJSON(analysisResult.staticRelations, artifactsPath);
}

async function generateFileChangesJSON(fileCommits: AnalysisResult['fileCommits'], artifactsPath: string) {
    await fs.writeFile(
        path.join(artifactsPath, 'file_changes.json'),
        JSON.stringify(fileCommits, null, 2)
    );
}

async function generateCommitRelationsJSON(fileRelations: AnalysisResult['commitRelations'], artifactsPath: string) {
    await fs.writeFile(
        path.join(artifactsPath, 'commit_relations.json'),
        JSON.stringify(fileRelations, null, 2)
    );
}

async function generateStaticRelationsJSON(staticRelations: AnalysisResult['staticRelations'], artifactsPath: string) {
    const jsonData = staticRelations.map(sr => ({
        dependentFile: sr.file1,
        dependencyFile: sr.file2
    }));

    await fs.writeFile(
        path.join(artifactsPath, 'static_relations.json'),
        JSON.stringify(jsonData, null, 2)
    );
}
