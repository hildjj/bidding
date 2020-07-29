'use strict'

const fs = require('fs');
const bml = require('./bml')
const data = fs.readFileSync(0, 'utf-8');
const tree = bml.parse(data)

for (const n of tree) {
  n.visit(console.log)
}
