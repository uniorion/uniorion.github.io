'use strict';

// CSS 파일 로드 (번들링: 묶음 용도)
// require('!style-loader!css loader!./app.css');
require('./app.css');

// Sass 파일 로드
require('./style.sass');

// jQuery 의존 모듈 파일 제작
// CommonJS 방식의 모듈 로드 (읽기)
var result = require('./jquery.ajax.run');

console.log(result);
// window.result = result;

// 소스맵 만들기
// webpack entry.js bundle.js -d

//-----------------------------------------------------------------
// webpack-dev-server
//-----------------------------------------------------------------
console.log('start webpack-dev-server :-D');

console.log('%c--------------------------', 'color:#EC0D0D');
