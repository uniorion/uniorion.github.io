
## DOM script 기초

#### 왜? 변수를 사용해야 하는가?
> 문서에서 원하는 객체를 찾아왔다면 힘들게 비용을 들여서 찾아 온 객체를 기억해두어야만<br> 
> 다시 사용할 때 비용을 추가적으로 지불하지 않을 수 있다.<br>
> 변수명은 명확하게 이해할 수 있도록 작명하고, 안되면 fullname을 주석으로 달아준다.

#### 1. 문서 객체를 찾아오는 방법 1. (단수, 1개)
```js
// id 속성으로 문서 객체를 찾는 방법
// 문서에서 id=you 요소를 찾는다.
var you = document.getElementById('you');
console.log('you:', you);
```

#### 2. 문서 객체를 찾아오는 방법 2. (복수, 여러 개 수집(Collection))
```js
// 요소(Element)의 이름으로 문서 객체들을 찾는 방법
// 여러 개의 <a> 요소들을 찾아 온다.
var links = document.getElementsByTagName('a');

// 찾아온(수집한) 문서 객체들의 목록을 Nodelist 라고 부른다.
// Nodelist 안에서 아이템(item)을 빼오려면 .item() 메소드를 사용해야 하나,
var link_1 = links.item(0);

// 실무(현업)에서는 메소드 보다는 아래와 같은 방법을 보다 많이 사용한다.
var link_2 = links[1];
```

---

## CSS 선택자
* HTML과 CSS의 분리가 필요합니다. ( 구조와 표현의 분리 ) www.zengarden.com 참고
* 여러개의 선택자를 묶어 공통된 스타일을 적용 > Gouping
* `* {style}` 성능이 저하. 특정 요소안의 `*`은 좋은 선택이 될 수 있다.
* JavaScript와 CSS는 대소문자를 구분하므로 주의
* `<p>`, `<address>` 요소는 내부에 div 요소를 포함할 수 없다.
* css파일 링크는 js링크보다 먼저 선언해야 한다.
* ie6,7,8 에서는 id로 요소를 선택하는것이 빠르지만 최신브라우저에서는 class로 선택해도 문제되지 않는다.

```css
클래스명1.클래스명2     //멀티클래스 선택자: 한 요소에 '클래스명1'과 '클래스명2' 모두 부여된 요소를 선택
클래스명1 .클래스명2    //자손선택자     : '클래스명1' 요소의 _자손_ 중 모든 '클래스명2' 요소를 선택
클래스명1 > 클래스명2   //자식선택자     : '클래스명1' 요소의 _자식_ 중 모든 '클래스명2' 요소를 선택
클래스명1 ~ 클래스명2   //형제선택자     : '클래스명1' 요소의 형제요소 중 모든 '클래스명2' 요소를 선택
클래스명1 + 클래스명2   //인접형제선택자  : '클래스명1' 요소와 바로 인접한 형제요소 '클래스명2'를 선택 

[속성]                : 해당 속성을 가진 모든 요소.
[속성="값"]            : 해당 속성 값을 가진 모든 요소.
[href^="http://"]   : href 값이 http:// 로 시작하는 모든 a요소
[href$=".psd"]      : href 값이 .psd로 끝나는 모든 요소
[title*="css"]      : title 값에 css 문자가 포함되는 모든 요소
[data-app|="fds"]   : 하이픈으로 구분된 항목 중 'fds'과 일치하는 값을 가진 요소
[data-app~="fds"]   : 공백으로 구분된 항목 중 'fds'과 일치하는 값을 가진 요소
```