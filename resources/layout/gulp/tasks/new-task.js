// Gulp task: newTask
// Description: creates new empty-task.js file from template
// Dependecies: npm i --save-dev gulp-rename

'use strict';

const config = require('../config');

const { src, dest } = require('gulp');
const rename = require('gulp-rename');

exports.newTask = () => {

  return src(config.newTask.src)
    .pipe(rename(config.newTask.name))
    .pipe(dest(config.newTask.dest))
};