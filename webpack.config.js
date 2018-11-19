const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputDir = path.join(__dirname, 'build/');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/Index.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: 'Index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false
    })
  ],
  // https://jaketrent.com/post/pushstate-webpack-dev-server/
  // https://stackoverflow.com/a/49207884
  // https://stackoverflow.com/questions/7613274/why-would-a-developer-place-a-forward-slash-at-the-start-of-each-relative-path
  // https://stackoverflow.com/questions/49207826/webpack-dev-server-historyapifallback-not-working-in-case-of-multilevel-routing
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/index.html' }
      ]
    }
  }
};
