// Gulp task: clean
// Description: delete files in dist folder before uploading new build
// Dependecies: npm i --save-dev del

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      new Promise(
        async function(resolve) {
          // wait for performing del, then store deleted files paths
          const deletedFilePaths = await plugins.del(config.clean.target.files);
          const deletedDirectoryPaths = await plugins.del(config.clean.target.folders);

          resolve(
            // write deleted files paths into console
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
