// Gulp task: js
// Description: merge and minify source js files
// Dependecies: npm i --save-dev gulp-concat gulp-uglify

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      gulp.src(config.js.source)
        .pipe(plugins.concat(config.js.filename))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(config.js.target));

    return stream;
  };
};
