#! /usr/bin/env -S node

/* eslint-disable no-console */
import * as bmd from '../lib/bmd.js';
import fs from 'node:fs';
import path from 'node:path';

const srcs = process.argv.slice(2);

fs.rmSync('docs', {recursive: true, force: true});
fs.mkdirSync('docs');
for (const source of srcs) {
  if (source === 'README.md') {
    continue;
  }
  const text = fs.readFileSync(source, 'utf-8');
  const p = path.parse(source);
  p.dir = path.join(p.dir, 'docs');
  const outFile = path.format({
    ...p,
    base: '',
    ext: '.htm',
  });

  try {
    const tree = bmd.parse(text, {grammarSource: source});
    fs.writeFileSync(outFile, tree.html(), 'utf8');
    console.error(`${source} -> ${outFile}`);
  } catch (e) {
    if (typeof e.format === 'function') {
      console.error(e.format([{source, text}]));
    } else {
      console.error(e);
    }
  }
}
