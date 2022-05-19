'use strict';

/**
 * Configuration
 */

// Target folder
const dist = {
  target: 'test/',
  /* Auto clean target folder before upload
    set autoClean value to true */
  autoClean: true,
};

// Settings
const settings = {
  css: {
    source: 'source/sass/style.scss',
    target: dist.target + 'css/',
    filename: 'style.css',
    watch: 'source/sass/**/*.scss'
  },
  js: {
    source: 'source/js/**/*.js',
    target: dist.target + 'js/',
    filename: 'script.js',
    watch: 'source/js/**/*.js'
  },
  html: {
    source: 'source/pages/*.{html,htm,php}',
    target: dist.target + '',
    watch: 'source/pages/*.{html,htm,php}'
  },
  img: {
    source: 'source/images/**/*.{gif,jpg,jpeg,png}',
    target: dist.target + 'images/'
  }
};

/**
 * Gulp API & plugins
 */

// Gulp
const gulp = require('gulp');
  // API
  const {src, dest, series, parallel, watch} = require('gulp');
  // Merge files
  const concat = require('gulp-concat');
  // Delete files
  const del = require('del');
// Create css from sass files
const sass = require('gulp-sass')(require('sass'));
// Minify js files
const uglify = require('gulp-uglify');
// Lint js files
const jshint = require('gulp-jshint');
// Optimize images
const imagemin = require('gulp-imagemin');

// Signal task completion
const taskEnd = Promise.resolve('end');

// Check if automatic cleaning is allowed
function cleanCheck() {
  if (dist.autoClean == true) {
    console.log('Cleaning enabled\n');
    return taskClean();
  } else {
    console.log('Cleaning disabled');
  }
  return taskEnd;
};

/**
 * Tasks
 */

// Css - compile from sass
function taskCss() {
  return src(settings.css.source)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat(settings.css.filename))
    .pipe(dest(settings.css.target));
};

// JavaScript - merge and minify files
function taskJs() {
  return src(settings.js.source)
    .pipe(concat(settings.js.filename))
    .pipe(uglify())
    .pipe(dest(settings.js.target));
};

// Javascript - lint files
function taskJsLint() {
  return src(settings.js.source)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
};

// Html - copy and render pages
function taskHtml() {
  return src(settings.html.source)
  // add nunjucks render
  .pipe(dest(settings.html.target));
};

// Images - copy and optimize
function taskImg() {
  return src(settings.img.source)
  .pipe(imagemin())
  .pipe(dest(settings.img.target));
};

// Clean - delete files in dist folder
async function taskClean() {
  const deletedFilePaths = await del([dist.target + '**/*.*']);
  const deletedDirectoryPaths = await del([dist.target + '**/']);

  console.log('Deleted files:\n', deletedFilePaths.join('\n'));
  console.log('\n');
  console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'));
  console.log('\n');
};

// Watch - track frequently changed files
function taskWatch() {
  watch(settings.css.watch, taskCss);
  watch(settings.js.watch, taskJs);
  watch(settings.html.watch, taskHtml);
};

/**
 * Task runners
 */

// Source files processing
  // Css
  exports.css = taskCss;
  // Js
    // Process js files
    exports.js = taskJs;
    // Lint js files
    exports.jsLint = taskJsLint;
  // Html
  exports.html = taskHtml;
  // Images
  exports.img = taskImg;
// General
  // Clean distribution folder
  exports.clean = taskClean;
  // Distribute
  exports.deploy = series(cleanCheck, parallel(taskCss, series(taskJsLint, taskJs), taskHtml, taskImg));
  // Default
  exports.default = taskWatch;
