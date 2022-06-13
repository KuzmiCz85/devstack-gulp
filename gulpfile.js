// Name: Gulp devstack
// Description: website devstack using Gulp automation toolkit
// Dependecies: npm i --save-dev gulp

'use strict';

// Gulp
const gulp = require('gulp'),
  // require plugins from gulp/plugins.js
  plugins = require('./gulp/plugins'),
  // Configuration
  settings = require('./gulp/config');
  // stored in gulp/config.js, required independently by every task
  // config = require('./gulp/config');

// Call task from gulp/tasks
function callTask(task) {
  return require(`./gulp/tasks/${task}`)(gulp, plugins);
}

// Tasks
exports.newTask = callTask('new-task');
exports.clean = callTask('clean');
exports.css = callTask('styles');
exports.cssLint = callTask('styles-lint');
exports.js = callTask('scripts');
exports.jsLint = callTask('scripts-lint');
exports.html = callTask('html');
exports.images = callTask('images');
exports.watch = callTask('watch');

/**
 * Gulp API & plugins
 */

// Gulp

  // Plugins

  // API
  const {src, dest, series, parallel, watch} = require('gulp'); // for old tasks
  // Merge files
  const concat = require('gulp-concat');
  // Delete files
  const del = require('del');
// Browser control & reload
const browserSync = require('browser-sync');
// Create css from sass files
const sass = require('gulp-sass')(require('sass'));
// Lint css files
const stylelint = require('gulp-stylelint');
// Minify js files
const uglify = require('gulp-uglify');
// Lint js files
const jshint = require('gulp-jshint');
// Render html with nunjucks templates
const nunjucksRender = require('gulp-nunjucks-render');
// Optimize images
const imagemin = require('gulp-imagemin');

// Signal task completion
const taskEnd = Promise.resolve('end');

// Check if automatic cleaning is allowed
function cleanCheck() {
  if (settings.clean.autoClean == true) {
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
/*
function taskCss() {
  return src(settings.css.source)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat(settings.css.filename))
    .pipe(dest(settings.css.target));
};
*/

// Css - lint files
/*
function taskCssLint () {
  return src(settings.css.components)
  .pipe(stylelint({
    reporters: [
      {
        formatter: 'string',
        console: true
      }
    ]
  }));
};
*/

// JavaScript - merge and minify files
/*
function taskJs() {
  return src(settings.js.source)
    .pipe(concat(settings.js.filename))
    .pipe(uglify())
    .pipe(dest(settings.js.target));
};
*/

// Javascript - lint files
/*
function taskJsLint() {
  return src(settings.js.source)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
};
*/

// Html - copy and render pages
// Removed to external js file gulp/tasks/html.js
/*
function taskHtml() {
  return src(settings.html.source)
    .pipe(nunjucksRender({
      path: [settings.html.components],
      envOptions: {
        trimBlocks: true,
      },
    }))
    .pipe(dest(settings.html.target));
};
*/

// Images - copy and optimize
// Removed to external js file gulp/tasks/images.js
/*
function taskImg() {
  return src(settings.img.source)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(dest(settings.img.target));
};
*/

// Clean - delete files in dist folder
/*
async function taskClean() {
  const deletedFilePaths = await del(settings.clean.target.files);
  const deletedDirectoryPaths = await del(settings.clean.target.folders);

  console.log('Deleted files:\n', deletedFilePaths.join('\n'));
  console.log('\n');
  console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'));
  console.log('\n');
};
*/

// Watch - track for changes, recall tasks & reload browser
/*
function taskWatch() {
  // initialize browserSync
  browserSync.init({
    proxy: settings.browserSync.url,
    browser: settings.browserSync.browser
  });

  watch(settings.css.watch, taskCss).on('change', browserSync.reload);
  watch(settings.js.watch, taskJs).on('change', browserSync.reload);
  watch(settings.html.watch, taskHtml).on('change', browserSync.reload);
};
*/

/**
 * Task runners
 */

// Source files processing
  // Css
    // Process css files
    //exports.css = taskCss;
    // Lint css
    //exports.cssLint = taskCssLint;
  // Js
    // Process js files
    //exports.js = taskJs;
    // Lint js files
    //exports.jsLint = taskJsLint;
  // Html
  //exports.html = taskHtml;
  // Images
  //exports.img = taskImg;
// General
  // Clean distribution folder
  //exports.clean = taskClean;
  // Distribute
  //exports.deploy = series(cleanCheck, parallel(series(taskCssLint, taskCss), series(taskJsLint, taskJs), taskHtml, taskImg));
  // Default
  //exports.default = taskWatch;
