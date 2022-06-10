// Plugins used in gulp tasks
module.exports = {
  // merge files
  concat: require('gulp-concat'),
  // delete files
  del: require('del'),
  // rename files
  rename: require('gulp-rename'),
  // browser control & reload
  browserSync: require('browser-sync').create(),
  // process css from sass files
  sass: require('gulp-sass')(require('sass')),
  // lint css files
  stylelint: require('gulp-stylelint'),
  // minify js files
  uglify: require('gulp-uglify'),
  // lint js files
  jshint: require('gulp-jshint'),
  // render html from nunjucks templates
  nunjucksRender: require('gulp-nunjucks-render'),
  // optimize images
  imagemin: require('gulp-imagemin')
};
