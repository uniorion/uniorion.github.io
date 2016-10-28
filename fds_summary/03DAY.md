## CSS

### 박스모델 - Position
- static - 요소의 기본값
  - top, left 로 이동할 수 없다.
- relative - 값만 주면 움직은 없으나 레이어 상태. ( 기준은 자기 자신 )
- absolute - 기준은 상위요소
  - top, left 값을 주지 않으면 제자리에.
  - static이 아닌 부모요소를 찾아 기준으로 삼는다.
  - 부모는 다른 요소의 위치에 영향을 주지 않는 relative로 주로 한다.
  - 콘텐츠가 유연한 경우 고려해야함.
- fixed - viewport 기준, 화면에 위치고정.

### 박스모델 - Float 
- 부모기준 , absolute 레이어와 비슷하게 동작.
- float 된 요소의 박스는 레이어가 되어 다른 박스와 겹쳐 보임.
- float 된 콘텐츠와 다른 요소의 콘텐츠는 겹칠 수 없어 밀린다. => 따라서 이후 요소에도 영향을 준다.
- `clear` : float 영향을 해제. block요소에만

### margin collapse
- 좌우 마진은 겹치지 않지만, 상하 마진은 겹친다.
- 상하 값중 큰 값이 margin이 된다.

### overflow
- visiable : 기본값, 넘치는 콘텐츠를 다 보여줌.
- hidden : 박스를 넘어가는 콘텐츠를 가림. 자식 요소의 float 해제 트릭으로 사용되기도 함.
- scroll : x, y 스크롤 고정 노출.

### z-index : 기본은 auto, 마크업 순서대로 
 
### white-space
- 공백문자를 어떻게 다룰것인가를 정의 한다.
- normal : 정상적으로 출력하도록 지정. 연속된 공백 문자나 줄바꿈을 통합한다.
- pre : 연속된 공백 문자나 줄바꿈을 통합하지 않고, 원문그대로 출력한다.
- nowrap : 연속된 공백 문자는 통합하지만, 줄바꿈은 통합하지 않는다.
  - 자식이 inline/inline-block 일 때, relative 부모의 넓이를 강제로 부여.

---

### 애니메이션 시나리오
1. 애니메이션 이름작성 : text-ani
2. 작업순서
- @keyframes 애니메이션 정의
  - 텍스트 이동 (position, transform)
  - 글자크기 변화 (font-size : px 만 설정됨 )
  - 투명도 조절 (opacity)
3. 요소에 애니메이션 호출.
  - animation-name, animation-duration 필수 요소
  - animation-fill-mode 끝난 후 요소 위치
  - animation-delay 실행전 대기 시간
  - animation-iteration-count 반복 횟수
  - animation-direction 진행방향?
  - animation-timing-function 가속 설정
  - animation-play-state

__* position 으로 이동하는 방법이 transform 보다 자원을 많이 씀.__<br>
  : 크로스 브라우징 위해선 position 사용할 수 밖에..
