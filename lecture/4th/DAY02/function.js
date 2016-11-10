
// 문서에서 각 컨토롤 (button, a)을 선택

var button, link, eventHandler;

button = document.querySelector("button");
link = document.querySelector("a");

// 변수 이름 공간에 함수 값(표현식, 무명함수) 참조
eventHandler = function () {
	console.log("call me");
};

// 함수 선언문
function eventHandler2() {
	console.log("call me");
}

button.onclick = eventHandler;
link.onmouseover = eventHandler;


// 함수 객체 생성
var fnObj = new Function('console.log("created function object.")'); // 보안에 취약

// 함수 표현식: 변수에 값으로 할당
var fnObjExp = function() {
    console.log("created function object.");
}

// 함수 선언식
function fnObjDec() {
    console.log("created function object.");
}

// ******** 배열 ***********
// 배열이 왜 필요한가?
// 변수는 하나의 데이터 값을 복사/참조
var member1 = '기중'; 
var member2 = '근희'; 
var member3 = '세진';

// 배열 데이터 유형은 여러 개 데이터 값을 집합 형태로 담을 수 있다.
// 그런 배열 데이터를 변수에 참조하게 되면 유용하게 자료들을 
// 집합 형태로 관리할 수 있다.
//var members = new Array("기중", "근희", "세진");
var members = new Array();
members[0] = '기중';
members[1] = '근희';
members[2] = '세진';
// members[200] = '지훈';		// 숫자 유형으로 배열 원소를 추가하는 경우 발생하는 문제!!!
members.push("지훈");
members.push("현주");

console.log("members:", members);
console.log("members[0]:", members[0]);
console.log("members[1]:", members[1]);
console.log("members[2]:", members[2]);

var navigation = {
	'makedId'	: 13202,
	'use' 		: 'Grobal Navigation Bar',
	'position': 'top',
	'items'		: [
								'home',
								'About',
								'Works',
								'Contact'	
							],
	'created'	: false,
	'makeSubMenu': function() {
		console.log('서브 메뉴를 생성');
	}
}