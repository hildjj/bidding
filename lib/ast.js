'use strict'

const util = require('util')
const PARENT = Symbol('PARENT')

class Node {
  constructor(...kids) {
    this[PARENT] = null
    this.children = []
    for (const k of kids) {
      this.add(k)
    }
  }
  get parent() {
    return this[PARENT]
  }
  add(child) {
    this.children.push(child)
    if (child instanceof Node) {
      child[PARENT] = this
    }
  }
  visit(before, after, depth=0) {
    before && before.call(this, this, depth);
    for (const c of this.children) {
      if (c instanceof Node) {
        c.visit(before, after, depth + 1)
      } else {
        before && before.call(this, c, depth + 1);
        after && after.call(this, c, depth + 1);
      }
    }
    after && after.call(this, this, depth)
  }
}

class Suits {
  clubs = false
  diamonds = false
  hearts = false
  spades = false
  nt = false

  constructor(str) {
    for (const c of str) {
      switch (c) {
        case 'C': this.clubs = true; break
        case 'D': this.diamonds = true; break
        case 'H': this.hearts = true; break
        case 'S': this.spades = true; break
        case 'N': this.nt = true; break
        case 'm': this.clubs = this.diamonds = true; break
        case 'M': this.hearts = this.spades = true; break
        case 'r': this.hearts = this.diamonds = true; break
        case 'b': this.clubs = this.spades = true; break
        case '*': this.clubs = this.spades = this.hearts = this.diamonds = true; break
      }
    }
  }
  [util.inspect.custom](depth, opts) {
    return '' +
      (this.clubs ? '\u2663' : '') +
      (this.diamonds ? '\u2666' : '') +
      (this.hearts ? '\u2665' : '') +
      (this.spades ? '\u2660' : '') +
      (this.nt ? 'NT' : '')
  }
}

module.exports = {
  Node,
  Suits
}
