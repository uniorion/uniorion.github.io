## JavaScript

### BOM (브라우저 객체 모델)
* 브라우저를 구성하는 객체들
    - window {} : Global Object
    - window 객체에 종속된 하위 객체들
    - window.screen
    - window.location
    - window.history
    - window.navigator
    - window.document

##### window.screen
 : 사용자의 스크린에 관한 정보를 제공하는 객체
~~~js
var console_style     = 'color: #7045cf; font-weight: bold';
var screen            = global.screen;
var screen_width      = screen.width;
var screen_height     = screen.height;
var screen_resolution = screen_width + 'x' + screen_height;

console.log('사용자의 스크린 해상도는 %c' + screen_resolution, console_style);

// 실제 사용자의 가용(Avail) 가능한 스크린 해상도 구하기
var screen_avail_width      = screen.availWidth;
var screen_avail_height     = screen.availHeight;
var screen_avail_resolution = screen_avail_width + 'x' + screen_avail_height;

console.log('사용자의 가용 가능한 스크린 해상도는 %c' + screen_avail_resolution, console_style);
~~~

##### window.location
 : 웹 브라우저의 주소 창의 정보를 가지고 있는 객체<br>

##### window.history
 : 사용자가 현재 윈도우(window)에서 탐색한 페이지를 기억하는 객체<br>
 : 이전(back)/다음(forward)/특정(go) 페이지로 이동. length 속성을 가지고 있다.<br>

##### window.navigator
 : 웹 브라우저의 정보를 가진 객체<br>


##### window.document


### DOM (문서 객체 모델)