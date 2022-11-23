const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

const outputFile = '[name].[chunkhash]';// webpack.common.js への引数の値

const terserPluginSetting = new TerserPlugin({
  extractComments: false,// def=true, 不要な txt files の出力を妨げるか。
  terserOptions: {
    compress: {
      drop_console: true,
    }
  },
});

module.exports = merge(common(outputFile), {
  mode: 'production',
  // 試験的に、output にclean trueを入れている。
  // output: {
  //   clean : true
  // },
  optimization: {
    minimize: true,
    minimizer: [terserPluginSetting],
  }
});