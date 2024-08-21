import { promises as fs } from 'fs';
import path from 'path';
import { AnalysisResult, CytoscapeNode, CytoscapeEdge, FileCommit } from '../types';

export async function generateDashboard(analysisResult: AnalysisResult, artifactsPath: string): Promise<string> {
    const templateDirPath = path.join(__dirname, 'demo');

    const dashboardDirPath = path.join(artifactsPath, 'dashboard');

    await fs.mkdir(dashboardDirPath, { recursive: true });

    const dashboardPath = path.join(dashboardDirPath, 'index.html');
    await fs.copyFile(path.join(templateDirPath, 'index.html'), dashboardPath);

    await fs.copyFile(path.join(templateDirPath, 'styles.css'), path.join(dashboardDirPath, 'styles.css'));

    await fs.copyFile(path.join(templateDirPath, 'chartjs-plugin-zoom.min.js'), path.join(dashboardDirPath, 'chartjs-plugin-zoom.min.js'));

    await changeAnalysisResultsAndCopyJSTemplate(
        analysisResult,
        path.join(templateDirPath, 'script.js'),
        path.join(dashboardDirPath, 'script.js')
    );

    return dashboardPath;
}

async function changeAnalysisResultsAndCopyJSTemplate(
    analysisResult: AnalysisResult,
    sourceScriptPath: string,
    targetScriptPath: string
) {
    const scriptContent = await fs.readFile(sourceScriptPath, 'utf-8');

    const staticRelations = analysisResult.staticRelations.map(({ file1, file2 }) => ({
        dependentFile: file1,
        dependencyFile: file2
    }));

    const newScriptTop = `const fileChanges = ${JSON.stringify(analysisResult.fileCommits)};
const commitRelations = ${JSON.stringify(analysisResult.commitRelations)};
const staticRelations = ${JSON.stringify(staticRelations)};`

    const startOfPlaceholderIndex = scriptContent.indexOf('\n\n/* DO NOT REMOVE THIS */');
    const newScriptContent = newScriptTop + scriptContent.slice(startOfPlaceholderIndex);

    await fs.writeFile(targetScriptPath, newScriptContent);
}
