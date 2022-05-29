// Gulp task: newTask
// Description: creates new empty-task.js file from template,
//  which remains untracked by Git until it gets new proper name
// Dependecies: npm i --save-dev gulp-rename

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // stream definition
      gulp.src(config.newTask.source)
        .pipe(plugins.rename(config.newTask.filename))
        .pipe(gulp.dest(config.newTask.target));

    return stream;
  };
};
