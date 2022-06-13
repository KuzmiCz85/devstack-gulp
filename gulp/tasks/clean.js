// Gulp task:
// Description:
// Dependecies: npm i --save-dev del

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      new Promise(
        async function(resolve) {
          const deletedFilePaths = await plugins.del(config.clean.target.files);
          const deletedDirectoryPaths = await plugins.del(config.clean.target.folders);

          resolve(
            console.log('Deleted files:\n', deletedFilePaths.join('\n')),
            console.log('\n'),
            console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n')),
            console.log('\n')
          );
        }
      );

    return stream;
  };
};
