import { promises as fs } from 'fs';
import path from 'path';
import { AnalysisResult, FileCommit, FileRelation, CommitAuthor } from './types';

export async function generateCSVFiles(analysisResult: AnalysisResult, artifactsPath: string) {
    await generateFileCommitsCSV(analysisResult.fileCommits, artifactsPath);
    await generateCommitRelationsCSV(analysisResult.commitRelations, artifactsPath);
    await generateStaticRelationsCSV(analysisResult.staticRelations, artifactsPath);
}

async function generateFileCommitsCSV(fileCommits: FileCommit[], artifactsPath: string) {
    const headers = ['fileName', 'totalCommits', 'linesOfCode', 'fixCommits', 'featCommits', 'otherCommits', 'authors'];
    const rows = fileCommits.map(fc => [
        fc.fileName,
        fc.totalCommits,
        fc.linesOfCode,
        fc.fixCommits,
        fc.featCommits,
        fc.otherCommits,
        stringifyAuthors(fc.authors)
    ]);

    await writeCSV(path.join(artifactsPath, 'file_commits.csv'), headers, rows);
}

async function generateCommitRelationsCSV(commitRelations: FileRelation[], artifactsPath: string) {
    const headers = ['file1', 'file2', 'sharedCommits'];
    const rows = commitRelations.map(relation => [
        relation.file1,
        relation.file2,
        relation.sharedCommits?.toString() || ''
    ]);

    await writeCSV(path.join(artifactsPath, 'commit_relations.csv'), headers, rows);
}

async function generateStaticRelationsCSV(staticRelations: FileRelation[], artifactsPath: string) {
    const headers = ['dependentFile', 'dependencyFile'];
    const rows = staticRelations.map(relation => [
        relation.file1,
        relation.file2
    ]);

    await writeCSV(path.join(artifactsPath, 'static_relations.csv'), headers, rows);
}

async function writeCSV(filePath: string, headers: string[], rows: (string | number)[][]) {
    const content = [
        headers.join(','),
        ...rows.map(row => row.map(cell => typeof cell === 'string' ? `"${cell}"` : cell).join(','))
    ].join('\n');

    await fs.writeFile(filePath, content);
}

function stringifyAuthors(authors: CommitAuthor[]): string {
    const totalCommits = authors.reduce((sum, author) => sum + author.count, 0);
    return authors
        .map(author => {
            const percentage = ((author.count / totalCommits) * 100).toFixed(1);
            return `${author.name}:${author.count}(${percentage}%)`;
        })
        .join(', ');
}
