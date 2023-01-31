/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: browserSyncInit
// Description: initialize browser-sync
// Dependecies: npm i --save-dev browser-sync

'use strict';

const config = require('../config');

const browserSync = require("browser-sync").create();

const browserSyncInit = () => {
  browserSync.init(config.browserSync)
};

exports.browserSyncInit = browserSyncInit;
