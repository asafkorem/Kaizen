import * as ts from 'typescript';

export function analyzeFileContent(content: string, fileName: string): string[] {
    const dependencies: string[] = [];
    const isJSX = fileName.endsWith('.jsx') || fileName.endsWith('.tsx');

    // Create a source file
    const sourceFile = ts.createSourceFile(
        fileName,
        content,
        ts.ScriptTarget.Latest,
        true,
        isJSX ? ts.ScriptKind.JSX : undefined
    );

    // Traverse the AST
    function visit(node: ts.Node) {
        if (ts.isImportDeclaration(node)) {
            // Handle ES6 imports
            const moduleSpecifier = node.moduleSpecifier;
            if (ts.isStringLiteral(moduleSpecifier)) {
                dependencies.push(moduleSpecifier.text);
            }
        } else if (ts.isCallExpression(node) &&
            (node.expression.getText() === 'require' ||
                node.expression.getText() === 'import')) {
            // Handle CommonJS require and dynamic imports
            const argument = node.arguments[0];
            if (ts.isStringLiteral(argument)) {
                dependencies.push(argument.text);
            }
        } else if (ts.isPropertyAccessExpression(node) &&
            node.expression.getText() === 'require' &&
            node.name.getText() === 'resolve') {
            // Handle require.resolve
            if (node.parent && ts.isCallExpression(node.parent)) {
                const argument = node.parent.arguments[0];
                if (ts.isStringLiteral(argument)) {
                    dependencies.push(argument.text);
                }
            }
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    // Remove duplicates
    return Array.from(new Set(dependencies));
}
