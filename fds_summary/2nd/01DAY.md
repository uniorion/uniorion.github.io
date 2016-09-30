
웹 접근성과 관련한 사용자 경험
-----------------

**리더기 활용**

- title 요소는 리더에서 가장먼저 읽어줌.
- heading 요소 단위로 이동하는게 가능
- 편집창(input) 단위로 이동. label 에 정보
- ctrl+s로 검색 > alt, title, label 등에 기입된 모든 대체텍스트를 검색.

> 시작장애인에게 IT콘텐츠는 텍스트 뿐.

<br>

**대체텍스트, 링크텍스트**

- 버튼이 토글되는 기능을 가진다면 대체텍스트는 상태와 역할을 명확히 구분하여 일관되게 제공해야한다.
- 상태와 기능을 모두 표시하는게 Best!

<br>
**대체텍스트 제공 Tip**

- 가능하면 시작장애인들도 신속한 정보를 얻을 수 있게
- 중복된 정보는 제거.
- 핵심정보는 앞으로 부가정보는 뒤로.

<br>

**초점이동**

- 레이어 팝업 사용 시, 팝업 콘텐츠 내에서만 초점이 이동하도록.



> ![큰따옴표](http://s1.daumcdn.net/cfs.tistory/custom/blog/16/162239/skin/images/quot_mark_1.png)
**장애가 장애되지 않는 IT환경**

----------

레벨 테스트
-----------------

1. 모던 웹 UI 제작에 요구되는 3가지 : 사용성(Usability), 접근성(Accessibility), 성능(Performance)

2. 웹사이트 제작시 요구되는 화면 해상도 : 96ppi ( pt 단위 사용시 주의 )

3. IIFE 패턴 사용하는 이유

 -

4. ::selelction
> 드래그 했을때 명도 대비를 극대화

5. em > equal 'M'
rem > 크로스브라우징 문제발생. 모바일환경에서 주목.

6. HTML5 에서는 h1 요소를 여러번 쓸 수 있다.

7. CSS, Device 각 픽셀(Pixel)에 대해
웹 디자인, 앱 디자인 제작 시 화면에서 처리되는 픽셀 개념의 차이점을 기술해 봅니다.

8. 글자 < 단어 < 줄 간격이 커야한다.

9. 그리드 시스템이 가져다 주는 효과는
	- 생산성 향상
	- 비주얼 디자인을 시작하는 기준
	- 손쉬운 유지보수
	- 협업을 위한 커뮤니케이션 도구


----------


Photooshop 활용
=============

**시안을 받으면 가장 먼저 구조별로 label 정리를 한다.**

1. generator 로 내보내기
  - 이미지로 내보낼 콘텐츠 구분.
  - kind > Name : 이름으로 필터링
  - Edit > Preferances > Generator 옵션 활성화
  - [Renamy] 이름을 일괄적으로 변경해주는 plugin
  - 사진은 jpg로

2. Edit > Preferances > Export
  - Metadata 는 용량문제로 none

3. Export As..
  - Scale All 로 배율별로 내보내기
  - Transparency : 투명영역이 있는 파일
  - Smaller File : gif와 동일,

4. PNG-8, PNG-24 의 차이

5. 액션기능 사용해서 자르기
  - ctrl 클릭으로 선택
  - 레이어에서 오른클릭 > context > duplicate layer > New > Ok
  - Image > Trim > Save for Web
