/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: copyTask
// Description: copies selected files to build folder
// Dependecies: npm i --save-dev gulp-plumber

'use strict';

const config = require('../config');

const { src, dest, series } = require('gulp');
const plumber = require('gulp-plumber');

const copyScripts = () => {
  return src(config.js.src, { allowEmpty: true })
    .pipe(plumber())
    .pipe(dest(config.js.dest))
};

exports.copyTask = series(
  copyScripts,
);
