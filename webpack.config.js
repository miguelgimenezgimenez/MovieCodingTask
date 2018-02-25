var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        loader: 'file-loader?publicPath=/'
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&localIdentName=[name]_[local]_[hash:base64:5]',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'eval-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: `"${process.env.NODE_ENV || 'development'}"` }
    }),
    HtmlWebpackPluginConfig
  ]
}
