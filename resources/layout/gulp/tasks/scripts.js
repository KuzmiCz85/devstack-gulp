/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: scriptsTask
// Description: compiles js files
// Dependecies: npm i --save-dev gulp-plumber gulp-typescript gulp-uglify

'use strict';

const config = require('../config');

const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const typescript = require('gulp-typescript');
const uglify = require('gulp-uglify');

const scripts = () => {
  return src(config.scripts.src, { allowEmpty: true })
    .pipe(plumber())
    .pipe(typescript({
      allowJs: true,
      outFile: config.scripts.fileName,
    }))
    .pipe(uglify())
    .pipe(dest(config.scripts.dest))
};

exports.scriptsTask = scripts;
