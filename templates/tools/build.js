'use strict';
// Summary:
//  Build for production

const path = require('path');
const shell = require('shelljs');
const webpack = require('webpack');
const config = require('../webpack.dist.config');
config.warnings = true;

// Clean folder
const buildFolder = `${__dirname}/../build`;
shell.rm('-rf', buildFolder);
shell.mkdir(buildFolder);
shell.mkdir(`${buildFolder}/static`);

let indexHtml = shell.cat(path.join(__dirname, '../src/index.html'));
indexHtml = indexHtml.replace('<script src="/build/vendors.dll.js"></script>', '');
shell.ShellString(indexHtml).to(path.join(buildFolder, 'index.html'));

const start = new Date().getTime();
webpack(config, (err) => {
  if (err) console.log(err);
  else {
    const end = new Date().getTime();
    console.log('Done, build time: ', end - start, 'ms');
  }
});

