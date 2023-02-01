/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const config = require('./gulp/config');

const { series, parallel, watch } = require('gulp');

// Tasks list

const { htmlTask } = require('./gulp/tasks/html');
const { newTask } = require('./gulp/tasks/new-task');
const { stylesTask } = require('./gulp/tasks/styles');
const { stylelintTask } = require('./gulp/tasks/stylelint');
const { browserSyncInit } = require('./gulp/tasks/browsersync');

// Watch
const watchFiles = () => {
  watch(config.scss.watch, series(stylesTask, stylelintTask));
  watch(config.twig.watch, series(parallel(htmlTask, stylesTask), stylelintTask));
  watch(config.json.watch, series(parallel(htmlTask, stylesTask), stylelintTask));
};

// Tasks
exports.newTask = newTask;

// Default task
exports.default = series(parallel(htmlTask, stylesTask), stylelintTask, parallel(watchFiles, browserSyncInit));
