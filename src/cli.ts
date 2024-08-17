import { analyzeRepository } from './analyzeRepository';
import { AnalysisResult } from './types';
import { promises as fs } from "fs";
import { generateJSONFiles } from "./jsonGenerator";
import { generateDashboard } from "./dashboard/dashboardGenerator";
import { exec } from "child_process";

const colors = {
    green: "\x1b[32m",
};

function spinnerLog(start: string, end: string) {
    const spinner = ['📁', '🔍', '🔬', '🧪', '📈', '📉', '📅', '🔧', '📊'];
    let i = 0;
    let currentMessage = '';

    const intervalId = setInterval(() => {
        process.stdout.write(`\r${' '.repeat(currentMessage.length)}`);

        currentMessage = `${spinner[i]} ${start}`;
        process.stdout.write(`\r${currentMessage}`);

        i = (i + 1) % spinner.length;
    }, 100);

    return () => {
        clearInterval(intervalId);
        process.stdout.write(`\r${' '.repeat(currentMessage.length)}`);

        process.stdout.write(`\r✅ \x1b[32m${end}\x1b[0m\n`);
    };
}

export async function runAnalysis(repoPath: string, artifactsPath: string) {
    try {
        const analysisCompletionLog = spinnerLog(
            'Analyzing repository...',
            'Repository analyzed successfully.'
        );
        const analysisResult: AnalysisResult = await analyzeRepository(repoPath);
        analysisCompletionLog();

        console.log(`Artifacts will be stored in: ${artifactsPath}`);
        await fs.mkdir(artifactsPath, { recursive: true });
        await generateJSONFiles(analysisResult, artifactsPath);

        const dashboardPath = await generateDashboard(analysisResult, artifactsPath);

        exec(`open ${dashboardPath}`);
        console.log(`Opening dashboard in browser: ${dashboardPath}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
