/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task:
// Description:
// Dependecies: npm i --save-dev

'use strict';

const { src, dest } = require('gulp');

const stream = () => {
  return src()
    .pipe(dest())
};

exports.emptyTask = stream;
