/* eslint-disable no-console */
import * as bmd from './bmd.js';
import fs from 'node:fs';

const data = fs.readFileSync(0, 'utf-8');
const tree = bmd.parse(data);

for (const n of tree) {
  n.visit(console.log);
}
