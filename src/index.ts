#!/usr/bin/env node

import { program } from 'commander';
import { runAnalysis } from './cli';

const prettyDateString = new Date().toISOString().replace(/[:.]/g, '-');

program
    .description('Kaizen: Smart hot-spots detection in codebases')
    .argument('[repo-path]', 'Path to the Git repository', process.cwd())
    .argument('[artifacts-path]', 'Path to store artifacts', `${process.cwd()}/kaizen/${prettyDateString}`)
    .action(runAnalysis);

program.parse(process.argv);
