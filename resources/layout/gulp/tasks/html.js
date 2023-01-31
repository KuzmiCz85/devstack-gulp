/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: htmlTask
// Description: render html from twig templates with json data
// Dependecies: npm i --save-dev fs-extra gulp-data gulp-html-beautify gulp-plumber gulp-twig

'use strict';

const config = require('../config');

const { src, dest, series } = require('gulp');
const data = require('gulp-data');
const fsExtra = require('fs-extra');
const htmlBeautify = require('gulp-html-beautify');
const plumber = require('gulp-plumber');
const twigRender = require('gulp-twig');

const getJsonData = () => {
  return JSON.parse(fsExtra.readFileSync(config.twig.data))
};

const twig = () => {
  return src(config.twig.src)
    .pipe(plumber())
    .pipe(data(getJsonData()))
    .pipe(twigRender(config.twig.settings))
    .pipe(dest(config.twig.dest))
};

const htmlFormat = () => {
  return src(config.html.src)
    .pipe(htmlBeautify(config.html.settings))
    .pipe(dest(config.html.dest))
};

exports.htmlTask = series(
  twig,
  htmlFormat,
);
