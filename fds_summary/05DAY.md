
## 웹 접근성과 관련한 사용자 경험
 
#### 리더기 활용
  - title 요소는 리더에서 가장 먼저 읽어줌.
  - heading 요소 단위로 이동하는게 기능이 있음.
  - 편집창(input) 단위로 이동. label에 정보
  - ctrl+s로 검색 > alt, title, label 등에 기입된 모든 대체텍스트를 검색.
<br>
> 시작장애인에게 IT콘텐츠는 텍스트 뿐.
<br>
#### 대체텍스트, 링크텍스트
  - 버튼이 토글되는 기능을 가진다면 대체텍스트는 상태와 역할을 명확히 구분하여 일관되게 제공해야한다.
  - 상태와 기능을 모두 표시하는게 Best!
   
```
* 대체텍스트 제공 Tip
  - 가능하면 시작장애인들도 신속한 정보를 얻을 수 있게.
  - 중복된 정보는 제거.
  - 핵심정보는 앞으로 부가정보는 뒤로.
```

#### 초점이동
  - 레이어 팝업 사용 시, 팝업 콘텐츠 내에서만 초점이 이동하도록.

---

### 레벨 테스트
1. 모던 웹 UI 제작에 요구되는 3가지
  - 사용성(Usability)
  - 접근성(Accessibility)
  - 성능(Performance)

2. 웹사이트 제작시 요구되는 화면 해상도 : 96ppi ( pt 단위 사용시 주의 )

3. IIFE(Immediately-Invoked Function Expression) 패턴 사용하는 이유
  - 전역 영역을 오염시키지 않기 위해.
  - 글로벌 네임스페이스에 변수를 추가하지 않아도 되기 때문에 코드 충돌이 없이 구현이 가능.
  - 함수안에서 사용되는 변수의 scope가 제한되므로 전역변수에 영향 받지 않는다.

4. ::selelction
  - text 드래그하여 선택한 상태.

5. em > equal 'M' / rem > 크로스브라우징 문제발생. 모바일환경에서 주목.

6. HTML5 에서는 h1 요소를 여러번 쓸 수 있다.

7. 자간 < 단어 < 줄 순으로 간격이 커야 가독성이 좋다.

8. 그리드 시스템이 가져다 주는 효과는
  - 생산성 향상
  - 비주얼 디자인을 시작하는 기준
  - 손쉬운 유지보수
  - 협업을 위한 커뮤니케이션 도구

---

## Photooshop 활용
 
#### 시안을 받으면 가장 먼저 구조별로 label 정리를 한다.

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
  - 8비트 / 24비트 색지원
  - PNG-8 은 투명도 조절이 안됨.

5. 액션기능 사용해서 자르기
  a. ctrl 클릭으로 선택
  b. 레이어에서 오른클릭 > context > duplicate layer > New > Ok
  c. Image > Trim > Save for Web
