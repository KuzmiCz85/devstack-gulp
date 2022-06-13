// Name: Gulp devstack
// Description: website devstack using Gulp automation toolkit
// Dependecies: npm i --save-dev gulp

'use strict';

// Gulp
const gulp = require('gulp'),
  // Plugins
  plugins = require('./gulp/plugins'),
  // Configuration
    // not necessary here, required independently by every single task
  config = require('./gulp/config');

// Call task from gulp/tasks
function callTask(taskName) {
  return require(`./gulp/tasks/${taskName}`)(gulp, plugins);
}

// Private tasks
const task = {
  clean: callTask('clean'),
  css: callTask('styles'),
  cssLint: callTask('styles-lint'),
  js: callTask('scripts'),
  jsLint: callTask('scripts-lint'),
  html: callTask('html'),
  images: callTask('images'),
  watch: callTask('watch')
}

// Public tasks
  // create empty file for new task
exports.newTask = callTask('new-task');

// Default task
exports.default = task.watch;
