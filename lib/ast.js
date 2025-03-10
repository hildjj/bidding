/* eslint-disable no-multi-assign */
import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import slug from 'slug';
import util from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const css = fs.readFileSync(path.join(__dirname, 'style.css'));

function htmlAll(list, meta, {pre = '', post = '', join = ''} = {}) {
  let res = '';
  let first = true;
  for (const el of list) {
    res += pre;
    if (first) {
      first = false;
    } else {
      res += join;
    }
    res += el.html?.(meta) ?? el;
    res += post;
  }
  return res;
}

function stringAll(list, meta, {pre = '', post = '', join = ''} = {}) {
  let res = '';
  let first = true;
  for (const el of list) {
    res += pre;
    if (first) {
      first = false;
    } else {
      res += join;
    }
    res += el.toString?.(meta) ?? el;
    res += post;
  }
  return res;
}

export class Suits {
  clubs = false;
  diamonds = false;
  hearts = false;
  spades = false;
  nt = false;

  constructor(str) {
    for (const c of str) {
      switch (c) {
        case 'c':
        case 'C': this.clubs = true; break;
        case 'd':
        case 'D': this.diamonds = true; break;
        case 'h':
        case 'H': this.hearts = true; break;
        case 's':
        case 'S': this.spades = true; break;
        case 'n':
        case 'N': this.nt = true; break;
        case 'm': this.clubs = this.diamonds = true; break;
        case 'M': this.hearts = this.spades = true; break;
        case 'r': this.hearts = this.diamonds = true; break;
        case 'b': this.clubs = this.spades = true; break;
        case 'X':
        case '*': this.clubs = this.spades = this.hearts = this.diamonds = true; break;
      }
    }
  }

  html(_meta) {
    let res = '';
    if (this.clubs) {
      res += '<span class="clubs">&clubs;</span>';
    }
    if (this.diamonds) {
      res += '<span class="diamonds">&diams;</span>';
    }
    if (this.hearts) {
      res += '<span class="hearts">&hearts;</span>';
    }
    if (this.spades) {
      res += '<span class="spades">&spades;</span>';
    }
    if (this.nt) {
      res += 'N';
    }
    return res;
  }

  toString(_meta) {
    // eslint-disable-next-line prefer-template, no-implicit-coercion
    return '' +
      (this.clubs ? '\u2663' : '') +
      (this.diamonds ? '\u2666' : '') +
      (this.hearts ? '\u2665' : '') +
      (this.spades ? '\u2660' : '') +
      (this.nt ? 'N' : '');
  }

  [util.inspect.custom](_depth, _opts) {
    return this.toString();
  }
}

export class Bid {
  #level;
  #suits;
  #alert;
  start = null;
  opponent = false;
  through = false;
  more = false;

  constructor(level, suits, alert) {
    this.#level = level;
    this.#suits = suits;
    this.#alert = Boolean(alert);
  }

  html(meta) {
    const levSuits = this.#level ?
      `${this.#level}${this.#suits.html(meta)}` :
      this.#suits;

    let ret = '';
    if (this.through) {
      if (this.start) {
        ret += this.start.html(meta);
      }
      ret += '&rarr;';
    }
    ret += `${levSuits}${this.more ? '+' : ''}`;
    if (this.opponent) {
      ret = `(${ret})`;
    }
    if (this.#alert) {
      ret = `<span class="alert" title="Alert!">${ret}</span>`;
    }
    return ret;
  }
}

export class Definition {
  #bids;
  #explanation;
  indent = -1;

  constructor(bids, explanation) {
    this.#bids = bids;
    this.#explanation = explanation;
  }

  html(meta) {
    let ret = '  <div class="lf"></div>';
    for (let i = 0; i < this.indent; i++) {
      ret += '<div class="col"></div>';
    }
    const bhtml = htmlAll(this.#bids, meta, {join: '-'});
    const ehtml = this.#explanation?.html?.(meta) ?? this.#explanation;
    ret += `<div class="title">${bhtml}</div><div class="cr" style="grid-column-start: ${this.indent + 3};">${ehtml}</div>`;
    return ret;
  }
}

export class BidTable {
  #bids;
  constructor(bids) {
    this.#bids = bids;
  }

  html(meta) {
    let ret = '    <div class="tree">\n';
    ret += htmlAll(this.#bids, meta, {pre: '    ', post: '\n'});
    ret += '    </div>\n';
    return ret;
  }
}

export class Explanation {
  #parts;

  constructor(parts) {
    this.#parts = parts;
  }

  html(meta) {
    return htmlAll(this.#parts, meta);
  }

  toString(meta) {
    return stringAll(this.#parts, meta);
  }
}

export class Link {
  #text;
  #href;

  constructor(text, href) {
    this.#text = text;
    this.#href = href;
  }

  html(_meta) {
    return `<a href=${this.#href}>${this.#text}</a>`;
  }

  toString(_meta) {
    return `[${this.#text}](${this.#href})`;
  }
}

export class Head {
  #level;
  #explanation;
  #id;

  constructor(level, explanation, id) {
    this.#level = level;
    this.#explanation = explanation;
    this.#id = id ?? slug(this.#explanation.toString());
  }

  html(_meta) {
    return `    <h${this.#level} id="${this.#id}" class="head">${this.#explanation.html()}<a href="#${this.#id}" class="pilcrow">¶</a></h${this.#level}>\n`;
  }

  li(_meta) {
    return `<li style="padding-inline-start: ${this.#level - 1}em"><a href="#${this.#id}">${this.#explanation.html()}</a></li>\n`;
  }
}

export class P {
  #lines;

  constructor(lines) {
    this.#lines = lines;
  }

  html(meta) {
    return `    <p>${htmlAll(this.#lines, meta)}</p>\n`;
  }
}
export class Doc {
  #meta;
  #parts;

  constructor(meta, parts) {
    this.#meta = {
      forkText: 'Fork me on GitHub',
      ...meta,
    };
    this.#parts = parts;
  }

  get parts() {
    return this.#parts;
  }

  html() {
    let res = `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
`;

    if (this.#meta.description) {
      res += `  <meta name="description" content="${this.#meta.description}">\n`;
    }
    if (this.#meta.author) {
      res += `  <meta name="author" content="${this.#meta.author}">\n`;
    }
    if (this.#meta.title) {
      res += `  <title>${this.#meta.title}</title>\n`;
    }
    res += `\
<style>
${css}</style>
</head>
<body>`;
    if (this.#meta.github) {
      res += `  <a class="github-fork-ribbon" href="https://github.com/${this.#meta.github}" data-ribbon="${this.#meta.forkText}" title="${this.#meta.forkText}">${this.#meta.forkText}</a>\n`;
    }

    if (this.#parts.some(h => h instanceof Head)) {
      res += '  <div class="outline">\n';
      res += '    <ul>\n';
      for (const h of this.#parts.filter(head => head instanceof Head)) {
        res += '      ';
        res += h.li(this.#meta);
      }
      res += '    </ul>\n';
      res += '  </div>\n';
    }

    res += '  <main>\n';
    res += htmlAll(this.#parts, this.#meta);
    res += '  </main>\n';

    res += `\
</body>
</html>`;
    return res;
  }
}
