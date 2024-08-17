import { exec } from 'child_process';
import { promisify } from 'util';
import { isText } from 'istextorbinary'

const execAsync = promisify(exec);

export async function getRepoFiles(repoPath: string): Promise<string[]> {
    const { stdout } = await execAsync('git ls-files', { cwd: repoPath });
    return stdout.split('\n').filter(Boolean).filter(file => isText(file));
}
