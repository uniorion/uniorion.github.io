## JavaScript

#### 데이터 값(복사, 참조)
#### 원시데이터 값 ( 복사가 되는 값 )
    + undefined
    + null
    + 2016
    + 'Front-End Develop School'
    + true

#### 참조(Reverence) 가 되는 데이터는 모두 객체(Object)
    + Plain Object '{}'
    + Function Object 'function(){}'
    + Array Object '[]'

#### DOM(Document Object Model) API
* 선택(Selection)
```js
var fds = document.getElementById('fds'); //문서.가져온다id값('id값');
```

* 요소(ELEMENT_NODE)의 이름(NodeName)으로부터 문서객체를 가져오는 방법;
```js
var links = document.getElementsByTagName('a');
```

* 문서 객체 조작(Manipulation)
    - 문서객체.style 속성
    - CSS 속성을 자바스크립트로 제어하는 방법
    - 인라인 속성 style > CSS 파일에 분리된 CSS 코드 

#### 객체는 직접적으로 실존할 수 없다.
 > 누군가가 생성해야만 객체가 신존하게 된다.
 > 생성자(Constructor) -> 실체화된 객체(Instance Object)
 > 마치 원래부터 존재하던 것처럼 사용
 
#### 정보유형 (Data Type)
* 숫자형 (Number) : 36, -9, 3.141592, 0.07
    - 8진수 : 숫자앞에 '0'
    - 16진수 : 숫자앞에 '0x'

* 문자형 : "자바스크립트 언어", 'JavaScrpt !!!'
    - 문자 데이터 간에는 산술(사칙)연산이 이루어지지 않는다.
    - 하지만 문자 간 접합(용접)은 + 기호로 가능하다.
    - '\n' 개행문자
    -  \", \' 이스케이핑 처리하여 화면에 노출  

* 논리형(Boolean) : 0 이외의 값은 모두 true.
    - 형변환 Boolean()
    - 정의안됨 : undefined > 값이 할당(대입)되지 않았다.
    - 비어있음 : null
* undefined
* null

```js
// 이벤트 바인딩 Event Binding
// 이벤트 속성 Event Property <-> 함수 Function(이벤트 핸들러)
// 문서객체.이벤트속성 = 이벤트핸들러;
document.onclick; // null
document.coclick = function() {
    console.log('문서객체 클릭');
    document.onclock = null;
};
```

---

## 테스트 리뷰
1. 더이상 사용하면 안되는, 권장되지 않는 요소.
    - <i>, <b>, <small> : html5에서 부활
    - <u>, <center> : css로 구현가능. 

2. <img> 요소에 <map>요소를 연결하려면 어떤 속성? usemap
```html
<img src="" alt="" usemap="#olleh-service-map">
<map name="#olleh-service-map">
    <area shape="" coords="x1,y1,x2,y2" href="" logndesc="" title="" alt="">
</map>
```
* longdesc 속성 : 긴 설명이 있을경우 url값을 주어 내용을 읽어줌. 접근성
* alt 속성에는 text제한이 없으나, 리더기에서 제한이 있을 수 있으므로 logndesc 사용을 권장.

3. <meta http-equiv="X-UA-Compatible" content="IE=Edge">
* 브라우저 해석 : title 보다 먼저
* 익스플로어가 최신버전으로 문서를 렌더링 하도록. 없으면 ie7로 렌더링

4. <area> 요소에 사용가능한 도형
* rectangle, circle, polygon

5. <li>요소는 부모 요소인 <ul>혹은 <ol> 요소로부터 모든 스타일을 상속받지 않는다.
> 주로 공간에 관한 스타일은 상속되지 않는다.

6. HTML 표 작성시 사용되는 속성이 아닌것
* headers : 표를 읽는 방향을 id를 사용해 지정할 수 있음. 표를 읽기 어려운경우에 사용.
* <col> : column에 일괄적으로 스타일을 줄 때 사용. 
```html
<table id="currency-table">
    <caption>currency summary</caption>
    <col>
    <colgroup></colgroup>
    <!-- <col> -->
    <col>
    <tr>
        <th scope="col">cell header</th>
        <th scope="col">cell header</th>
        <th scope="col">cell header</th>
        <th scope="col">cell header</th>
    </tr>
    <tr>
        <td>cell data</td>
        <td>cell data</td>
        <td headers="id1 id2 id3">cell data</td>
        <td>cell data</td>
    </tr>
</table>
```

---

### Background
* 속성 값을 설정할 때 공백을 포함한다면 반드시 ""을 넣어야 한다.
* 색상, 이미지, 위치, 반복,
* 콘텐츠이미지 vs 배경이미지 
    - 늘 같은자리, 같은 이미지일 경우 > 배경이미지, 스프라이트 배경이미지

#### #color
- keyword, hex-code, RGB, RGBA, hsla
- transparent
```css
.some {
    border: 2px solid currentColor;  
    /* currentColor 현재 색을 의미, 변수와 같음, IE9+ */
    text-align: justify;  /* 양쪽정렬 : 사용시 주의가 요구 */
    text-align-last: center  /* 마지막 줄의 정렬 위치 : 크로스 브라우징 */
    color: #30120f;
}
```
- repeat, repeat-x, repeat-y, no-repeat

#### 배경이미지를 고정하는 방법 중
- position:fixed 보다 attachment:fixed 를 사용하는것이<br>
  성능에 많은 향상을 가져올 수 있다.

#### 속기형 

#### #background-clip
* 백그라운드가 적용될 박스 범위를 지정 : padding-box, content-box

#### #background-origin 
