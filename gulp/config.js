// Name: Gulp devstack configuration module
// Description: external config file for gulpfile.js
//  or external task files

// Distribution folder
const dist = 'test';

// Task settings
module.exports = {

  // new-task
  newTask: {
    source: './gulp/utility/new-task.template.js',
    filename: 'empty-task.js',
    target: './gulp/tasks/'
  },

  // browsersync
  browserSync: {
    url: 'http://devstack-gulp.test',
    browser: 'firefox'
  },

  // clean
  clean: {
    target: {
      files: `${dist}/**/*.*`,
      folders: `${dist}/**/`
      }
  },

  // css
  css: {
    source: './source/sass/style.scss',
    target: `${dist}/css/`,
    filename: 'style.css',
    watch: './source/sass/**/*.scss',
    components: [
      './source/sass/base/*.scss',
      './source/sass/components/*.scss'
    ]
  },

  // js
  js: {
    source: [
      './source/js/components/**/*.js',
      './source/js/main.js'
    ],
    target: `${dist}/js/`,
    filename: 'script.js',
    watch: './source/js/**/*.js'
  },

  // html
  html: {
    source: './source/pages/*.{html,htm,php}',
    target: `${dist}/`,
    watch: [
      './source/pages/*.{html,htm,php}',
      './source/pages/templates/**/*.njk'
    ],
    components: './source/pages/templates/'
  },

  // images
  img: {
    source: './source/images/**/*.{gif,jpg,jpeg,png}',
    target: `${dist}/images/`
  }
};
