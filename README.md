## Fastcampus 프론트엔드 개발 SCHOOL 2기 이진기

[https://uniorion.github.io/FDS](https://uniorion.github.io/FDS)

| Folder | Description | 
|:-------|:--------|
| /_sample | 여러 기능을 구현한 샘플 코드 | 
| /FDS | 주차별 과제수행 폴더 | 
| /fds_summary| 강의내용 요약 폴더  | 
| /lecture| 수업 진행 , 기타 프로젝트 폴더 | 
| /modules| css , js 모듈 | 

---

### 개발환경 
#### # Sublime Text 3 [http://www.sublimetext.com/3](http://www.sublimetext.com/3)
```
1. Package Control 설치
2. Install Package (단축키: Ctrl-Shift-P, 메뉴: Tools > Command Pallet)  
    - Emmet
    - SideBarEnhancements  
    - ConvertToUTF8  
    - IMESupport(Windows Only)
    - jQuery
    - sass
    - AutoFileName
    - Bracket Highlighter
    - Theme Flatland
    - Color Highliter
3. 기본환경 설정 변경 (Preferences -> Settings-User)
```

#### # Google Chrome - Extensions
    - Web Developer Tool
    - Open WAX
    - headingsmap
    - Octotree : github 트리뷰 제공
    - High Contrast : 브라우저 고대비모드 제공
    - Accesibility
    - PageSpeed Insights

#### # Firefox - Extensions
    - Firebug
    - Web Developer tool
    - Headingsmap
    - Open wax

#### # IE Debugging Tool
    - [Super Preview ](https://www.microsoft.com/ko-kr/download/details.aspx?id=2020)
    - [IE Tester](http://www.my-debugbar.com/wiki/IETester/HomePage)

#### # Github - [https://www.github.com/](https://www.github.com/)

#### # Sass
~~~
a. nvm - window 설치 [nvm-window](https://github.com/coreybutler/nvm-windows/releases)<br>
b. nvm ls available > node.js 설치가능 버전 확인<br>
c. nvm install {version} > 원하는 버전의 node.js 설치<br>
d. npm install -global node-sass : 전역으로 설치
d. npm install -global http-server : 전역으로 설치
~~~
* [node-sass](https://www.npmjs.com/package/node-sass)
* [group-css-media-queries](https://www.npmjs.com/package/group-css-media-queries) : sass를 사용하면서 여기 저기에 생성된 미디어쿼리 구문을 그룹으로 묶어줌
* [csso](https://www.npmjs.com/package/csso) : 생성된 CSS 파일을 압축(최적화)
~~~
// package.json 설정 예.
"scripts": {
    "sass": "node-sass -w sass -o css --output-style expanded",
    "mq-group": "group-css-media-queries css/style.css css/style.css",
    "css-opt": "csso css/style.css -o css/style.min.css",
    "build": "npm run mq-group | npm run css-opt"
~~~

#### # Source Tree - [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/)

#### # Slack

#### # Trello

---

### Bookmark

- 반응형 레이아웃 샘플 - [http://www.liquidapsive.com/]

- 구글 크롬 확장 프로그램 만들기 [http://hodol.kr/xe/note/17558]

- 구글 Device metrics [https://design.google.com/devices/]

- IcoMoon [https://icomoon.io/] - 웹폰트 제작 툴

- Zeplin [https://app.zeplin.io] - 이미지 협업 클라우드

- 무료 한글 글꼴 [http://blog.naver.com/messinger00/220831856850]
 
---

### 서적

_자바스크립트 + jQuery 완전정복 스터디 | 김춘경 저_

_DOM을 깨우치다 | 코디 린들리 저_

_모바일 우선주의  | 루크 로블르스키 저_

_웹 폼 디자인  | 루크 로블르스키 저_