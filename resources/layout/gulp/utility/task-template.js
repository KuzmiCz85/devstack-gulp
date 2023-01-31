// Gulp task:
// Description:
// Dependecies: npm i --save-dev

'use strict';

const config = require('../config');

const { src, dest } = require('gulp');

const stream = () => {
  return src()
    .pipe(dest())
};

exports.emptyTask = stream;
