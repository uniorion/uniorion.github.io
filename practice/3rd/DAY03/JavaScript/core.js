
var k = 19342;
console.log('k:', k);
console.log('typeof k:', typeof k);

console.log('%c-------------------------------', 'color:#f423b3');

k = String(k);
console.log('k:', k);
console.log('typeof k:', typeof k);

console.log('%c-------------------------------', 'color:#f423b3');

// {객체}.toString() 객체가 소유한 함수 유형의 속성을 특별히 "메소드(method)"라고 부른다. 
var m = 7483;
m = m.toString();
console.log("m:", m);
console.log("typeof m:", typeof m);

// 단, 숫자 상수 값의 경우 바로 .toString() 메소드를 사용할 수 없다.
// 아래 코드는 오류를 발생시킨다. 
// c  8080.toString();	// Uncaught SyntaxError: Invalid or unexpected

console.log('%c-------------------------------', 'color:#f423b3');

// ---------------------------------------------
// 방법 1. -, *, /
var u = '92382';

console.log('u - 0:', u - 0);	// 92382
console.log('u * 1:', u * 1);	// 92382
console.log('u / 1:', u / 1);	// 92382

var uu = '12341em';	// 문자

console.log(uu - 0); 	// NaN: Not a Number

// NaN은 숫자가 아니라고 부르짓지만, 그는 실상 숫자이다;
console.log('typeof NaN:', typeof NaN);

// 방법 2. 
// 숫자형 문자 앞에 + 기호를 붙인다.
var h = '34';
h = +h;	// 은근~~~ 많이 사용된다.

console.log('h:', h);

// 방법 3.
// 숫자형 문자를 Number() 함수에 전달하여 처리한 결과는 숫자가 된다.
var r = '3.141592';


console.log('%c-------------------------------', 'color:#f423b3');

// --------------------------------------------------------
// 숫자와 단위(문자)를 포함한 문자(단위 유형) -> 숫자
// 단위를 제거하는 함수
// window 전역 객체(Global Object)의 빌트인(내장, 네이티브) 메소드
// window.parseInt('단위유형의문자', '반환진수')	// 정수 반환
// window.parseFloat('단위유형의문자', '반환진수')	// 실수 반환

var font_size = '21.9px';

var parse_int = window.parseInt(font_size, 10);
var parse_float = window.parseFloat(font_size, 10);

console.log("parse_int:", parse_int);
console.log("parse_float:", parse_float);









