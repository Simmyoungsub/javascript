const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // enntry file
  entry: {
    bundle: ['./src/index.js', './src/scss/common/main.scss'],
    vendor: ['lodash']
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'lib/'),
    filename: '[name].js'
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      title: '프론트엔드 정복기',
      template: 'public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
                '@babel/transform-runtime',
                // '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src/')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",   // translates CSS into CommonJS
          "sass-loader"   // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};