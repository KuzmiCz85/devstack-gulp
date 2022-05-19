'use strict';

/**
 * Configuration
 */

// Target folder
const dist = 'test/';

// Settings
const settings = {
  css: {
    source: 'source/sass/style.scss',
    target: dist + 'css/',
    filename: 'style.css',
    watch: 'source/sass/**/*.scss'
  },
  js: {
    source: 'source/js/**/*.js',
    target: dist + 'js/',
    filename: 'script.js',
    watch: 'source/js/**/*.js'
  },
  html: {
    source: 'source/pages/*.{html,htm,php}',
    target: dist,
    watch: 'source/pages/*.{html,htm,php}'
  },
  img: {
    source: 'source/images/**/*.{gif,jpg,jpeg,png}',
    target: dist + 'images/'
  }
}

/**
 * Gulp api & plugins
 */

// Gulp
const gulp = require('gulp');
  // Merge files
  const concat = require('gulp-concat');
  // Delete files
  const del = require('del');
// Create css from sass files
const sass = require('gulp-sass')(require('sass'));
// Minify js files
const uglify = require('gulp-uglify');
// Optimize images
const imagemin = require('gulp-imagemin');

/**
 * Tasks
 */

// Css - compile from sass
function taskCss() {
  return gulp.src(settings.css.source)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat(settings.css.filename))
    .pipe(gulp.dest(settings.css.target));
}

// JavaScript - merge and minify files
function taskJs() {
  return gulp.src(settings.js.source)
    .pipe(concat(settings.js.filename))
    .pipe(uglify())
    .pipe(gulp.dest(settings.js.target));
}

// Html - copy and render pages
function taskHtml() {
  return gulp.src(settings.html.source)
  // add nunjucks render
  .pipe(gulp.dest(settings.html.target));
}

// Images - copy and optimize
function taskImg() {
  return gulp.src(settings.img.source)
  .pipe(imagemin())
  .pipe(gulp.dest(settings.img.target));
}

// Clean - delete files in dist folder
async function taskClean() {
  const deletedFilePaths = await del([dist + '**/*.*']);
  const deletedDirectoryPaths = await del([dist + '**/']);

  console.log('Deleted files:\n', deletedFilePaths.join('\n'));
  console.log('\n');
  console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'));
  console.log('\n');
}

// Watch - track frequently changed files
function taskWatch() {
  gulp.watch(settings.css.watch, taskCss);
  gulp.watch(settings.js.watch, taskJs);
  gulp.watch(settings.html.watch, taskHtml);
}

/**
 * Task runners
 */

// Source files processing
  // Css
  exports.css = taskCss;
  // Js
  exports.js = taskJs;
  // Html
  exports.html = taskHtml;
  // Images
  exports.img = taskImg;
// General
  // Clean distribution folder
  exports.clean = taskClean;
  // Distribute
  exports.deploy = gulp.series(taskClean, gulp.parallel(taskCss, taskJs, taskHtml, taskImg));
  // Default
  exports.default = taskWatch;
