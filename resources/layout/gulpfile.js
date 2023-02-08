/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const config = require('./gulp/config');

const { series, parallel, watch } = require('gulp');

// Tasks list
const { browserSyncInit } = require('./gulp/tasks/browsersync');
const { htmlTask } = require('./gulp/tasks/html');
const { imagesTask } = require('./gulp/tasks/images');
const { newTask } = require('./gulp/tasks/new-task');
const { scriptsTask } = require('./gulp/tasks/scripts');
const { stylesTask } = require('./gulp/tasks/styles');
const { stylelintTask } = require('./gulp/tasks/stylelint');

const build = series(parallel(scriptsTask, imagesTask), series(parallel(htmlTask, stylesTask), stylelintTask));

// Watch
const watchFiles = () => {
  watch(config.json.watch, build);
  watch(config.scripts.watch, build);
  watch(config.scss.watch, series(stylesTask, stylelintTask));
  watch(config.twig.watch, build);
};

// Tasks export
exports.newTask = newTask;
exports.build = build;

// Default task
exports.default = series(build, parallel(watchFiles, browserSyncInit));
