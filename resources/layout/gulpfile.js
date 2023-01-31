/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const { parallel } = require('gulp');

// Tasks list
const { newTask } = require('./gulp/tasks/new-task');
const { stylesTask } = require('./gulp/tasks/styles');
const { htmlTask } = require('./gulp/tasks/html');

// Watch

// Tasks
exports.newTask = newTask;

// Default task
exports.default = parallel(htmlTask, stylesTask);
