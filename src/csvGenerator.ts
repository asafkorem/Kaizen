import { promises as fs } from 'fs';
import path from 'path';
import { stringify } from 'csv-stringify/sync';
import { AnalysisResult } from './types';

export async function generateCSVFiles(analysisResult: AnalysisResult, artifactsPath: string) {
    await generateFileChangesCSV(analysisResult.fileCommits, artifactsPath);
    await generateCommitRelationsCSV(analysisResult.commitRelations, artifactsPath);
    await generateStaticRelationsCSV(analysisResult.staticRelations, artifactsPath);
}

async function generateFileChangesCSV(fileCommits: AnalysisResult['fileCommits'], artifactsPath: string) {
    const csvData = fileCommits.map(fc => [
        fc.fileName,
        fc.linesOfCode,
        fc.totalCommits,
        fc.fixCommits,
        fc.featCommits,
        fc.otherCommits
    ]);

    const csv = stringify([
        ['File Name', 'Lines of Code', 'Total Commits', 'Fix Commits', 'Feature Commits', 'Other Commits'],
        ...csvData
    ]);

    await fs.writeFile(path.join(artifactsPath, 'file_changes.csv'), csv);
}

async function generateCommitRelationsCSV(fileRelations: AnalysisResult['commitRelations'], artifactsPath: string) {
    const csvData = fileRelations.map(fr => [fr.file1, fr.file2, fr.sharedCommits]);

    const csv = stringify([
        ['File 1', 'File 2', 'Shared Commits'],
        ...csvData
    ]);

    await fs.writeFile(path.join(artifactsPath, 'commit_relations.csv'), csv);
}

async function generateStaticRelationsCSV(staticRelations: AnalysisResult['staticRelations'], artifactsPath: string) {
    const csvData = staticRelations.map(sr => [sr.file1, sr.file2]);

    const csv = stringify([
        ['Dependent File', 'Dependency File'],
        ...csvData
    ]);

    await fs.writeFile(path.join(artifactsPath, 'static_relations.csv'), csv);
}
