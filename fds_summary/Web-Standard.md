## 웹 표준

### 웹 표준 준수 사항 점검 항목
* 코드의 품질
    - 올바른 문서 유형 정의 (Doctype)
    - 올바른 언어 인코딩 설정 (Charset)
    - 유효한 문법 (Syntax)
        + HTML, XHTML
        + CSS
        + DOM + Javascript
    - 의미 있는 구조 선형화 (Semantic)
    - 깨진 링크 제거 (Bloken Links)
    - 서비스 성능 최적화 (Perfomance)
    - 불필요한 핵 근절 (Hack)
    - 오류 제거 (Error)
* 구조/표현/동작의 분리
    - 문서에서 표현 속성 제거 (border, bgcolor ...)
    - 콘텐츠 이미지와 배경 이미지 분리 관리 (Content & Background Images)
    - 문서에서 기능 의존성 제거 (onclick, javascript: ...)
* 접근성 - 사용자 고려
    - 장애(시/청각/지체 등)를 고려한 코드 작성
    - 차별하지 않는 서비스 제공
    - 친절하고 설명적 텍스트 제공
* 접근성 - 장치(기기)
    - 브라우저 호환성 (Compatible)
    - 단계적 기능 향상 (Progressive Enhancement )
    - 우아한 기능 저하 (Graceful Degradation)
    - 텍스트 브라우저 - 이미지 의존성 제거(Alternate Text)
    - 기계 친화적 코드 제공 (Metadata)
    - 미디어 별 지원 (Screen, Print ...)
* 사용성
    - 확연한 시각 대비 구조
    - 적절한 제목 제공 구분
    - 일괄적인 언어 사용 및 명시
    - 명확한 링크 텍스트 구분
    - 방문했던 링크에 대한 구분
    - 홈으로 이동하는 기능 제공
    - 이해하기 쉽고, 사용하기 쉬운 내비게이션 구조
    - 사이트 맵 제공
    - 검색 기능 제공
* 사이트 관리
    - 도움이 되는 정보를 제공하는 404 에러 페이지 제공
    - 친화적 URL 사용
    - www 제외한 URL 동작
    - 파비콘 제공



## 웹 접근성

### 스크린 리더(Screen Reader)
1. 센스리더
2. JAWS 
3. 실로암
<br>
* 이미지 alt 속성
```
기본 적으로 그래픽 이미지의 파일명을 읽어 줍니다. 
접근성 표준에 명시된 alt 속성이 있는 경우 , 파일명 대신 alt 속성 값을 읽어 줍니다.
```

* 이미지 longdesc 속성
```
이미지에 longdesc 속성이 있는 경우 "설명 있음" 이라는 음성을 출력 합니다. 
Alt + Enter 키를 누르면 새 창 이 열리고 설명을 읽어줍니다.
```

* 제목 이동 기능
```
그룹 영역의 제목을 표시하는 H1 ~ h6 요소 에 대해 제목 정보의 음성 출력과 이동 기능을 지원 합니다.
```

* 테이블 읽기 기능
```
테이블의 시작과 끝 지점에 가상 커서가 위치하는 경우, 시작과 끝을 음성으로 출력 합니다. 
시작의 경우는 "테이블 시작 x행, y열"과 같이 테이블의 구성 정보를 추가적으로 제공 합니다. 
테이블의 각 셀은 하나의 라인으로 처리하며, 첫 행부터 왼쪽에서 오른쪽으로 순차적으로 표시합니다. 
또한 테이블에 summary, caption 등의 속성이 지정된 경우 각각 테이블 설명 과 테이블 제목 으로 
음성 정보를 출력 합니다.
```

* 폼 label, alt, title 속성
```
편집 창, 라디오 버튼, 체크 상자, 버튼 등의 폼 콘트롤에 label 요소 또는 title , alt 속성이 지정되어 있는 경우 이를 음성으로 출력 합니다. [ label, alt > title ]
```

* 목록 정보
```
ul, ol, dl 등의 태그를 사용하여 목록을 구성한 경우 목록의 시작과 끝, 개수 등의 정보를 음성출력 합니다.
```

* 외부 개체 접근
```
플래시 제작 시, Accessbility 설정을 적용한 개체 의 경우 시작 과 끝 을 음성으로 출력 합니다. 
버튼 의 경우도 Accessbility 설정이 적용 되어 있다면 사용이 가능 합니다.
```

* accesskey 정보
```
링크나 폼 콘트롤 개체에 accesskey 속성이 지정되어 있는 경우, 이를 음성으로 출력 합니다.
```

* 멀티 라인 편집 창과 iframe 입력창 지원
```
싱글 라인 편집 창과 달리 멀티 라인 편집 창 과 입력 가능 iframe 은 Enter 키를 눌러 
가상 커서를 해제 한 상태 에서 입력 가능 합니다.
```

---

## 한국 웹 접근성 콘텐츠 지침 2.0
