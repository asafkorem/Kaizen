// @ts-ignore
import { NlpManager } from 'node-nlp';
import fs from 'fs';
import path from 'path';
import { CommitTypesTrainingData } from '../../types';

const MODEL_FILE = 'src/model/commit_classifier_model.nlp';

export async function trainModel(trainingDataFile: string): Promise<void> {
    const manager = new NlpManager({ languages: ['en'] });

    // Read training data from JSON file
    const rawData = fs.readFileSync(path.resolve(path.join(__dirname, trainingDataFile)), 'utf-8');
    const trainingData: CommitTypesTrainingData[] = JSON.parse(rawData);

    // Add documents to the manager
    trainingData.forEach(({ text, categories }) => {
        categories.forEach(category => {
            manager.addDocument('en', text, category);
        });
    });

    // Train the model
    await manager.train();

    // Save the model
    manager.save(MODEL_FILE);
    console.log(`Model trained and saved to ${MODEL_FILE}`);
}

// If this script is run directly, train the model
if (require.main === module) {
    const trainingDataFile = "training_data.json"
    trainModel(trainingDataFile).catch(console.error);
}
