const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '~api': path.resolve(__dirname, 'src/api/'),
      '~assets': path.resolve(__dirname, 'src/assets/'),
      '~components': path.resolve(__dirname, 'src/components/'),
      '~config': path.resolve(__dirname, 'src/weblearn.config.js'),
      '~events': path.resolve(__dirname, 'src/events/'),
      '~pages': path.resolve(__dirname, 'src/pages/'),
      '~store': path.resolve(__dirname, 'src/store/'),
      '~topics': path.resolve(__dirname, 'src/topics/'),
      '~transformers': path.resolve(__dirname, 'src/transformers/'),
      '~util': path.resolve(__dirname, 'src/util/'),
      '~widgets': path.resolve(__dirname, 'src/widgets/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(yml|yaml)$/,
        loader: 'json-loader!yaml-loader'
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader?indentedSyntax'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CopyWebpackPlugin([
      { from: 'src/static' }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ])
}
