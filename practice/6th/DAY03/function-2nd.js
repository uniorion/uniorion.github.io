(function(global){

// 전역
// 느슨한 모드

function localScope() {
	// 엄격 모드 실행
	'use strict';
}

// 자바스크립트 함수를 'First Class Object'라고 부르는 이유 중 하나.
function localScope(callback) {
	// 특정 코드를 수행...
	// 전달 받은 인자(함수)를 실행
	// 조건 구문을 사용하여 올바른 데이터유형을 감지한 후, 올바르다면 코드 실행
	// 전달 받은 인자의 유형이 함수일 경우에만 callback() 실행
	// for(var i = 0, l = 100; i < l; i+=2) {
	// 	console.log('i:', i);
	// }

	var is_callback = typeof callback === 'function';

	is_callback && callback();
}

console.log();

// 경우 1. 함수 인자가 있는 경우
localScope(function() {
	console.log('localScope 함수의 코드가 모두 실행된 다음 전달된 함수 실행');
});

// 경우 2. 함수 인자가 없는 경우
localScope();

//-----------------------------------------------------------------

// 함수가 일급객체인 이유 2
// 함수는 함수를 인자로 받을 수 있을 뿐만 아니라, 함수를 반환(return)할 수도 있다 
function returnFunction(data) {
	var a = data[0];
	var b = data[1];
	var c = function(){ return a + b; };
	return c;
}

var sum = returnFunction( [10, 20] );

console.log( sum );
console.log( sum() );

// 자바스크립트 함수에서 함수를 반환하다.
function createCountDown(count) {
	// count 매개변수(Parameter) 값 초기 설정
	// count = (typeof count !== 'number' ? false : count) || 10;
	if ( typeof count !== 'number' ) { count = 10; }
	
	// 함수 createCountDown의 내부에 존재하는 함수
	function _countDown() {

	};

	// 내부 함수인 _countDown()을 반환
	return _countDown;
}

createCountDown(90);
createCountDown('90');


// ※ 함수 실행 과정에서 기억해두기 위한 변수는 동일한 영역에 존재하지 않아야 한다.
var count = 10;

function countDown() {
	// 전역에 선언된 count 변수에 복사된 값을 함수가 수행될 때 마다 변경합니다.
	count = count - 1; // 이 코드의 연산 결과는 다음 라인에서 처리됩니다.
	return count;
}

//-----------------------------------------------------------------

// 모던 자바스크립트에서의 모듈 패턴
// 함수를 활용하여 언어 차원에서 차원에서 지원하지 않았던 모듈을 구현
// 일반 함수가 아닌, `IIFE`패턴을 사용한 `즉시실행함수`

// IIFE 패턴
// function (){} // 문법 오류
// function (){}() // () 실행 연산자 붙은 이 코드도,,,문법오류

// 아래 코드는 정상적으로 함수가 실행된다. 즉시!!!
// +function (){ console.log('IIFE Pattern'); }();
// !function (){ console.log('IIFE Pattern'); }();
// ~function (){ console.log('IIFE Pattern'); }();

// 정체모를 위 코드 보다는 아래와 같은 유형으로 작성하길 권장!!
( function(){ console.log('IIFE Pattern'); }() ); // 권장!
( function(){ console.log('IIFE Pattern'); } )();

// 전역을 오염시키지 않고, 외부에서 접근하지 못하게 한다.
// 구분된 공간에서 코드를 충돌없이 안정되게 구현 가능하게 한다.

//노출패턴
global.count = count;



}(this));






