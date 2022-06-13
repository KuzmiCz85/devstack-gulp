// Gulp task: ccsLint
// Description: stylelint
// Dependecies: npm i --save-dev stylelint gulp-stylelint stylelint-config-standard postcss-scss

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      gulp.src(config.css.components)
        .pipe(plugins.stylelint({
          reporters: [
            {
              formatter: 'string',
              console: true
            }
          ]
        }));

    return stream;
  };
};
