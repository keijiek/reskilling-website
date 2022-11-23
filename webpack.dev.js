const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const outputFile = '[name]';

// webpack.common.js の方で要求されている引数を渡すこと。
module.exports = merge(common(outputFile), {
  mode: 'development',
  // devtool: 'source-map',
  devtool: 'eval-source-map',
  // watch モード
  // watch: true,
  // watchOptions: {
  //   ignored: ['**/node_modules'],
  // },
});
