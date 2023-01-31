/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const { parallel } = require('gulp');

// Tasks list

const { htmlTask } = require('./gulp/tasks/html');
const { newTask } = require('./gulp/tasks/new-task');
const { stylesTask } = require('./gulp/tasks/styles');

// Watch

// Tasks
exports.newTask = newTask;

// Default task
exports.default = parallel(htmlTask, stylesTask);
