## JavaScript

### 함수(Function)
* 함수 리터럴 표현식, 변수에 `참조`<br>
`var myFn = function() {};`

* onmouseover, onmouseout 보다는<br> 
__onmouseenter, onmouseleave__ 사용 권장.

* 객체(Object)의 프로퍼티(변수)에 함수 참조<br>
`obj.onclick = function() {};`

* 함수(Function), 변수에 참조<br>
`var myFn = new Function();`

```js
// 함수 객체 생성 (권장 X)
var fnObj = new Function('console.log("created function object.")');

// 함수 표현식: 변수에 값으로 할당 (권장)
// 아무 곳에나 정의하면 오류 발생
var fnObjExp = function() {
    console.log("created function object.");
}

// 함수 선언식 (권장) 
// ※ 아무 곳에서나 정의하지 말 것! 
//    영역의 상단에 정의하는 것을 권장.
function fnObjDec() {
    console.log("created function object.");
}
```


### 배열(Array)
* 변수에 담을 수 있는 값은 하나이기 때문에 여러개의 값을 담을 수 있는 배열을 사용.
* 배열은 객체, 변수에 할당하면 변수는 이 객체를 참조하게 된다.

> 배열 선언

```js
// 배열 객체 생성
var arr = new Array();  // 권장 X
var arr = [];           // 배열 리터럴 표현식 ( 권장 )

var members = ["기중", "근희"];
members[0] = '기중';
members[1] = '근희';

members.push('세진');     // 배열에 새 원소를 추가
```
* 배열에 연관배열(속성:값) 형태로 원소를 추가 하지 말것!

* 유사배열
: 문서객체모델(DOM)의 노드리스트(node List)는 배열과 흡사해보이나, 배열은 아니다.<br>
```js
// 다음은 NODE LIST를 반환, 배열이 아니다!
document.querySelectorAll('body *');
document.getElementsByTagName('link');
>> ['link', 'link']
```

### 객체
* undefined, null은 객체가 아니다.

myObj.property = data;
객체.프로퍼티 에 data 추가


---

## HTML & CSS

### RWD(Responsive Web Design) 반응형 웹 디자인
    - AWD (Adaptive Web Design)
    - 전형적인 디자인 프로세스 (직렬)이 아닌, 시대가 변한 것처럼 디자인 프로세스도 변해야 한다. (병렬)
    - 우리가 만들어야 할 서비스를 이루는 콘텐츠와 컨텍스트에 관한 이야기이다.
    - 기술의 발전은 디자인 바운더리를 변경시켰다.
    - 동일한 콘텐츠를 다른 모양에 담을 뿐. >> one web
> 우리가 할일은 미래 친화적인 디자인 생태계를 만드는 것이다.

* RWD + AWD = 하이브리드 
* 루크 로 블루 스키 : 모바일 우선주의

#### # 무엇을 고려하고, 알아야 할까?
1. 콘텐츠 전략
2. 유연한 그리드 레이아웃
3. 유연한 이미지/미디어
    - RWD vs AWD 선택
4. 디바이스 픽셀 밀도
5. 중단점/ 미디어 쿼리
    - 중단점 설계 <= 통계, 사용자 심리 파악, 사용 패턴 등을 근거로
    - e.g) Google RWD breakpoint

#### 1. 콘텐츠 전략
* 콘텐츠 구성 : 다양하게 변화되는 가로 폭과 해상도에 최적의 경험을 제공할 수 있는 무용술이 필요로 한다.
* 콘텐츠 쌓임 : 4-3-2-1 제작하는것은 간단하지만, 1번이 가장 중요하지 않을 수 있다.
* 콘텐츠 순서 : 우선적으로 보여야할 것이 먼저 나와야 한다.
* 콘텐츠 맞물림 : 상황에 따라서는 순서가 뒤섞이는 구조로 보여질 경우도 있다.
* 유연한 그리드 레이아웃 : 

#### # 플렉시블 박스 
* 정확한 제단이 어려운 단점이 있다.
* https://www.w3.org/TR/css-flexbox-1/ [https://www.w3.org/TR/css-flexbox-1/]
* flex 요소는 중첩될 수 있다. 
* 속성 하나로 박스 배치가 자유롭다.

---

### 유연한 이미지 실습

> 콘텐츠 이미지일 경우

```css
.fluid img,
img.rwd-img {
  width: 100%;
  height: auto;
}
```


> 배경 이미지일 경우

```html
<div role="image" class="maestro rwd-bg" aria-label="전설적인 작곡가"></div>
.fluid .rwd-bg {
  width: 100%;
  height: 0;
  background-size: cover;
}
.maestro {
  background: url ("...") no-repeat center;
  padding-bottom: 71.08% /* 543/740(세로/가로비율) X 100% */
}
```

html에 클래스값 maestro과 rwd-bg를 가진 div 요소를 생성하고 배경에 이미지를 삽입, 원래 이미지의 세로/가로 비율에 맞게 % 값을 설정해 줌

> 재단 이미지 : 콘텐츠이미지를 포함하는 컨테이너 요소의 폭에 맞춰 크기가 동적으로 잘려서 보여지는

```html
.crop-img{
  width: 100%;
  height: 100vh;
  background: url( ) center top;
  background-size: cover;
}
```
