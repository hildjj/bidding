#! /usr/bin/env -S node

/* eslint-disable no-console */
import * as bmd from '../lib/bmd.js';
import fs from 'node:fs';
import path from 'node:path';

const srcs = process.argv.slice(2);

const docs = path.join(process.cwd(), 'docs');
fs.rmSync(docs, {recursive: true, force: true});
fs.mkdirSync(docs);
fs.writeFileSync(path.join(docs, '.nojekyll'), '', 'utf8');

for (const source of srcs) {
  if (source === 'README.md') {
    continue;
  }
  const text = fs.readFileSync(source, 'utf-8');
  const p = path.parse(source);
  p.dir = docs;
  const outFile = path.resolve(path.format({
    ...p,
    base: '',
    ext: '.htm',
  }));
  const outRel = path.relative(process.cwd(), outFile);

  try {
    const tree = bmd.parse(text, {grammarSource: source});
    fs.writeFileSync(outFile, tree.html(), 'utf8');
    console.error(`${source} -> ${outRel}`);
  } catch (e) {
    if (typeof e.format === 'function') {
      console.error(e.format([{source, text}]));
    } else {
      console.error(e);
    }
  }
}
