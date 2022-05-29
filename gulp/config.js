// Distribution folder
const dist = 'test';

// Task settings
module.exports = {

  // -- browsersync
  browserSync: {
    url: 'http://devstack-gulp.test',
    browser: 'firefox'
  },

  // -- clean
  clean: {
    target: {
      files: `${dist}/**/*.*`,
      folders: `${dist}/**/`
      },
    // auto clean dist folder
    autoClean: true // true = on | false = off
  },

  // -- css
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

  // -- js
  js: {
    source: [
      './source/js/components/**/*.js',
      './source/js/main.js'
    ],
    target: `${dist}/js/`,
    filename: 'script.js',
    watch: './source/js/**/*.js'
  },

  // -- html
  html: {
    source: './source/pages/*.{html,htm,php}',
    target: `${dist}/`,
    watch: [
      './source/pages/*.{html,htm,php}',
      './source/pages/templates/**/*.njk'
    ],
    components: './source/pages/templates/'
  },

  // -- images
  img: {
    source: './source/images/**/*.{gif,jpg,jpeg,png}',
    target: `${dist}/images/`
  }
}
