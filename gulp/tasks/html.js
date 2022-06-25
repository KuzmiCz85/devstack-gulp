// Gulp task: html
// Description: render html pages from njk templates
//  and copy them to target folder
// Dependecies: npm i --save-dev gulp-nunjucks-render gulp-rename

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      gulp.src(config.html.source)
        .pipe(plugins.nunjucksRender({
          path: [config.html.components],
          envOptions: {
            trimBlocks: true,
          },
        }))
        .pipe(gulp.dest(config.html.target));

    return stream;
  };
};
