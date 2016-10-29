## JavaScript

### ※ 데이터 형 변환
* 자바스크립트 언어는 자동으로 데이터 유형이 변경 > 이점이 자바스크립트의 약점.

### 1. 숫자 -> 문자

#### 방법 a. 숫자를 '' 로 감싼다.
#### 방법 b. 숫자 뒤에 빈 문자를 접합
```js
9 + ''; // "9" , 숫자 상수일 경우 예

// 숫자 상수를 복사한 변수일 경우 예
var n = 102;
console.log('n: ', n+''); // "102"
```

#### 방법 c. String() 함수를 사용.

> 첫글자가 대문자인 함수는 관례적으로 생성자(Constructor) 함수를 지칭한다.
> 비록 생성자 함수이나, 여기서는 일반 함수 방식으로 사용하여 숫자 데이터 값을
> 문자 데이터 값으로 변형한다.

```js
var k = 90120;

// 데이터 값 유형이 변경되었다.
k = String(k); // "90120"
```

#### 방법 d. toString() 

> {객체}.toString() 객체가 소유한 함수 유형의 속성을 특별히 "메소드(Method)"라고 부른다.<br>
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

### 2. 숫자 형 문자(숫자만 포함된) -> 숫자

#### 방법 a. -0 , *1 , /1 연산을 한다.
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

#### 방법 b. 숫자형 문자 앞에 + 기호를 붙인다.
```js 
var h = '34';
h = +h; // 은근~~~~ 많이 사용된다.
```

#### 방법 c. 숫자형 문자를 Number() 함수에 전달하여 처리한 결과는 숫자가 된다.
```js
var r = '3.141592';
r = Number(r);
```

### 3. 숫자와 단위(문자)를 포함한 문자(단위 유형) -> 숫자

> 단위를 제거하는 함수<br>
> window 전역 객체(Global Object)의 빌트인(내장, 네이티브) 메소드<br>
> window.parseInt('단위유형의문자', '반환진수')   // 정수 반환<br>
> window.parseFloat('단위유형의문자', '반환진수') // 실수 반환

```js
var font_size = '21.9px';

var parse_int   = window.parseInt(font_size, 10);   // 21
var parse_float = window.parseFloat(font_size, 10); // 21.9
```
*e.g)*
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

---
  
### HTML & CSS - Typography System
> 모듈러스케일(Modular Scale)을 이용하여 일정한 배율을 반영한 타이포 그래픽 시스템 설계

#### 가독성, 판독성
> 가독성 : 글을 수월하게 읽어 나갈 수 있는 정도.<br>
> 판독성 : 글자를 잘 파악할 수 있는 정도.

* 행간 > 어간 > 자간 순으로 간격이 커야 가독성이 좋다.
* 한글 12px 영문 9px 이하는 판독성이 떨어진다.
* 포토샵과 웹브라우져 기본 행간크기는 1.2(120%) 이지만 너무 좁아 가독성이 떨어지기 때문에 
  대부분 1.4 ~ * 1.8을 적용한다.
* 배경색, 전경색의 명도대비는 `4.5:1(24px, 18px bold의 경우는 3:1)`을 지켜줘서 접근성(명료성)을 고려한다.

#### 포토샵의 텍스트 자간 CSS적용
* Character 패널의 VA 값 나누기 1000 (ex. -50이면 -50/1000 = -0.05em)

#### 글자 크기 단위
* px : 고정값으로 사용이 쉬우나 Cross Brwosing 환경에서는 사용이 제한된다.
* em : 요소에 지정하는 글자 크기 단위로 부모 요소에서 지정한 글자 크기를 기준으로 배율을 조정한다. 계층이 복잡해지면 요소들(크기,행간,마진등등)을 계산하기가 까다로워 지며 관리도 어렵다.
* rem : HTML 문서의 root 요소인 에 지정된 크기를 기준으로 상대적인 값으로 사용자가 설정한 폰트 크기에 따라 사이트에 배치된 모든 구성 요소를 적절하게 설계 가능하다.

#### JavaScript를 이용한 동적 guide class 부여
```js
function assignGuideClass() {
  var body = document.body;
  var body_current_class = body.getAttribute('class');
  body.setAttribute('class', body_current_class + ' guide');
}
// 문서 클릭 시.
document.onclick = assignGuideClass;
```

#### placehold.it : 더미 이미지 사용
```html
<img src="http://placehold.it/210x210/000/fff/?text=don't+breath" alt="숨 쉬지마!">
```

#### 이미지 아래 빈 공간 제거
img 삽입 시 상단 또는 하단에 공백이 생긴다면 아래와 같이 처리.
```css
img {
  vertical-align: top;
}
```
