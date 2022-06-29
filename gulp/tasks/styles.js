// Gulp task: css
// Description: process sass files into target css file
// Dependecies: npm i --save-dev sass gulp-sass gulp-concat

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      gulp.src(config.css.source)
        .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
        .pipe(plugins.concat(config.css.filename, {newLine: ''}))
        .pipe(gulp.dest(config.css.target));

    return stream;
  };
};
