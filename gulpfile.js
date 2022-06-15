// Name: Gulp devstack
// Description: website devstack using Gulp automation toolkit
// Dependecies: npm i --save-dev gulp

'use strict';

// Gulp
const gulp = require('gulp'),
  // Plugins
  plugins = require('./gulp/plugins'),
  // Gulp api
  { task, series, parallel } = require('gulp'),
  // Configuration
    // not necessary here, required independently by every single task
  config = require('./gulp/config');

// Call task from gulp/tasks
function callTask(taskName) {
  return require(`./gulp/tasks/${taskName}`)(gulp, plugins);
}

// Basic tasks
task('clean', callTask('clean'));
task('css', callTask('styles'));
task('cssLint', callTask('styles-lint'));
task('js', callTask('scripts'));
task('jsLint', callTask('scripts-lint'));
task('html', callTask('html'));
task('img', callTask('images'));
task('newTask', callTask('new-task'));
task('watch', callTask('watch'));

// Default task
task('default', task('watch'));
