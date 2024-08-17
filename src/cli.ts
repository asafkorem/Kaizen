import { analyzeRepository } from './gitOperations';
import { generateCSVFiles } from './csvGenerator';
import { generateDashboard } from './dashboard/dashboardGenerator';
import { AnalysisResult } from './types';
import {promises as fs} from "fs";
import {exec} from "child_process";

export async function runAnalysis(repoPath: string, artifactsPath: string) {
    try {
        console.log(`Analyzing repository: ${repoPath}...`);
        const analysisResult: AnalysisResult = await analyzeRepository(repoPath);

        console.log(`Artifacts will be stored in: ${artifactsPath}`);
        await fs.mkdir(artifactsPath, { recursive: true });
        await generateCSVFiles(analysisResult, artifactsPath);
        // const dashboardPath = await generateDashboard(analysisResult, artifactsPath);

        console.log('Analysis completed successfully.');

        console.log('Opening dashboard...');
        // Open the dashboard in the default browser
        // exec(`open ${dashboardPath}`);
    } catch (error) {
        console.error('An error occurred during analysis:', error);
        process.exit(1);
    }
}
