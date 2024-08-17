// @ts-nocheck
import { NlpManager } from 'node-nlp';
import { CommitTypesClassificationResult } from '../types';

const MODEL_FILE = 'src/model/commit_classifier_model.nlp';
let manager: NlpManager | null = null;

async function loadModel(): Promise<NlpManager> {
    if (!manager) {
        manager = new NlpManager({ languages: ['en'] });
        await manager.load(MODEL_FILE);
    }
    return manager;
}

export async function classifyCommit(commitMessage: string, threshold = 0.2): Promise<CommitTypesClassificationResult> {
    const manager = await loadModel();
    const result = await manager.process('en', commitMessage);

    const classifications = result.classifications
        .filter(c => c.score > threshold)
        .sort((a, b) => b.score - a.score);

    const categories = classifications.length > 0 ? classifications.map(c => c.intent) : [result.intent];

    const confidences = Object.fromEntries(
        classifications.map(c => [c.intent, c.score])
    );

    return { categories, confidences };
}
