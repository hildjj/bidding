'use strict'

const fs = require('fs')
const bml = require('./bml')
const tree = bml.parse(`1C 16+ hcp, artificial
  1D 0-7 or 8+ and 4441
`)

for (const n of tree) {
  n.visit(console.log)
}
