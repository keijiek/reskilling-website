const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// web-dev-server setting
const webDevServerSetting = {
  open: true,
  port: 8080,
  host: 'localhost',
};


// asset-module (webpack5標準機能)の設定, modue.rules[]に配置することで有効になる。
const assetModuleSetting = {
  // test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  test: /\.(png|jpe?g|gif|svg)/i,
  generator: {
    filename: `./images/[name].[contenthash][ext]`,
  },
  type: 'asset/resource',
};

// html-loader 設定。
const htmlLoader = {
  test: /.html$/i,
  loader: 'html-loader',
};

const makeHtmlWebpackPlugin = (filename) => {
  return new HtmlWebpackPlugin({
    inject: 'body',
    filename: `${filename}.html`,
    template: `./src/htmls/${filename}.html`,
    chunks: `${filename}`,
  })
};
// html entry 
const htmlWebpackPlugins = [
  makeHtmlWebpackPlugin('index'),
  makeHtmlWebpackPlugin('another')
];

// css 
const miniCssExtractPlugin = new MiniCssExtractPlugin({filename:'./styles/style.css'});
const cssModuleRule = {
  test: /\.css$/i,
  use: [
    MiniCssExtractPlugin.loader,
    // "style-loader",
    "css-loader"
  ],
};

module.exports = (outputFile) => ({
  entry: {
    index: path.resolve(__dirname, 'src', 'scripts', 'index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `./scripts/${outputFile}.js`,// module.exports の引数(outputFile)を使用
    clean: true // true = emmit 前に dist を clean する
  },

  plugins: [
    miniCssExtractPlugin,
    ...htmlWebpackPlugins
  ],

  module: {
    rules: [
      cssModuleRule,
      assetModuleSetting,
      htmlLoader,
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
