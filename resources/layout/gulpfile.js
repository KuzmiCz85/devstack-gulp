'use strict';

// Tasks list
const { newTask } = require('./gulp/tasks/new-task');
const { stylesTask } = require('./gulp/tasks/styles');

// Watch

// Tasks
exports.newTask = newTask;

// Default task
exports.default = stylesTask;
