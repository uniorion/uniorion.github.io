var condition = true, count = 0;

while (condition) {
	if ( ++count > 3 ) {
		condition = !condition;
	}
	console.log('count: ', count);
}

do {
	if ( ++count > 3 ) {
		condition = !condition;
	}
} while(condition)
console.log('count: ', count);

// 1부터 100까지 숫자를 합한 값을 for문으로 구하시오.
var sum = 0;
for ( var i = 1; i <= 100; i++ ) {
	sum = sum + i;
}
console.log('sum: ', sum);

var fds = {}; // 객체 리터럴(값)
fds.name = 'Front-End Develop SCHOOL';

console.log(fds['name'], 'name' in fds);

for (var prop in fds) {
	console.log('prop:', prop)
	console.log('fds[prop]:', fds[prop]);
	console.log('fds[prop] === fds.name:', fds.name);
}

// 함수 선언식 
function fnName() {}

// 함수 표현식 
var fnName2  = function() {};


// 전역(Global Scope) VS 지역(Loccal Scope)

// 전역 (Global Scope) === Client Env. window {}
// 웹 브라우저(클라이언트, 플론트엔드) 환경에서 전역 객체라 함은?
// window {} 객체를 말한다.
var coffee = '아메리카노';	// window.coffee 속성과 동일

// ※ 전역 변수, 함수는 웹 브라우저 환경에서 전역 객체인 window {} 객체의 속성이다.

// 전역 변수, 전역 함수에서의 this는 ?
var global_valiable = this;
var globalFunction = function() {
	console.log('this:', this);
}

// 전역 함수 실행, 함수를 실행시킨 주체는 누구인가?
globalFunction(); 
// 위 함수의 실행은 아래 코드와 동일하다. 결국 함수를 실행시킨 주체는 
// 전역 객체인 window 이므로 함수 내부의 this는 window를 가르킨다.
// window.globalFunction();

// globalFunction 함수는 전역 함수로 window
document.onclick = globalFunction;

// 전역이라 함은 Global Scope로 window 객체의 영역을 말한다.
// 지역이라 함은 함수 내부의 공간을 지역이라고 볼 수 있다.
// 블록문 if, else, while, for, swith 구문에서는 별도의 지역이 생성되지 않는다.

// 전역
var scope_variable = '전역 변수';
console.log('전역 scope_variable:', scope_variable);

function createLocalScope() {
	// 지역 변수
	var scope_variable = '함수 내부 지역 변수';
	console.log('함수 내부 scope_variable:', scope_variable);
}
// 함수 실행
createLocalScope();
console.log('함수 외부 scope_variable:', scope_variable);

//-------------------------------------------------
// 스코프 체이닝 (Scope chaining)
// 함수 내부에서 var 키워드를 사용해야 하는 이유
var hadoom = '하둠';

function localFn() {
	var hadoom = 'Hadoom';

	function inLocalFn() {
		var hadoom = '하아둠';
	}
	inLocalFn();
}
localFn();

// 자바스크립트 호이스트(Hoist) 현상
// 호이스팅 "영역(Scope)의 가장 상위에 끌어올려지다"
// 현상1. function 선언문의 몸체(Body)가 통째로 끌어 올려진다.
// 현상2. var 선언문에서 할당된 값이 아닌, 변수 이름만 끌어 올려진다.


fn();

function fn() {

	if (course) {
		var course = 'develop';
		console.log(course);	//
	}
	console.log(course);	//
}

var course = 'design';

console.log(course);

function sumFn(num1, num2) {
	// 기대하는 데이터 유형을 감별하여 문제가 발생한 경우
	// 사용자에게 안내해줘야 한다. 유효성검사(Validation)
	if ( typeof num1 !== 'number' || typeof num2 !== 'number' ) {
		//console.error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
		// 오류 발생 시, 코드 중단
		throw new Error('전달된 인자 값은 숫자 유형이 아닙니다. 숫자 유형을 넣어주세요.');
	}
	// return 키워드는 함수를 종료, 값을 반환
	return num1 + num2;
}

// 반환 값이 없는 함수
function getWindowWidth() {
	var _window_width = window.innerWidth;
	console.log('창 크기의 가로 폭 길이 (너비, width):', _window_width);
}
// 반환 값이 있는 함수
function getWindowWidth() {
	return window.innerWidth;
}

// 함수 내부에 전달되는 인자들의 집합
// arguments: 유사배열(like Array Object)
// length 속성을 가짐, .push(), .pop() 배열 메소드는 가지고 있지 않음.
function sum2() {
	var sum = 0, idx = 0, l = arguments.length;

	while ( l > idx ) {
		if ( typeof arguments[idx] !== 'number') {
			throw new Error('전달된 인자값들은 모두 숫자 이어야 합니다.');
			return;
		}
		arguments[0] = ''; //설정도 가능.
		sum = sum + arguments[idx];
		idx++;
	}
	return sum;
}

var   boo = []
 		, num = []
 		, str = [];

function seperateArg() {

	for (var i = 0, l = arguments.length; l > i; i++) {
		switch (typeof arguments[i]) {
			case 'number' :
				num.push(arguments[i]);
				break;
			case 'boolean' :
				boo.push(arguments[i]);
				break;
			case 'string' :
				str.push(arguments[i]);
				break;
			default:
				console.error('뭔지 모르겠어요.');
				break
		}
	}
}

