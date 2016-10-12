## Javascript

* Array, Function, Object 형은 모두 참조가 가능한 객체이다. 
* Object 는 legnth 속성을 가지지 않는다. 

### 정보분석 (Comparative Data)

#### 1. `typeof | typeof() (키워드)`
typeof는 함수가 아니라, 뒤에나오는 데이터 유형을 감지하여 감지된 데이터 유형 값을 문자열로 반환한다.
```js
// 싱글 'var' 패턴(single 'var' pattern)
var num = 102,
    str = 'typeof는 함수가 아니다.';

console.log("num 변수에 복사된 데이터 유형:", typeof num); // => number  
console.log("str 변수에 복사된 데이터 유형:", typeof str); // => string  
```

만약 감지하고자 하는 데이터 유형이 2개 이상이라면 _괄호()를 사용하여 데이터를 묶어서 체크_ 해야 한다.
```js
console.log( typeof num + str );    // 8 + '' => 8 
console.log( typeof (num + str) );  // string
```

array, object, null 모두 object 를 반환하므로 typeof 로 구분할 수 없다.
```js
var arr = [num, boo, fnc],
    obj = {"number_type": num, "boolean": boo };

console.log("arr 데이터 유형:", typeof arr);
console.log("obj 데이터 유형:", typeof obj);
console.log("null 데이터 유형:", typeof null);
```


#### 2. `instanceof (키워드)`
* instance 란?
    - 실체화된(생성된) 객체
    - 생성된 객체의 모체(클래스(Class), 프로토타입(prototype))
    - 설계가 바뀌면 인스턴스도 바뀐다.
```js
// 인트턴스 instanseof 원형(모체)  => '인스턴스' 는 '원형'으로 생성된 객체인가
// return BOOLEAN {true, false
console.log( 'obj instanceof Object:'   , obj instanceof Object);   // true
console.log( 'arr instanceof Array:'    , arr instanceof Array);    // true
console.log( 'arr instanceof Object:'   , arr instanceof Object);   // true
console.log( 'fnc instanceof Function:' , fnc instanceof Function); // true
```

* 원시데이터 유형 > 객체인것처럼 메소드를 지원해주지만 객체가 아니다.
```js
// 원시 데이터 유형은 실상 객체가 아닌, 값이다.
// 자바스크립트 엔진이 원시 데이터 유형(null, undefined 제외)의 값을 마치 객체인 것처럼 사용할 수 있게 제공하는 것일뿐.
console.log( 'num instanceof Number:', num instanceof Number);
console.log( 'str instanceof String:', str instanceof String);
console.log( 'boo instanceof Boolean:', boo instanceof Boolean);
```


#### 3. `constructor (속성)`
* 자바스크립트 객체라면 모두 가지고 있는 속성으로 자신을 생성한 생성자를 가리켜서 알려준다. 
* 객체에 대해서는 정확한 값을 반환하지만, 아래와 같이 null, undefined 은 에러를 발생한다.
```js
// 에러 발생
console.log( "null.constructor : ", null.constructor );
console.log( "undefined.constructor : ",  undefined.constructor ); 
```

<br>
> 결국, 자바스크립트는 올바르게 데이터타입을 체크하는 기능을 제공하지 않는다.
<br>

#### 4. `isType() (사용자정의)`
없는건 만들어 쓰자!
```js
// 언어 차원에서 지원되지 않는 사용자 정의 함수
// isType() 유틸리티 헬퍼 함수
// 객체가 아닌 유형도 검증이 가능 
function isType(data) {
    return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}
```

<br>
> 참고서적 : _자바스크립트 + jQuery 완전정복 스터디 - 김춘경 저_
 

---

## CSS

### 스타일 초기화 모듈

#### # reset.css [http://meyerweb.com/eric/tools/css/reset/]
- 비표준 또는 마크업에서 사용하지 않는 요소 제거
- 성능상 좋지 않은 코드 제거

#### # normalize.css [https://necolas.github.io/normalize.css/]
- 브라우저 사이의 간극을 줄이는 목적으로 제작됨.
- /*! 주석문 */ 은 삭제하지 않는다. 
- reset.css 는 오래되서 현재와 맞지 않는다.
```css
-ms-text-size-adjust: 100%; /* 3 */
-webkit-text-size-adjust: 100%; /* 3 */
```

#### # ress.css
- normailize를 에서 확장한 모듈

---

### Crop Image
* .webp 포맷 - 구글에서 만듬 용량이 가볍고, 퀄리티가 좋으나 지원하는 브라우저가 적다.

재사용을 위한 모듈 내용은 수정하지 않고, 별도의 파일에서 커스텀 스타일을 준다.<br>
- 모듈내에서 너무 많은 스타일(제약)을 두면, 재사용성이 떨어진다.
```css
.page.container {
    min-width: 960px;
    max-width: 1380px;
}
```

calc 내장함수를 사용하여 퍼센트 계산 
```css
{ padding-bottom: 50%;
  padding-bottom: calc(350/700*100%); // ie는 10+ 이상 지원 }
```

문서에서 키보드이벤트 연결하여 'show-grid' 토글하기
```js
// function toggleGrid()
function toggleGrid() {
  var _container = document.querySelector('.container');

  // 있으면?
  if ( _container.classList.contains('show-grid')  ) {
    _container.classList.remove('show-grid');
  }
  // 없으면?
  else {
    _container.classList.add('show-grid');
  }
}
// [shift+g] 키 감지하여 toggleGrid() 실행
document.onkeydown = function(event) {
    if ( event.shiftKey && (event.keyCode === 71) ) {
      toggleGrid();
    }
}
```


