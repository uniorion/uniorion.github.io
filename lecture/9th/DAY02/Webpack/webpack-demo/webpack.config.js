'use strict';

var webpack = require('webpack');

module.exports = {

  // webpack이 번들링 을 수행하고자 하는 진입 파일
  'entry': ['./entry.js', './app.js'],

  // 번들링된 출력 파일
  'output': {
    'path': __dirname + '/js',
    'filename': 'bundle.js'
  },

  // 관찰모드
  // 'watch': true,
  
  // 디버깅 모드
  'devtool': 'source-map',

  'module': {
    'preLoaders': [
      {
        'test': /\.(js|es6)$/,
        'exclude': /node_modules/,
        'loader': 'eslint-loader'
      }
    ],


    'loaders': [
      // babel-loader
      {
        'test': /\.es6$/,
        'exclude': /node_modules/,
        'loader': 'babel-loader',
        'query': {
          'presets': ['es2015']
        }
      },

      // style-loader + css-loader
      {
        'test': /\.css$/,
        'exclude': /node_modules/,
        //'loader': 'style-loader!css-loader'
        'loader': 'style!css'
      },

      // sass-loader
      {
        'test': /\.(sass|scss)$/,
        'exclude': /node_modules/,
        'loader': 'style!css!sass'
      }
    ], 

    // UglifyJsPlugin을 사용하여 컴파일 한 스크립트를 압축할 때
    // 경고를 출력하지 않도록 설정
    'plugins': [
      new webpack.optimize.UglifyJsPlugin({
        'compress': {
          'warnings': false
        }
      })
    ],

    'resolve': {
      'extensions': ['', '.js', '.es6']
    }

  }


};
