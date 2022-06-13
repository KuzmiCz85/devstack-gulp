// Gulp task: watch
// Description: track for changes, recall appropriate tasks,
//  & reload browser
// Dependecies: npm i --save-dev browser-sync

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      // initialize browserSync
      plugins.browserSync.init({
        proxy: config.browserSync.url,
        browser: config.browserSync.browser
      });

      // watch & perform appropriate tasks, then reload browser
      gulp.watch(config.css.watch, gulp.task('css')).on('change', plugins.browserSync.reload);
      gulp.watch(config.js.watch, gulp.task('js')).on('change', plugins.browserSync.reload);
      gulp.watch(config.html.watch, gulp.task('html')).on('change', plugins.browserSync.reload);

    return stream;
  };
};
