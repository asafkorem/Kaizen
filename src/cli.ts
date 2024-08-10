import { analyzeRepository } from './gitOperations';
import { generateCSVFiles } from './csvGenerator';
import { generateDashboard } from './dashboardGenerator';
import { AnalysisResult } from './types';
import {promises as fs} from "fs";

export async function runAnalysis(repoPath: string, artifactsPath: string) {
    try {
        console.log(`Analyzing repository: ${repoPath}...`);
        const analysisResult: AnalysisResult = await analyzeRepository(repoPath);

        console.log(`Artifacts will be stored in: ${artifactsPath}`);
        await fs.mkdir(artifactsPath, { recursive: true });
        await generateCSVFiles(analysisResult, artifactsPath);
        await generateDashboard(analysisResult, artifactsPath);

        console.log('Analysis completed successfully.');
    } catch (error) {
        console.error('An error occurred during analysis:', error);
        process.exit(1);
    }
}
