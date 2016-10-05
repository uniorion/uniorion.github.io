## JavaScript

### 데이터 형 변환
* 자바스크립트 언어는 자동으로 데이터 유형이 변경 > 이점이 자바스크립트의 약점.

1. 문자(숫자 같은) -> 숫자
* 방법 a. 숫자를 '' 로 감싼다.

* 방법 b. 숫자 뒤에 빈 문자를 접합
```js
9 + ''; // "9" , 숫자 상수일 경우 예

// 숫자 상수를 복사한 변수일 경우 예
var n = 102;
console.log('n+""', n+''); // "102"
```

* 방법 c. String() 함수를 사용.

> 첫글자가 대문자인 함수는 관례적으로 생성자(Constructor) 함수를 지칭한다.
> 비록 생성자 함수이나, 여기서는 일반 함수 방식으로 사용하여 숫자 데이터 값을
> 문자 데이터 값으로 변형한다.

```js
var k = 90120;

// 데이터 값 유형이 변경되었다.
k = String(k); // "90120"
```

* 방법 d. toString() 

> {객체}.toString() 객체가 소유한 함수 유형의 속성을 특별히 "메소드(Method)"라고 부른다.
> 자바스크립트의 모든 객체는 .toString() 메소드를 사용할 수 있다.

```js
var m = 9090;
m = m.toString(); // 숫자 상수 값에 불과한 데이터를 마치 객체인 것처럼 작동하도록 만들어 준다.

// 단, 숫자 상수 값의 경우 바로 .toString() 메소드를 사용할 수 없다.
// 아래 코드는 오류를 발생시킨다.
8080.toString(); // Uncaught SyntaxError: Invalid or unexpected token

// 하지만 이 문제는 이해할 수 없는 다음과 같은 방법으로 문법 오류 해결이 가능하다.
8080 .toString();  // 사용하지 않는 것이 좋다.
8080..toString();  // 사용하지 않는 것이 좋다.
(8080).toString(); // ※ 빈번하게 사용된다.

// 자바스크립트 언어에서 객체가 아닌 것들은 null, undefined 이다.
// 객체가 아니기 때문에 속성(메소드 같은)이 존재하지 않는다.
// 하여 다음과 같은 코드는 오류를 발생시킨다.
null.toString();      // Uncaught TypeError: Cannot read property 'toString' of null
undefined.toString(); // Uncaught TypeError: Cannot read property 'toString' of undefined
```

2. 숫자 형 문자(숫자만 포함된) -> 숫자
* 방법 a. -0 , *1 , /1 연산을 한다.
```js
var u = '90231'; // 숫자 형 문자
console.log('u - 0:', u - 0); // 90231
console.log('u * 1:', u * 1); // 90231
console.log('u / 1:', u / 1); // 90231

var uu = '12341em'; // 문자
console.log('uu - 0:', uu - 0); // NaN: Not a Number '숫자가 아니다', 부정

// NaN은 숫자가 아니라고 부르짓지만, 실상 그는 숫자이다.
console.log('typeof NaN:', typeof NaN);
```

* 방법 b. 숫자형 문자 앞에 + 기호를 붙인다.
```js 
var h = '34';
h = +h; // 은근~~~~ 많이 사용된다.
```

* 방법 c. 숫자형 문자를 Number() 함수에 전달하여 처리한 결과는 숫자가 된다.
```js
var r = '3.141592';
r = Number(r);
```

3. 숫자와 단위(문자)를 포함한 문자(단위 유형) -> 숫자

> 단위를 제거하는 함수
> window 전역 객체(Global Object)의 빌트인(내장, 네이티브) 메소드
> window.parseInt('단위유형의문자', '반환진수')   // 정수 반환
> window.parseFloat('단위유형의문자', '반환진수') // 실수 반환

```js
var font_size = '21.9px';

var parse_int   = window.parseInt(font_size, 10);   // 21
var parse_float = window.parseFloat(font_size, 10); // 21.9
```
e.g)
```js
// 문서에서 id 속성 값이 'target'인 요소를 가져와 변수에 참조한다.
var target_el = document.getElementById('target');
console.log('target_el:', target_el);

// 변수 target_el에 참조된 문서 객체의 style 속성을 사용하여 fontSize 값을 가져와 변수에 복사한다.
var target_el_font_size = target_el.style.fontSize;

// 문서 객체의 style 속성을 통해 가져올 수 있는 값은 인라인 스타일 속성 뿐이다.
// 하여 백엔드 개발단에서 인라인 스타일 속성을 임의로 붙이는 이유가 이것에 있다.
console.log('target_el_font_size:', target_el_font_size);

// 하지만 style 속성을 사용하지 않고 CSS 문서의 스타일 값을 가져오는 방법을
// DOM API에서는 제공한다. 이 방법을 사용하면 굳이 인라인 스타일을 추가하지 않아도 된다.

// 표준 방법 W3C, IE 9+
// window.getComputedStyle({문서객체}).fontSize
var st_font_size = window.getComputedStyle(target_el).fontSize;
console.log('st_font_size:', st_font_size);     // 'px' 포함하여 반환
var convert_font_size = window.parseInt(st_font_size, 10);  // 'px' 제거 

// 비 표준 방법 for Microsift IE
// {문서객체}.currentStyle.fontSize
var nst_font_size = target_el.currentStyle.fontSize;
console.log('nst_font_size:', nst_font_size);
```
