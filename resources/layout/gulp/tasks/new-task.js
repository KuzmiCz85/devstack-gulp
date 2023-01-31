/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: newTask
// Description: creates new empty-task.js file from template
// Dependecies: npm i --save-dev gulp-rename

'use strict';

const config = require('../config');

const { src, dest } = require('gulp');
const rename = require('gulp-rename');

const emptyTask = () => {
  return src(config.newTask.src)
    .pipe(rename(config.newTask.name))
    .pipe(dest(config.newTask.dest))
};

exports.newTask = emptyTask;
