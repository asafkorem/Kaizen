import { AnalysisResult } from './types';
import { getRepoFiles } from './utils/getRepoFiles';
import { enrichRepoFilesWithCommitsInfo } from './utils/file-analysis/enrichRepoFilesWithCommitsInfo';
import { getRepoFilesCommitRelations } from './utils/commit-relations/getRepoFilesCommitRelations';
import { findRepoFilesStaticRelations } from './utils/findRepoFilesStaticRelations';

export async function analyzeRepository(repoPath: string): Promise<AnalysisResult> {
    const files = await getRepoFiles(repoPath);
    const fileCommits = await enrichRepoFilesWithCommitsInfo(repoPath, files);
    const commitRelations = await getRepoFilesCommitRelations(repoPath, files);
    const staticRelations = await findRepoFilesStaticRelations(repoPath, files);

    return {
        fileCommits,
        commitRelations,
        staticRelations
    };
}
