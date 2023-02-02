/* eslint-disable @typescript-eslint/no-var-requires */

// Gulp task: imagesTask
// Description: optimize and copy images
// Dependecies: npm i --save-dev gulp-imagemin@v7.1.0

'use strict';

const config = require('../config');

const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin')

const images = () => {
  return src(config.images.src)
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(dest(config.images.dest))
};

exports.imagesTask = images;
