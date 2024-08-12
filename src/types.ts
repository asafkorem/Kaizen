export interface FileCommit {
    fileName: string;
    totalCommits: number;
    linesOfCode: number;
    fixCommits: number;
    enhancementCommits: number;
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
