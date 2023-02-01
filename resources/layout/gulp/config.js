// Gulp tasks configuration file

'use strict';

const srcPath = './src/';
const buildPath = '../../test/';

exports.browserSync = {
  server: {
    baseDir: `${buildPath}`,
  },
  watch: true,
}

exports.html = {
  src: `${buildPath}*.html`,
  dest: `${buildPath}`,
  settings: {
    indent_size: 2,
    indent_style: "space",
    max_preserve_newlines: 1,
    end_with_newline: true,
  },
};

exports.json = {
  src: `${srcPath}components/**/*.json`,
  dest: `${srcPath}data.json`,
  watch: `${srcPath}components/**/*.json`
};

exports.newTask = {
  src: './gulp/utility/task-template.js',
  dest: './gulp/tasks/',
  name: 'empty-task.js',
};

exports.scss = {
  src: `${srcPath}scss/style.scss`,
  dest: `${buildPath}css/`,
  settings: {
    outputStyle: 'expanded',
  },
  lint: `${srcPath}**/*.scss`,
  watch: `${srcPath}**/*.scss`,
};

exports.twig = {
  src: `${srcPath}layouts/*.twig`,
  dest: `${buildPath}`,
  settings: {
    namespaces: {
      Components: `${srcPath}components/`,
    },
  },
  data: `${srcPath}data.json`,
  watch: `${srcPath}**/*.twig`
};
