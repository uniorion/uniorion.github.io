## JavaScript
 
```js
 getComputedStyle(demo_text, 'after') //가상요소의 스타일도 가져올 수 있다. (ie는 9 이상)
'문자열'.remove('문자1', '문자2'); // '문자열'에서 문자1 값을 찾아 문자2 로 대치
'문자열'.trim() // '문자열'에서 좌우 공백을 제거. trimRight(), trimLeft()
```

### 1. 형 변환하기

    * Boolean() |  !!
    * !! 표현을 더 선호

#### # undefined, null
        - !! (false)  &  !(true)
        - '', +''(string) &  String()

#### # isNaN(x)
: 'x는 숫자형이 아닙니까?'

### 2. 리터럴(Literal) 이란?
    * 앞서 배운 정보유형 상수. 즉, '값' 그 자체.
    * 2016, 'this', function(){}, [], {}

---

## HTML & CSS

#### # z-index
* position 속성을 주어야 적용.
* 자식의 index는 부모의 z-index 값으로 우위가 먼저 정해진다.
* 동일한 값이라면 마크업 상 나중에 선언된 것이 위에 존재한다.

---

## Grid System
> 그리드는 항의적인 아이디어를 제한(규제)하는 진부하는 것이 아닙니다.<br>
> 질서(위계와 규칙을 정하는)를 보다 쉽고 강력하게 제작할 수 잇는 필수적인 디자인 도구입니다.

* 컬럼 사이의 간격 : gutter
* unit이 합쳐져 > column.

#### # Unit
> Unit = (Canvas - ((Total Units - 1 ) * Gutter)) / Units
> baseline = font-size + leading

#### # push, pull module
: 각 박스를 앞 / 뒤로 이동시킨다.

#### # Gutter를 포함한 Grid System
: 총 넓이를 컬럼 수로 나누어 정수로 떨어져야한다. 