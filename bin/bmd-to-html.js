#! /usr/bin/env -S node

/* eslint-disable no-console */
import * as bmd from '../lib/bmd.js';
import fs from 'node:fs';
import path from 'node:path';

const srcs = process.argv.slice(2);

for (const source of srcs) {
  const text = fs.readFileSync(source, 'utf-8');
  const outFile = path.format({
    ...path.parse(source),
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
