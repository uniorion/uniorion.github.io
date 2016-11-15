'use strict';

var $ = require('jquery');
var people = {};

// Ajax using jQuery Library
// Utility Methods === Static Methods === Class Methods
// 인스턴스 생성 없이 사용할 수 있는, jQuery 객체 속성으로 정의된 함수
$.ajax({
  'url'       : 'https://randomuser.me/api/?results=10&gender=female',
  'dataType'  : 'json'   // 자동으로 json 객체로 반환
})
.done(function(data) {
  people.results = data.results;
});

// 외부 모듈에서 사용 가능하도록 배포(출력)
exports.people = people;
// 아래와 같이 객체로 내보내어진다. 
// {
//   'recieve' : recieve;
// }
