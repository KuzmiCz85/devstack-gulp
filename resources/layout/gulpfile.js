/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const config = require('./gulp/config');

const { series, parallel, watch } = require('gulp');

// Tasks list

const { htmlTask } = require('./gulp/tasks/html');
const { newTask } = require('./gulp/tasks/new-task');
const { stylesTask } = require('./gulp/tasks/styles');
const { browserSyncInit } = require('./gulp/tasks/browsersync');

// Watch
const watchFiles = () => {
  watch(config.scss.watch, stylesTask);
  watch(config.twig.watch, parallel(htmlTask, stylesTask));
  watch(config.json.watch, parallel(htmlTask, stylesTask));
};

// Tasks
exports.newTask = newTask;

// Default task
exports.default = series(parallel(htmlTask, stylesTask), parallel(watchFiles, browserSyncInit));
