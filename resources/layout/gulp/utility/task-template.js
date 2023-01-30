// Gulp task:
// Description:
// Dependecies: npm i --save-dev

'use strict';

const config = require('../config');

const { src, dest } = require('gulp');

exports.emptyTask = () => {

  return src()
    .pipe(dest())
};
