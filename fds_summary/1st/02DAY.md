## HTML & CSS

### table layout
- 접근성을 떨어뜨림
```
Layout에 Table을 사용하는 경우는 마크업이 표현요소를 포함하고 있기 때문에 콘텐트를 논리적으로

배치하려고 시도하면 표현문제와 충돌하게 되고 결국 논리보다는 표현을 위한 용도로 마크업을

사용하게 되어 논리적인 배치와는 거리가 멀어지게 됩니다.
```
##### 출처 : [웹 표준 코딩의 장점. Table for Layout과 CSS Layout의 비교 실험.](http://naradesign.net/wp/2007/02/03/113/)

#### 선택자 {속성:값 ; 속성:값}

#### span  : 중립적 태그, 그룹핑, 인라인 요소

#### @charset : css 문서 인코딩 선언

#### float 속성 : left, right, none

#### block모델은 가운데정렬 되지 않으므로 margin의 auto로 해결

#### viewport : 웹이 보이는 화면 크기 ( 10vh > 브라우저 사이즈의 1/10)

#### flex : block 모델을 가로로 배치하려면 부모의 `display 속성을 flex`로 변경
- flex-direction: row > flex 요소의 배치 방향을 결정
- flex-wrap: flex 아이템의 줄넘김을 처리. (nowrap / wrap)
- justify-content: flex 아이템의 수평방향의 정렬 방식을 선택 

#### box-sizing
- content-box : 기본값으로, 너비 높이는 content영역만을 의미.(border, padding, margin 제외)
- border-box : 너비, 높이 계산시 content, padding, border를 포함 (margin 제외)

---------------------
### Box Model에 영향을 주는 속성
- display : 요소의 성격
- position : 요소의 위치
- float : 이웃 요소와의 배치
----------------------

#### outline algorithm
> section, article, nav, aside
> 명시적 아웃라인 , 반드시 제목이 필요(heading)  > 섹셔닝 콘텐츠

#### normalize.css
: 브라우저 사이의 agent 스타일을 통일시켜줌. reset과 다름
https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css

#### position: absolute;
> block 요소가 됨. 레이어이기 때문에 width, height가 auto.
> 기준이 필요함.(상위) 상위position이 static이 아니여야 함.
> absolute, fixed, relative

#### 요소가 inline 이 되면 공백문자가 발생.
> inline 은 width, height가 적용안됨 > inline-block 으로 해결할수 있다.

#### 부모의 box model은 자식보다 커야된다. block > inline-block > inline

#### 상속, 겹침, 구체성
> 속성이 상속될 때, 하위 요소에 같은 속성이 선언되어 있으면 상속 값은 무시된다.<br>
> inherit 값은 상속 값이 우선할 수 있게 한다.<br>
> 속성의 값을 재정의 할 경우, 선택자의 구체성이 높은것이 적용된다. 같을경우 나중에 적용한것 <br>
> !important 값을 주어 debugging

###  __접근성 이슈 > 명도대비__
> 4.5 : 1 이상 > 확대축소가 안될때, CCA
