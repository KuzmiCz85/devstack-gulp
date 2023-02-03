/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const config = require('./gulp/config');

const { series, parallel, watch } = require('gulp');

// Tasks list

const { copyTask } = require('./gulp/tasks/copy');
const { htmlTask } = require('./gulp/tasks/html');
const { imagesTask } = require('./gulp/tasks/images');
const { newTask } = require('./gulp/tasks/new-task');
const { stylesTask } = require('./gulp/tasks/styles');
const { stylelintTask } = require('./gulp/tasks/stylelint');
const { browserSyncInit } = require('./gulp/tasks/browsersync');

const build = series(parallel(copyTask, imagesTask), series(parallel(htmlTask, stylesTask), stylelintTask));

// Watch
const watchFiles = () => {
  watch(config.scss.watch, series(stylesTask, stylelintTask));
  watch(config.twig.watch, build);
  watch(config.json.watch, build);
};

// Tasks export
exports.newTask = newTask;

// Default task
exports.default = series(build, parallel(watchFiles, browserSyncInit));
