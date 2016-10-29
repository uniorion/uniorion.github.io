## JavaSscript

> 변수(Variable)에 값이 할당된다라는 것은<br>
> 값의 유형(Data Type)에 따라<br>
> 복사하거나, 참조(Reference)하게 된다.<br>

##### 1. 변수 선언
```js
var my_name; // 변수 선언 시, 기본적으로 undefined 값 할당
```

##### 2. 선언된 변수에 값 할당
```js
var current_state;
// 선언된 변수에 값을 할당
current_state = 200;
```

##### 3. 선언과 동시에 값 할당
```js
var current_state = 200;   // 숫자
var is_finished   = false; // 불리언
var container_el  = null;  // 비어 있다.
var my_name;               // 변수 선언만 하게 되면 undefined
```

#####4. var 키워드를 한 번만 사용하는 싱글톤(Singleton) 패턴
```js
var current_state = 200,   // 숫자
    is_finished   = false, // 불리언
    container_el  = null;  // 비어 있다.
```

---

## HTML & CSS
* img 요소에 인라인 스타일 적용
: 이미지 로딩이 완료되기 전, 미리 이미지 영역을 잡아 놓게 되어 사용자경험이 상승.

#### 가상 클래스와 가상 요소 (Pseudo Class VS Pseudo Element)
CSS2 에서는 가상 클래스나 가상 요소 모두 앞에 : 썼으나, CSS3 부터는 가상 요소 앞에는 ::<br>

가상 클래스 : `상태(Status)` 와 관련된 것
```css
:link     {}
:visited  {}
:hover    {}
:focus    {}
:active   {}
:lang(en) {}
```

가상 요소 : 가상으로 `요소` 를 추가
```css
::before       {}
::after        {}
::first-line   {}
::first-letter {}
::selection    {}
```

#### width, height 중 하나의 값에 다른 하나를 자동으로 비율 적용하는 방법
```css
img {
  width: auto;
  height: 100vh;
  vertical-align: top; /* 이미지 아래에 존재하는 알 수 없는 공간 제거 */
}
```
또는
```css
img {
  width: 50vw;
  height: auto;
}
```

#### font 속기형
* `font: (font-weight) (font-style) (font-variant) [font-size]/[line-height] [font-family];`
* `()` 는 생략가능. sans-serif는 적용한 폰트가 지원되지 않는 환경일 경우 `sans-serif` 계열(삐침이 없는 글씨체)로 대체

* repainting -reflow [참고](https://lists.w3.org/Archives/Public/public-html-ig-ko/2011Sep/att-0031/Reflow_____________________________Tip.pdf)