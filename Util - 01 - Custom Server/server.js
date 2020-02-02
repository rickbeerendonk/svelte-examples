/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint-disable no-console */

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const portHttp = process.argv[2] || 8080;
//const portRest = +portHttp + 1;
let filePath = process.argv[3];
//const basePath = process.cwd();

//console.log('portHttp: ' + portHttp);
//console.log('portRest: ' + portRest);
//console.log('filePath: ' + filePath);
//console.log('basePath: ' + basePath);

/*** Helper functions ***/

function findFileInPath(directory, file) {
  const filename = path.join(directory, file);
  if (fs.existsSync(filename)) {
    return filename;
  } else {
    const basename = path.dirname(directory);
    return basename && basename !== directory
      ? findFileInPath(basename, file)
      : null;
  }
}

/*** Main functions ***/

/// Is Webpack project? ///

if (filePath && fs.statSync(filePath).isDirectory()) {
  const webpackConfigNames = ['webpack.config.js', 'webpack.dev.js'];
  const webpackConfigPath = webpackConfigNames.reduce(
    (path, name) => path || findFileInPath(filePath, name),
    null
  );
  if (webpackConfigPath) {
    // Webpack config exists, so execute webpack
    console.log('webpack');
    console.log('webpack config: ' + webpackConfigPath);
    childProcess.spawnSync(
      'webpack-dev-server',
      ['--config', `"${webpackConfigPath}"`, '--open', '--port', portHttp],
      {
        cwd: path.dirname(webpackConfigPath),
        shell: true,
        stdio: 'inherit'
      }
    );
    console.log('webpack done');
    process.exit();
  }
}

/// No Webpack ///

console.error('Webpack not found');
