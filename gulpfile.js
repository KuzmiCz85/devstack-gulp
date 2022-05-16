'use strict';

// Configuration
const settings = {
  css: {
    source: 'source/sass/style.scss',
    target: 'test/css/',
    filename: 'style.css'
  },
  js: {
    source: 'source/js/*.js',
    target: 'test/js/',
    filename: 'script.js'
  },
  html: {
    source: 'source/pages/*.{html,htm,php}',
    target: 'test/'
  },
  img: {
    source: 'source/images/**/*.{gif,jpg,jpeg,png}',
    target: 'test/images/'
  }
}

// Gulp plugins

// Gulp
const gulp = require('gulp');
  // Merge files
  const concat = require('gulp-concat');
// Create css from sass files
const sass = require('gulp-sass')(require('sass'));

// Tasks

// Css - compile from sass
function taskCss() {
  return gulp.src(settings.css.source)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat(settings.css.filename))
    .pipe(gulp.dest(settings.css.target));
}

// JavaScript - merge and minify files
function taskJs() {
  return gulp
    .src(settings.js.source)
    .pipe(concat(settings.js.filename))
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
  // add imagemin
  .pipe(gulp.dest(settings.img.target));
}

// Default task
exports.default = gulp.parallel(taskCss, taskJs, taskHtml, taskImg);
