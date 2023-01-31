// Gulp task: htmlTask
// Description: render html from twig templates with json data
// Dependecies: npm i --save-dev gulp-twig gulp-plumber gulp-html-beautify

'use strict';

const config = require('../config');

const { src, dest, series } = require('gulp');
const plumber = require('gulp-plumber');
const twigRender = require('gulp-twig');
const htmlBeautify = require('gulp-html-beautify');

const twig = () => {
  return src(config.twig.src)
    .pipe(plumber())
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
