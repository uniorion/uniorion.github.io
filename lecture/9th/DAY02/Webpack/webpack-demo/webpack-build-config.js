'use strict';

// strip-loader 모듈 로드
var WebpackStrip = require('strip-loader');

// webpack.config.js 파일 로드
var dev_config = require('./webpack.config');

// strip_loader 설정
var strip_loader = {
  test: [/\.js$/, /\.es6$/, /\.ts$/], // 해당 파일들을 가져다가
  exclude: /node_modules/,
  // 제거(strip)할 명령어 설정
  loader: WebpackStrip.loader('console.log', 'console.error', 'console.info', 'debugger')
};

// dev_config 모듈 로더에 strip_loader 설정 
// strip_loader를 배열에 push
dev_config.module.loaders.push(strip_loader);

// dev_config 모듈 출력
module.exports = dev_config;