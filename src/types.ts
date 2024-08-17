export interface FileCommit {
    fileName: string;
    totalCommits: number;
    linesOfCode: number;
    fixCommits: number;
    featCommits: number;
    otherCommits: number;
}

export interface FileRelation {
    file1: string;
    file2: string;
    sharedCommits?: number;
}

export interface AnalysisResult {
    fileCommits: FileCommit[];
    commitRelations: FileRelation[];
    staticRelations: FileRelation[];
}

export interface CytoscapeNode {
    data: {
        id: string;
        size: number;
        color: string;
    };
}

export interface CytoscapeEdge {
    data: {
        source: string;
        target: string;
        weight: number;
    };
}

export interface CommitTypesTrainingData {
    text: string;
    categories: string[];
}

export interface CommitTypesClassificationResult {
    categories: string[];
    confidences: Record<string, number>;
}
