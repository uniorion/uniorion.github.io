## JavaScript Core

* 스크립트 로드 위치에 따른 차이

> 외부 선언 방식으로 js를 로드하면, js가 모두 해석되기 전까지 html문서를 해석하지 않는다.<br>
> 따라서 렌더링 되지 않은 문서객체를 js에서 참조할 수 없다.

* `querySelector()` 메소드를 사용하면 어떤 CSS선택자(명시적인)로도 객체를 참조할 수 있다. 
```js
var btn_inc  = document.querySelector(".button-increase-font-size");
var btn_dec  = document.querySelector(".button-decrease-font-size");
var txt_area = document.querySelector(".demo-text-area");
```

---

## HTML & CSS

* WCAG 지침
    - 인식의 용이
    - 운용의 용이
    - 이해의 용이
    - 견고성 : 기술에 대한 이해

* div 요소는 의미가 없는 요소이나 Aria 기법으로 역할을 명시할 수 있다.
```html
<div class="button-group" role="group">
<button aria-label="글자 크기 키움">+</button>    <!-- aria-label=리더기가 읽어줌 -->
```

#### # DOCTYPE
* html 문서의 표준을 정의한다. (렌더링 방식을 결정)
* 선언이 없으면 비표준모드로 렌더링 한다.
* DOCTYPE 선언 이전에 기타 text가 있으면 IE는 비표준모드로 동작한다.

#### # `<meta>` 
* `<title>` 기준으로 먼저 선언된 것은 서버 설정값과 동등한 효력을 가짐. 
: 서버 값이 우선, IE만 meta값 우선

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
 
#### # Outline Algorithm
* h1요소는 문서에서 한 번만 쓸 수 있으나 HTML5 부터는 `<section>` 내에서 제한없다.
* 명시적으로 계층구조를 선언하지 않으면 암묵적으로 계층이 생긴다.

#### # 크로스브라우징 
* IE 하위버전에 대응하는 css 외부로딩 기법
```html
<!-- 각 버전의 IE 에서만 해석하는 조건문 -->
<!--[if IE 9]> <link rel="stylesheet" href="css/ie/v9.css"> <![endif]-->
<!--[if IE 8]> <link rel="stylesheet" href="css/ie/v8.css"> <![endif]-->
<!--[if IE 7]> <link rel="stylesheet" href="css/ie/v7.css"> <![endif]-->
<!--[if IE 6]> <link rel="stylesheet" href="css/ie/v6.css"> <![endif]-->

<!-- 8버전보다 낮은(이하) IE에서 처리되는 위한 조건부 주석문 -->
<!--[if lt IE 9]> <link rel="stylesheet" href="css/ie/v9.css"> <![endif]-->
<!--[if lte IE 8]> <link rel="stylesheet" href="css/ie/v8.css"> <![endif]-->

<!-- IE9 이하 브라우저에서는 해석하지 않는(부정) 조건부 주석문 -->
<!--[if !IE]><!--> <link rel="stylesheet" href="css/modern.css"> <!--<![endif]-->
```

* 핵 : 좋지 않은 방법.
* 필터링 : 권장
```html
<!--[if !IE]> <!--> <!-- 6789는 해석하지 않음 -->
<html lang="en">
<!-- <![endif]-->
<!--[if IE 6]> <html lang="en" class="lt-ie10 lt-ie9 lt-ie8 ie6"> <![endif]-->
<!--[if IE 7]> <html lang="en" class="lt-ie10 lt-ie9 lt-ie8 ie7"> <![endif]-->
<!--[if IE 8]> <html lang="en" class="lt-ie10 lt-ie9 ie8 "> <![endif]-->
<!--[if IE 9]> <html lang="en" class="lt-ie10 lt-ie9"> <![endif]-->
<head>
```

```css
.ie8 body {
    background: #000;
}
```

