// Gulp task: jsLint
// Description: js files lint
// Dependecies: npm i --save-dev gulp-jshint

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      gulp.src(config.js.source)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.jshint.reporter('fail'));

    return stream;
  };
};
