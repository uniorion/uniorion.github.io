## Javascript 반복문

ES 3
~~~
- while 
- do { ... } while( condition )
- for ( ; ; ) { ... }
- for ( var property in object ) { ... }
~~~
ES 5
~~~
- [].forEach(function(item, index){ ... });
- [].map(function(item, index){ ... });
~~~
ES 6 (ECMA Script 2015)
~~~
- for ( var [key, value] of [Array, Object, Map] ) { ... }
~~~
<br>
### for ~ in 문
~~~js
var fds = {}; // 객체 리터럴(값)

fds.name = 'Front-End Develop SCHOOL';
// 두 표기법은 객체의 속성에 접근하는 방법으로 역할 상의 차이는 없다.
// 다만 각괄호([]) 표기법에서는 내부의 속성 이름을 변수로 설정할 수 있다.
// 그런 이유로 for ~ in 문 내부에서는 각괄호 표기법을 사용한다.
fds['name'] = fds.name;

// '속성' in 객체(`{}`)
console.log( fds['name'], 'name' in fds );

for ( var prop in fds ) {
  console.log('prop:', prop); // name
  console.log('fds[prop]:', fds[prop]); // 'Front-End Develop SCHOOL'
  console.log('fds[prop] === fds.name:', fds.name); // 'Front-End Develop SCHOOL'
}
~~~
<br>
### 함수 ( Function )
* 함수 선언식<br>
`function fnDeclaration() { ... }`
* 함수 표현식<br>
`var fnExpression = function(){ ... };`
<br>
### 전역(Global Scope) VS 지역(Local Scope)
* 웹 브라우저(클라이언트, 프론트엔드) 환경에서 전역 객체라 함은 `window {}` 객체를 말한다.
* 전역 변수, 함수는 웹 브라우저 환경에서 전역 객체인 window {} 객체의 속성이다.
~~~js
var coffee = '아메리카노'; // window.coffee 속성과 동일
console.log(coffee === window.coffee); // true
~~~

* 전역 변수, 전역 함수에서의 this는 window 객체를 가르킨다.
~~~js
// 전역 함수 표현식
var globalFunction = function() {
  console.log('this:', this);  
};

globalFunction();
// 위 함수의 실행은 아래 코드와 동일하다. 결국 함수를 실행시킨 주체는
// 전역 객체인 window 이므로 함수 내부의 this는 window를 가리킨다.
window.globalFunction();

// globalFunction 함수는 전역 함수로 widnow 객체의 속성이지만...
// 다른 누군가가 이 함수를 빌려 사용할 수 있다.
document.onclick = globalFunction;  // 여기서 this 는 document를 가리키도록 변경 됨.
~~~

* if, else, while, for, switch 구문에서의 블록문은 별도의 지역이 생성되지 않는다.<br>
**=> 오로지 함수(function) 에서만 지역이 생성된다.**
~~~js
var scope_variable = '전역 변수';
console.log(scope_variable);                // '전역 변수'
 
function createLocalScope() {
  // 지역 변수
  var scope_variable = '함수 내부 지역 변수';   
  console.log(scope_variable);              // '함수 내부 지역 변수'
}
// 함수 실행
createLocalScope();
console.log(scope_variable);                // '전역 변수'
~~~
<br>
### 스코프 체인
> 유효 범위를 나타내는 스코프가 [[Scope]] 프로퍼티로 각 함수 객체 내에서 <br>
> 연결리스트 형식으로 관리되는데 이를 "스코프 체인" 이라고 한다.<br>
참고) http://programmer-seva.tistory.com/36 <br>
<br>
### 호이스트(Hoist) 현상
> 어떤 영역에서 함수 또는 변수 선언문이 영역의 최상단으로 끌어 올려지는 현상.
#### 현상 1. function 선언문의 몸체(body)가 통째로 끌어 올려진다.
#### 현상 2. var 선언문에서 할당된 값이 아닌, 변수 이름만 끌어 올려진다.

~~~ js
function understandingHoist() {
  // 독립된 공간(영역, scope)
  goKingdom();
  var king = ‘왕’;
  var goKingdom = function() { ... };
  awayKingdom();
  function awayKingdom() { ... }
}

// 위의 함수 지역에서 아래와 같이 호이스팅이 일어난다.

function understandingHoist() {
  // 독립된 공간(영역, scope)
  function awayKingdom() { ... } // 함수 선언문은 상단으로 

  var king;      // undefined    // 변수 선언부만 상단으로
  var goKingdom; // undefined    // 변수 선언부만 상단으로

  goKingdom();   // ERROR!!!
  king = ‘왕’;
  goKingdom = function() { ... };
  awayKingdom(); // 정상 실행
}
~~~
<br>
### Arguments
* arguments는 유사 배열(like Array Object)<br>
  : .length 속성을 가짐, .push(), .pop() 배열 메소드는 가지고 있지 않음.
* 값 설정도 가능 > `arguments[0] = '';`
<br>
### 전역에 정의된 전역 함수
~~~js
// 전역 함수 getName은 결과적으로 window 객체의 getName 속성이다.
// 속성인데 값의 유형이 함수 객체이므로 이를 특별하게 메소드라 부른다.
function getName() {
  return this.name;
}
console.log(getName === window.getName); // true

// 전역 함수 실행
console.log( getName() );           // this === window {}
console.log( window.getName() );    // this === window {}

// 사용자 정의 객체
var iPhone = {
  'name': '아이폰 7',
  'getName': getName
};

// 참조한 객체에 따라 this 가 변경된다.
console.log( iPhone.getName() );     // this === iPhone {}
~~~
