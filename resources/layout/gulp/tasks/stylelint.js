/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: ccsLint
// Description: stylelint
// Dependecies: npm i --save-dev stylelint gulp-stylelint stylelint-config-standard postcss-scss

'use strict';

const config = require('../config');

const { src } = require('gulp');

const gulpStylelint = require('gulp-stylelint');

const stylelint = () => {
  return src(config.scss.lint)
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true,
      }]
    }))
};

exports.stylelintTask = stylelint;
