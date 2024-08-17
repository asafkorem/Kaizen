import { analyzeRepository } from './analyzeRepository';
import { generateCSVFiles } from './csvGenerator';
import { AnalysisResult } from './types';
import {promises as fs} from "fs";

export async function runAnalysis(repoPath: string, artifactsPath: string) {
    try {
        console.log(`Analyzing repository: ${repoPath}...`);
        const analysisResult: AnalysisResult = await analyzeRepository(repoPath);

        console.log(`Artifacts will be stored in: ${artifactsPath}`);
        await fs.mkdir(artifactsPath, { recursive: true });
        await generateCSVFiles(analysisResult, artifactsPath);

        console.log('Analysis completed successfully.');

        // TODO: load dashboard and open it in the browser
    } catch (error) {
        console.error('An error occurred during analysis:', error);
        process.exit(1);
    }
}
