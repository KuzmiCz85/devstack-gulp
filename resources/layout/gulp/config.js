// Gulp tasks configuration file

'use strict';

const srcPath = './src/';
const buildPath = '../../';

exports.newTask = {
  src: './gulp/utility/task-template.js',
  dest: './gulp/tasks/',
  name: 'empty-task.js',
};

exports.scss = {
  src: `${srcPath}scss/style.scss`,
  dest: `${buildPath}css/`,
  settings: {
    outputStyle: 'expanded',
  }
};
