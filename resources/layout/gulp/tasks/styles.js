// Gulp task: stylesTask
// Description: process scss files
// Dependecies: npm i --save-dev sass gulp-sass gulp-sass-glob

'use strict';

const config = require('../config');

const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

const styles = () => {
  return src(config.scss.src)
    .pipe(sassGlob())
    .pipe(sass(config.scss.settings).on('error', sass.logError))
    .pipe(dest(config.scss.dest))
};

exports.stylesTask = styles;
