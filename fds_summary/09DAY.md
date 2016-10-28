## JavaSscript

> 변수(Variable)에 값이 할당된다라는 것은
> 값의 유형(Data Type)에 따라
> 복사하거나, 참조(Reference)하게 된다.

1. 변수 선언
```js
var my_name; // 변수 선언 시, 기본적으로 undefined 값 할당
```

2. 선언된 변수에 값 할당
```js
var current_state;
// 선언된 변수에 값을 할당
current_state = 200;
```

3. 선언과 동시에 값 할당
```js
var current_state = 200;   // 숫자
var is_finished   = false; // 불리언
var container_el  = null;  // 비어 있다.
var my_name;               // 변수 선언만 하게 되면 undefined
```

4. var 키워드를 한 번만 사용하는 싱글톤(Singleton) 패턴
```js
var current_state = 200,   // 숫자
    is_finished   = false, // 불리언
    container_el  = null;  // 비어 있다.
```

## HTML & CSS
* img 요소에 인라인 스타일 적용
: 이미지 로딩이 완료되기 전, 미리 이미지 영역을 잡아 놓게 되어 사용자경험이 상승.

* repainting -reflow [참고](https://lists.w3.org/Archives/Public/public-html-ig-ko/2011Sep/att-0031/Reflow_____________________________Tip.pdf)