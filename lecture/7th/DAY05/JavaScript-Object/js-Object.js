// 자바스크립트에서 객체가 아닌 것들
// 배열이란? 값의 집합
// 객체란? 속성의 집합 { '속성(key, property)': '값(value)'}

//-----------------------------------------------------------------
// 원시데이터 유형 primitive data
// 원시데이터 유형은 객체가 아니다.
// 속성을 가지지 못한다.

// * 원시데이터 유형의 종류
// null
// undefined

// ※ 자바스크립트에서는 마치 객체인 것 마냥 속성을 가져다 쓸 수 있다.
// 숫자 9 값(Literal)
// 문자 'javascript' 값
// 불리언 false 값
true.toString(); // "true"

// 객체를 생성해서 사용한다.
// [객체가 생성되는 과정]
// 객체를 생성하는 생성자(Constructor)가 객체를 생성(생성된 객체: Instance)한다.

// 숫자 객체를 생성하는 생성자(함수)로부터 숫자 객체를 생성하는 과정
// 생성자 함수와 일반 함수를 구분하기 위한 자바스크립트 이름 관례는
// 생성자 함수 이름이 첫글자를 대문자로 작성한다.

// 생성자 함수
// Number()
// String()
// Boolean()

// 본래의 목적과 다른 사용법
// 위 생성자 함수는 생성자로 사용되기도 하지만, 자바스크립트에서는
// 데이터 유형을 변경하는데 사용되기도 한다.
// String(321) -> '321'
// Number(null) -> 1

// 생성자 함수를 사용한 객체 생성 과정
// new 생성자 함수() -> 객체 생성
var maked_number_object = new Number(123123);

// 객체는 속성을 포함하는 컨테이너이다.
// 속성들의 집합이 객체이다
// 속성은 변수, 함수 유형을 모두 말한다.
// 단, 함수 유형은 특별히 메소드(Method)라고도 부른다.
// 메소드(방법) -> 동사 형태 e.g) getName(), setName(), lookHim(), showMeTheMoney()...

// 네이티브 객체 생성 시, 
// 생성자 함수가 아닌 리터럴 표기법을 권장.
var num = 9,
    str = 'nine',
    boo = false,
    fnc = function() {},
    obj = {},
    arr = [];

// 사용자 정의 객체를 생성하는 사용자 정의 생성자 함수 
function Atom(name, n) { 
  this.name = name;
  this.power = 100 * n;
}
// 사용자 정의 객체를 생성 (new 생성자 함수)
var atom_one = Atom('제롬', 10);
var atom_two = new Atom('제로', 30);

// 객체 생성 방법 (리터럴)
var omega = { 'name': 'Atom', 'power': 100000 };

//-----------------------------------------------------------------
// 생성자 함수를 new 를 붙이지 않고 변수에 할당할 경우 일반 함수처럼 동작한다.
// var atom_one = Atom('제롬', 10); // atom_one : undefined  ,  window.name -> '제롬'
// 이 경우 Atom 내에서 this는 window 객체가 되며, 전역에 변수를 할당한 것처럼 동작하게 된다.
// 이를 방지하기 위해
// 방법 1. new 강제화하는 패턴
// function Atom(name, n) { 
//   if ( this.constructor !== Atom ) {
//      return new Atom(name, n);
//   }
//   this.name = name;
//   this.power = 100 * n;
// }
// 방법 2. 'use strict';
// function Atom(name, n) { 
//   'use strict';    // 더이상 this는 window가 아니고, 오류가 발생한다.
//   
//   this.name = name;
//   this.power = 100 * n;
// }

//-----------------------------------------------------------------
// 자바스크립트 네이티브(내장, 빌트인) 객체
// Number
// String
// Boolean
// Function
// Array
// Object
//-----------------------------------------------------------------

function cloneArray(arr) {
  if ( !(arr instanceof Array) ) { throw new Error('전달인자는 배열이여야 합니다.'); }

  var cloned_arr = [];

  for (var i = 0, l = arr.length; i < l; i++ ) {
    cloned_arr.push( arr[i] );
  }
  return cloned_arr;
}

function cloneArraySimple(arr) {
  if ( !(arr instanceof Array) ) { throw new Error('전달인자는 배열이여야 합니다.'); }

  return arr.slice(0);
}

function makeArray(data) {
  //return Array.prototype.slice.call(data, 0);
  return [].slice.call(data, 0);
}

//-----------------------------------------------------------------
// 노드리스트 순환하기 

var document = window.document;
var gnb_links = document.querySelectorAll('.gnb a');
gnb_links = makeArray(gnb_links);

// 방법 1. for문
for ( var i=0, l=gnb_links.length; i<l; i++) {
  var gnb_link = gnb_links[i];
  gnb_link.onclick = function() {};
}

var linkCounter = function() {
  console.log(this);
  return false;
}

// 방법 2. forEach문 
// .forEach(function(element, index, Array[]){...})
// 배열 메소드, ES 5부터 지원 (chrome은 자체지원)
gnb_links.forEach(function(link, index){ 
  // link === <a>
  // link === gnb_links[index]
  link.addEventListener('click', linkCounter);
});
// 배열 메소드 빌려쓰기 패턴
// [].forEach.call(gnb_links, function(el){
var forEach = Array.prototype.forEach;
forEach.call(gnb_links, function(el) {
  console.log(el);
});


//-----------------------------------------------------------------
// 객체 지향 자바 스크립트 패턴 1
//-----------------------------------------------------------------

function Tab() {}   // 생성자 함수

Tab.prototype;  // 프로토타입 객체

var my_tab = new Tab();   // 객체 인스턴스 생성

my_tab.activeTab; // undefined

Tab.prototype.activeTab = function() {}; // 프로토타입 객체 능력 추가

my_tab.activeTab;   // function() {} // 인스턴스 객체는 그 능력을 사용할 수 있다. 






