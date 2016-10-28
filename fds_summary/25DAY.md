## JavaScript

### Strict Mode
`"use strict"; ` - 지시문 프롤로그<br>
: 지원하지 않는 브라우저는 문자열로 인식<br>
참고) https://msdn.microsoft.com/ko-kr/library/br230269(v=vs.94).aspx#rest

### 함수는 일급객체(First Class Object)
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

#### c. 함수 내부에서 **객체를 결과 값으로 반환**할 수 있습니다.
~~~js
function mixin(o) {
var mix_obj = {name: 'mix', age: 1};

for ( var prop in o ) {  
  mix_obj[prop] = o[prop]; // mix_obj와 o를 합치는 로직
}
return mix_obj; // 객체 반환
}
~~~

### 클로저 ( Closure )
#### - 클로저 (Closure)는 함수에서 반환된 함수를 실행하면 생성됩니다.
#### - 클로저는 자신을 탄생시킨 부모 함수의 스코프에 접근이 가능합니다.
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

### 자바스크립트 함수의 특징
> 어떤 데이터 유형도 전달 인자로 받을 수 있고, <br>
> 어떤 데이터 유형도 반환할 수 있다.<br>
> 이 과정에서 객체[함수, 배열, 객체]를 반환할 경우<br>
> {반환된 객체}가 함수의 감춰진 영역에 접근할 수 있다.<br>
> 이 부분을 사람들은 클로저(영역)라고 부른다.<br>

### IIFE 패턴
모던 자바스크립트에서의 모듈 패턴<br>
> 함수를 활용하여 언어 차원에서 지원하지 않았던 모듈을 구현<br>
> 일반 함수가 아닌, `IIFE 패턴`을 사용한 `즉시 실행 함수`<br>

~~~js
//아래 코드는 정상적으로 함수가 실행된다. 즉시!!!!
+function (){ console.log('IIFE Pattern'); }();
!function (){ console.log('IIFE Pattern'); }();
~function (){ console.log('IIFE Pattern'); }();

// 정체모를 위 코드 보다는 아래와 같은 유형으로 작성하길 권장!!
( function(){ console.log('IIFE Pattern'); }() ); // 권장!
( function(){ console.log('IIFE Pattern'); } )();
~~~

참고)
- [MDN 클로저](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
- https://hyunseob.github.io/2016/08/30/javascript-closure/
- http://yookeun.github.io/javascript/2015/01/27/javascript-closure/
- http://meetup.toast.com/posts/90
- [JavaScript 함수: 스코핑, 클로저](https://gamecodingschool.org/2015/06/19/javascript-%ED%95%A8%EC%88%98-%EC%8A%A4%EC%BD%94%ED%95%91-%ED%81%B4%EB%A1%9C%EC%A0%80/)
- [Javascript IIFE 이해하기](http://chanlee.github.io/2014/01/11/understand-javascript-iife/)
- [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)