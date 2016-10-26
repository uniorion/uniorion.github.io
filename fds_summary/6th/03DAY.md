## JavaScript

### Strict Mode
`"use strict"; ` - 지시문 프롤로그<br>
: 지원하지 않는 브라우저는 문자열로 인식<br>
참고) https://msdn.microsoft.com/ko-kr/library/br230269(v=vs.94).aspx#rest

### 클로저 ( Closure )
※ 함수는 일급객체(First Class Object)
##### a. 함수 내부에 **함수를 인자로 전달**할 수 있습니다. (주로 callback 패턴에 사용)
~~~js
// 자바스크립트 함수를 'First Class Object'라고 부르는 이유 중 하나.
function localScope(callback) {

    var is_callback = typeof callback === 'function';
    // 논리 연산자를 사용한 조건 처리
    is_callback && callback();
}
// 함수 인자로 함수를 전달
localScope(fucntion() {
    console.log('localScope 함수의 코드가 모두 실행된 다음 전달된 함수 실행');
});
~~~

##### b. 함수 내부에서 **함수를 결과 값으로 반환** 할 수 있습니다. (반환함수)
~~~js
function returnFunction(data) {
    var a = data[0];
    var b = data[1];
    var c = function(){ return a + b; };
    return c;
}

var sum = returnFunction( [10, 20] );

console.log( sum );     // 30
console.log( sum() );   // undefined
~~~

#### 클로저 (Closure)는 함수에서 반환된 함수를 실행하면 생성됩니다.
#### 클로저는 자신을 탄생시킨 부모 함수의 스코프에 접근이 가능합니다.
~~~js
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
~~~

#### c. 함수 내부에서 **객체를 결과 값으로 반환**할 수 있습니다.

