/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: htmlTask
// Description: render html from twig templates with json data
// Dependecies: npm i --save-dev fs-extra gulp-data gulp-html-beautify gulp-plumber gulp-twig json-merger tiny-glob

'use strict';

const config = require('../config');

const { src, dest, series } = require('gulp');
const data = require('gulp-data');
const glob = require('tiny-glob');
const fsExtra = require('fs-extra');
const htmlBeautify = require('gulp-html-beautify');
const jsonMerger = require('json-merger');
const plumber = require('gulp-plumber');
const twigRender = require('gulp-twig');

const initJsonData = async () => {
  let jsonData = await glob(config.json.src)

  jsonData = jsonMerger.mergeFiles(jsonData)

  if (jsonData != null) {
    fsExtra.writeFileSync(config.json.dest, JSON.stringify(jsonData, null, 2))
  }
};

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
  return src(`${config.html.dest}*.html`)
    .pipe(htmlBeautify(config.html.settings))
    .pipe(dest(config.html.dest))
};

exports.htmlTask = series(
  initJsonData,
  twig,
  htmlFormat,
);
