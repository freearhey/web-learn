require('dotenv').config()
const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = env => {
  let config = {
    mode: 'development',
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
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        'process.env.YOUTUBE_API_KEY': `"${process.env.YOUTUBE_API_KEY}"`
      })
    ],
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
          test: /\.pug$/,
          loader: 'pug-plain-loader'
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

  if(env && env.analyze) {
    config.plugins = (config.plugins || []).concat([
      new BundleAnalyzerPlugin()
    ])
  }

  return config
}
