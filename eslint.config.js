import base from '@cto.af/eslint-config';
import jsdoc_ts from '@cto.af/eslint-config/jsdoc_ts.js';
import markdown from '@cto.af/eslint-config/markdown.js';
import mod from '@cto.af/eslint-config/module.js';

export default [
  {
    ignores: [
      'lib/bmd.js',
    ],
  },
  ...base,
  ...mod,
  ...jsdoc_ts,
  ...markdown,
];
