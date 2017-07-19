const path = require( 'path' );
const webpack = require( 'webpack' );
const setup = require( './setup' );


module.exports = env => {
  const isProd = env && env.production;

  return {
    context: path.resolve( __dirname, '../src' ),
    entry: path.resolve( __dirname, '../src/views/Root.jsx' ),
    output: {
      path: path.resolve( __dirname, '../dist' ),
      filename: 'js/bundle.min.js',
    },
    devServer: {
      contentBase: path.resolve( __dirname, '../dist' ),
      port: process.env.PORT || 3000,
      historyApiFallback: true,
      hot: !isProd,
      inline: !isProd,
      compress: isProd,
    },
    devtool: !isProd && 'eval',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node-modules/,
          use: 'babel-loader',
        },
        {
          test: /\.json$/,
          use: 'json-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ],
        }
      ],

    },
    resolve: {
      alias: {
        views: path.resolve( __dirname, '../src/views' ),
        config: path.resolve( __dirname, '../src/config' ),
        styles: path.resolve( __dirname, '../src/styles' ),
        constants: path.resolve( __dirname, '../src/constants' ),
        static: path.resolve( __dirname, '../src/static' ),
      },
      extensions: ['.js', '.jsx'],
    },
    plugins: setup( isProd ),
  };
}
