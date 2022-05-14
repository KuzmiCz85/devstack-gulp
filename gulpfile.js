'use strict';

// Configuration
const settings = {
  sass: {
    source: 'source/sass/style.scss',
    target: 'test/css/',
    filename: 'style.css'
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

// Sass compile
function sassCompile() {
  return gulp.src(settings.sass.source)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat(settings.sass.filename))
    .pipe(gulp.dest(settings.sass.target));
}

exports.sassCompile = sassCompile;

// Default task
exports.default = sassCompile;