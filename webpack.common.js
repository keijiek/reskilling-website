const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// web-dev-server setting ************************************************
const webDevServerSetting = {
  open: true,
  port: 8080,
  host: 'localhost',
};


// asset-module (標準機能)の設定 ************************************************
// module.rules[] に入れ込む asset-module 用の element
const assetModuleSetting = {
  // test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  test: /\.(png|jpe?g|gif|svg)/i,
  include: path.resolve(__dirname, 'src'),
  generator: {
    filename: `./images/[name].[contenthash][ext]`,
  },
  type: 'asset/resource',
};


// html-loader 設定, 何の役に立っているか不明なので要調査  ************************************************
const htmlLoader = {
  test: /.html$/i,
  loader: 'html-loader',
};

// HTML Webpack Plugin 用の設定群 ************************************************
// func for HtmlWebpackPlugin
const makeHtmlWebpackPlugin = (filename) => {
  return new HtmlWebpackPlugin({
    inject: 'body',               // script の読み込み場所
    filename: `${filename}.html`, // distでのパス
    template: `./src/htmls/${filename}.html`, // src でのパス
    // chunks: `${filename}`,
    chunks: ['index'],  // 読み込むjsファイルを指定。
  })
};
// html side entry points. Add above function as needed.
const htmlWebpackPlugins = [
  makeHtmlWebpackPlugin('index'),
  makeHtmlWebpackPlugin('another')
];


// CSS 関連設定 ************************************************
// 1. MiniCssExtract 設定, css を外部ファイル化する plugin
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename:'styles/style.css'
});
// 2. module.rules[] に入れ込む css 用の element を作成
const cssModuleRule = {
  test: /\.(sa|sc|c)ss$/i,
  include: path.resolve(__dirname, 'src/styles'),
  // 下から上へと処理される点に注意
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader"
    // postcss
    // sass
  ],
};


/**
 * The Main Part
 * @param {String} outputFile 
 * @returns 
 */
module.exports = (outputFile) => ({
  entry: {
    index: path.resolve(__dirname, 'src', 'scripts', 'index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `scripts/${outputFile}.js`,// module.exports の引数(outputFile)を使用
    clean: true // true = emmit 前に dist を clean する
  },

  plugins: [
    miniCssExtractPlugin,
    ...htmlWebpackPlugins
  ],

  module: {
    rules: [
      cssModuleRule,
      htmlLoader,
      assetModuleSetting,
    ],
  },

  resolve: {
    extensions: ['.ts', '...'],// ... は '.js', '.json', '.wasm' のデフォルト値を指す
    alias: {
      '@css'  : path.resolve(__dirname, './src/styles/'),
      '@js'   : path.resolve(__dirname, './src/scripts/'),
      '@img'  : path.resolve(__dirname, './src/images/'),
			// '@font' : path.resolve(__dirname, './src/font/'),
			// '@ts'   : path.resolve(__dirname, './src/script/'),
			// '@scss' : path.resolve(__dirname, './src/styles/'),
		},
  },
});
