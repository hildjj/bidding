"use strict";

/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  "ui": false,
  "files": false,
  "watchEvents": [
    "change",
  ],
  "watch": true,
  "watchOptions": {
    "ignoreInitial": true,
  },
  "server": {
    baseDir: ".",
  },
  "port": 5000,
  "ghostMode": false,
  "logLevel": "info",
  "logPrefix": "bidding",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": true,
  "open": "local",
  "browser": "default",
  "cors": false,
  "hostnameSuffix": false,
  "reloadOnRestart": true,
  "notify": true,
  "reloadDebounce": 500,
  "injectChanges": true,
  "startPath": "precision.htm",
  "minify": false,
  "host": null,
  "listen": "localhost",
  "localOnly": false,
  "codeSync": true,
  "timestamps": true,
  "injectNotification": false,
};
