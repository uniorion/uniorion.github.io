# JavaScript

### 동등비교 연산자의 문제점
> "" == "0"         // false
> 0 == ""           // true
> 0 == "0"          // true
> false == "false"  // false
> false == "0"      // true
> null == undefined // true

**결론은 엄격한 비교(===)를 사용해라!**

### 삼항연산자
```js
true ? console.log('this is 참!') : console.log('this is 거짓!');

// 다중 삼항 조건식
var condition = 'ramos';
condition === 'hesus' ? 
    console.log('He is hesus!') :
    condition === 'Jeus' ? 
        console.log('He is Jeus!') :
        console.log('...........');

// 한 줄로 작성할 경우, 사람이 읽고 이해하기 쉽지 않다.
// 하지만 웹 서비스로 배포할 때는 코드를 압축하여 성능을 향상 시켜야 한다.
```

### 변수 초기값 할당 시 자주 쓰이는 구문.
```js
function getSomeMoney( money ) {
    if ( money !== 0 ) {
        money = money || 100;
    }
    // if ( typeof money !== 'number' ) { console.error('숫자값을 전달해줘!'); } 
    // if ( typeof money !== 'number' ) { throw new Error('숫자값을 전달해줘!'); } 
    return '네가 원하는 돈의 양은 ' + money + '구나! 내가 줄거 같아?';
}

console.log('------------------------------------------------');

var condition = true;
var excuteFn = function() { console.log('condition is ture.') };

condition && excuteFn();

if ( condition ) {
    excuteFn();
}

condition || excuteFn();

if ( !condition ) {
    excuteFn();
}

console.log('------------------------------------------------');

// 논리 연산자를 사용한 조건문이 자주 사용되는 경우는
// 변수에 값을 할당할 때 바로 조건 처리된 결과를 할당(복사 또는 참조) 받기 위해서이다.
var viewport_width = window.innerWidth || document.docuementElement.clientWidth || document.body.clientWidth;

// 위, 아래 구문은 동일한 결과를 가져온다.
var viewport_width;

if ( window.innerWidth ) {
    viewport_width = window.innerWidth;
} else if ( document.docuementElement.clientWidth ) {
    viewport_width = document.docuementElement.clientWidth;
} else {
    viewport_width = document.body.clientWidth;
}
```
 
### switch - case 문
```js
var members = ['헐크', '아이어맨', '캡틴아메리카', '토르'];

switch ( members[3] ) {
    case '헐크' :
        console.log('헐크');
        break;
    case '아이어맨' :
        console.log('아이어맨');
        break;
    case '캡틴아메리카' :
        console.log('캡틴아메리카');
        break;
    case '토르' :
        console.log('토르');
        break;
    default : 
        console.log('슈퍼맨');
}
```


---

## Sass
node-sass --help
> --watch : 디렉토리 감시, 저장할때마다 컴파일<br>
> --recursive : 하위폴더에 있는 것까지 컴파일<br>
> --out-style : 내보낼 스타일 설정 {compact || compress || expanded || nested}

#### Sass 폴더 변환 실행 명령
> node-sass --watch --recursive sass --output css<br>
> node-sass -w -r sass -o css --output-style expanded --source-map ./map

#### Source Map 파일
> 브라우저 요소 검사 시 스타일을 mapping을 sass파일로 볼 수 있게 한다.

#### 문법
* scss : css 문법을 사용하여 작성
* sass : 중괄호와, 세미콜론을 쓰지 않음. 들여쓰기로 종속관계가 설정되므로 매우 중요하다.
         들여쓰기 시, tab || space 중 하나로 통일해야 한다.

#### 주석
* // —> 한줄 주석. 컴파일된 후에는 보이지 않는다.
* /* —> 여러줄 주석. 줄바꿈하고 한번 들여써서 사용, css 파일에 컴파일 됨.

#### @extend: 상속
```sass
.box
  display: block
  width: 100px
  height: 100px

.box-black
  @extend .box
  background: #000

.box-yellow
  @extend .box
  background: #ff0
```

#### %: Module not shown ( 대체 선택자 )
* %선택자를 이용한 모듈은 비공개화 되어 css에 노출되지 않는다.
```sass
%flex-center-middle
  display: flex
  jusrify-content: center
  align-items: center

%box
  @extend %flex-center-middle
  width: 100px
  height: 100px

.box-black
  @extend %box
  background: black;

.box-red
  @extend %box
  background: red;

.box-green
  @extend %box
  background: green;

.box-blue
  @extend %box
  background: blue;
```
