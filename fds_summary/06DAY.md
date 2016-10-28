## Javascript
  - 동작을 다루는 언어 (Action, Behavior)
  - 프론트엔드 환경에서는 꼭 HTML과 함께 사용되어야 함
  - 백엔드 환경에서는 Javascript 혼자 동작 가능 (notejs ,,)

### 1. 연산
  - 사칙연산 : `3 + 3;`
  - 문자 접합 :  `'this is ' + 'javascript';`

### 2. 변수(Variable) : 어떤 값을 기억하기 위한 메모리상의 공간.변할 수 있는 수.
```js
var x;  // var 키워드를 이용해 변수 'x'를 선언
        // 선언(정의)된 변수 x에 값(데이터)를 할당(대입) '=' 대입연산자
x = 10; //숫자(정수,  양의 정수)
```

### 3. 웹 브라우저 세상에는 콘솔이라고 불리는 객체(사물, object)가 살고 있어요.
  - 콘솔(console)아. 내가 원하는 데이터를 참조한 변수를 화면에 기록(log)해줘.
  - 콘솔.기록(변수);
  - `console.log(y);`

### 4. 그 외
  - javascript 는 가비지컬렉터가 알아서 메모리 관리.
  - var 키워드로 변수 정의가 꼭 필요하다.
  - 공백을 모두 문자로 인식하여 출력.

----

#### 테이블 작성
**table > caption > tr > th > td**

1. table의 [summary] 속성은 html5에서 비표준, ARIA 기술로 해결 가능하다.
  - '대한항공'은 ARIA 기술이 잘 적용된 사례.
  - 설명을 기술한 요소에 id 부여,  table의 [aria-describedby] 속성에 id를 연결.
```html
<table aria-describedby="hd-curture-project-table-summary">...</table>
<p
  class="readable-hidden"
  id="hd-curture-project-table-summary">
  현대카드 컬처프로젝트 24 시규어 로스 티켓 예매 정보를 확인하기 위한 7행 5열로 구성된 표입니다.
</p>
```

  - caption : 테이블에 대한 설명. 주로 화면에 보이지 않게 css처리
  - width:0 height:0이되면 스크린리더가 읽지못한다.
  - th [scope] 속성을 주어 행/열 의 정확한 제목을 부여해야 스크린리더가 셀 내용의 의미가 명확히 전달된다.
  - colspan : 수평으로 셀을 병합
  - rowspan : 수직으로 셀을 병합
 
#### 축약, 인용
  - abbr : 축약문에 title 속성으로 설명을 제공.
  - cursor: help 스타일로 축약어 임을 명시적으로 나타낸다.
  - 영어권의 브라우저는 대문자를 한 글자씩 읽지만, 한국의 리더기는 한 단어로 인식하여 읽는다
  - `lang='en'` 속성값을 하여 올바른 언어설정을 한다.

#### 가상클래스
: 이미 정의된 가상의 클래스를 요소에 적용한다는 의미를 가진다.
```css
a:link { color: #34c0ff; }
/* 방문한 상태 */
a:visited { color: #5f00ff; }
/* 호버 상태 */
a:hover { color: #fc0087; }
/* 포커스 상태 */
a:focus { outline: 3px solid #21ff73; }
 /* 활성화 상태 */
a:active { background: #ff0; }
```

#### 가상 요소
1. first-letter
2. before
3. after 
4. 그 외 등

#### **선택자는 중요하다. 공부를 매일매일!!**
  - a>b : a요소의 자식 요소 중 모든 b
  - a+b : a요소 다음에 오는 형제 요소 중 바로 인접한 하나의 b
  - a~b : a요소 다음에 오는 형제 요소 중 모든 b

---- 

#### 현대카드 테이블 코딩
  - input, button을 제외하고, font famiry는 상속됨.
  - `<th> scope=row` 행의 제목일 경우
  - 마크업 후 개발자tool 로 HTML 문법검사. 
  - 가급적 클래스를 주지않고 다양한 선택자를 활용하여 최대한 컴팩트하게 코딩하는 것이 좋다.
  - p:nth-child(n) : 자손 중 n번째 p요소 선택
  - p:nth-of-type(n) : p 자손요소 중 n번째 선택
  - :not(x) : x요소를 제외하고