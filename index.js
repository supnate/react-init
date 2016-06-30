const path = require('path');
const exec = require('child_process').exec;
const shell = require('shelljs');
const _ = require('lodash');

const pkgJson = require('./templates/package.json');

const prjConfig = {
  dependencies: [
    'lodash',
    'memobind',
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux',
    'redux-logger',
    'redux-thunk',
    'reselect',
    'style-loader',
    'superagent',
  ],
  devDependencies: [
    'babel-core',
    'babel-eslint',
    'babel-loader',
    'babel-plugin-lodash',
    'babel-polyfill',
    'babel-preset-es2015',
    'babel-preset-react',
    'babel-preset-stage-0',
    'babel-register',
    'css-loader',
    'eslint',
    'eslint-config-airbnb',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
    'estraverse',
    'estraverse-fb',
    'file-loader',
    'less',
    'less-loader',
    'lodash-webpack-plugin',
    'react-hot-loader',
    'shelljs',
    'url-loader',
    'webpack',
    'webpack-bundle-size-analyzer',
    'webpack-dev-server',
  ],
};

const pkgVersions = {};

console.log('Getting packages versions...');
const promises = [].concat(prjConfig.dependencies, prjConfig.devDependencies).map(dep => new Promise((resolve, reject) => {
  exec(`npm show ${dep} version`, (err, stdout, stderr) => {
    const version = stdout.replace(/[\r\n]/g, '');
    console.log(dep, ':', version);
    pkgVersions[dep] = `^${version}`;
    resolve();
  });
}));

Promise.all(promises).then(() => {
  console.log('Get versions done.');
  pkgJson.dependencies = _.pick(pkgVersions, prjConfig.dependencies);
  pkgJson.devDependencies = _.pick(pkgVersions, prjConfig.devDependencies);
  shell.ShellString(JSON.stringify(pkgJson, null, '  ')).to(path.join(__dirname, '../fbcg/package.json'));
  console.log('package.json is created.');
}).catch(err => console.log(err.stack || err));





