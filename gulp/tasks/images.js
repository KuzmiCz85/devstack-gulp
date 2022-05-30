// Gulp task: images
// Description: optimize and copy images to target folder
// Dependecies: npm i --save-dev gulp-imagemin

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      gulp.src(config.img.source)
        .pipe(plugins.imagemin([
          plugins.imagemin.gifsicle({interlaced: true}),
          plugins.imagemin.mozjpeg({quality: 75, progressive: true}),
          plugins.imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest(config.img.target));

    return stream;
  };
};
