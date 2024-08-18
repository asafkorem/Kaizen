// @ts-nocheck
const { NlpManager } = require('node-nlp');
const path = require('path');

const MODEL_FILE = path.join(__dirname, 'commit_classifier_model.nlp');

let manager = null;

async function loadModel() {
    if (!manager) {
        manager = new NlpManager({ languages: ['en'] });
        await manager.load(MODEL_FILE);
    }
    return manager;
}

async function classifyCommit(commitMessage, threshold = 0.2) {
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

module.exports = { classifyCommit };
