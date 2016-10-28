## HTML & CSS

### table layout
> Layout에 Table을 사용하는 경우는 마크업이 표현요소를 포함하고 있기 때문에<br>
> 콘텐트를 논리적으로 배치하려고 시도하면 표현문제와 충돌하게 되고 결국 논리보다는<br>
> 표현을 위한 용도로 마크업을 사용하게 되어 논리적인 배치와는 거리가 멀어지게 됩니다.
출처 : [웹 표준 코딩의 장점. Table for Layout과 CSS Layout의 비교 실험.](http://naradesign.net/wp/2007/02/03/113/)

### flex : block 
* 아이템들을 가로로 배치하려면 부모의 `display 속성을 flex`로 변경
* flex-direction: row > flex 요소의 배치 방향을 결정
* flex-wrap: flex 아이템의 줄넘김을 처리. (nowrap / wrap)
* justify-content: flex 아이템의 수평방향의 정렬 방식을 선택 

### box-sizing
* content-box : 기본값으로, 너비 높이는 content영역만을 의미.(border, padding, margin 제외)
* border-box : 너비, 높이 계산시 content, padding, border를 포함 (margin 제외)

### Box Model에 영향을 주는 속성
* display : 요소의 성격
* position : 요소의 위치
* float : 이웃 요소와의 배치

----------------------

### outline algorithm
> section, article, nav, aside<br>
> 명시적 아웃라인 , 반드시 제목이 필요(heading)  > 섹셔닝 콘텐츠<br>
 
### position: absolute
> block 요소가 됨. 레이어이기 때문에 width, height가 auto.<br>
> 상위 요소 중 position이 static이 아닌<br>
> absolute, fixed, relative 값을 가진 요소가 기준이 된다.<br>

### 상속, 겹침, 구체성
> 속성이 상속될 때, 하위 요소에 같은 속성이 선언되어 있으면 상속 값은 무시된다.<br>
> inherit 값은 상속 값이 우선할 수 있게 한다.<br>
> 속성의 값을 재정의 할 경우, 선택자의 구체성이 높은것이 적용된다. 같을경우 나중에 적용한것 <br>
> !important 값을 주면 모든 구체성이 무시되며 우선 적용된다.<br>
 