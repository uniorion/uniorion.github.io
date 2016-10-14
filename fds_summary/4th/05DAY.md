# 접근성
- 접근성은 유니버셜 디자인  > 소수가 아닌 다수, 기계도 이해하기 위함이다.
- 접근성 준수는 프론트엔드 포지션만의 일이 아니므로 사전에 다른 포지션에게 필요성을 충분히 이해시키고 고민하고 공조해야 한다.

## 1. 장애인 차별 금지 및 권리구제 등에 관한 법률
> 전자 정보와 비전자 정보를 이용하고 그에 접근함에 있어서 장애를 이유로 차별받지 않아야 한다.<br>
> 장애인, 고령자 외에도 OS 등의 기술환경도 고려되어야 함.
<br>

### # 국가정보화 기본법 시행령
#####   a. 모든 콘텐츠는 시각, 청각 등의 장애유형에 관계없이 사용자가 인식할 수 있을 것 ( _인식의 용이성_ )
#####   b. 시각, 청각 장애인 등 사용자가 운용할 수 있는 방법으로 제시되어 있을 것 ( _운용의 용이성_ )
#####   c. 사용자가 쉽게 이해할 수 있도록 콘텐츠나 제어방식을 구성할 것 ( _이해의 용이성_ )
#####   d. 콘텐츠는 다양한 방법의 기술로 접근할 수 있도록 견고하게 만들 것 ( _기술의 견고성_ )


> 장애와 장애인의 차이 <br>
> : 일시적인 장애는 누구나 가질 수 있지만, 장애인이란? 장기간 장애를 가지고 있는 사람.


`참고)` [웹 접근성 기술 백서](http://inside.olleh.com/html/WebAccessibility/2013%EB%85%84%20%EC%9B%B9%20%EC%A0%91%EA%B7%BC%EC%84%B1%20%EA%B8%B0%EC%88%A0%20%EB%B0%B1%EC%84%9C_(%EC%A3%BC)KT.pdf)

<br><br>

## 2. 한국 웹 접근성 콘텐츠 지침 2.0 (KWCAG 2.0)

* HTML, RIA 다양한 기술 고려
* 4개의 원칙, 13개의 지침
* 검사 항목(22가지)을 구체적으로 제시
* 지침에 대한 실무 사례 제공
* 유연성, 검증 가능성에 관한 업그레이드   e.g) NHN의 NWCAG

### 2.1 인식의 용이성

#### 2.1.1 대체텍스트

    - 영문 이니셜 사용 시 . 으로 구분 또는 lang 속성사용
    - <img> 사용시 alt 반드시 제공. alt가 없으면 src 파일명을 읽는다.
    - title 속성은 모바일에서 무용지물
    - 웹툰 등 대체텍스트 정보가 긴 경우 longdesc 속성을 사용
    - map 영역에도 적절한 alt, title 속성값이 필요하다.


※ 대체 텍스트 제공 기법 (Image Replcement) <br>
> 1. WA IR 기법 <br>
>  : position 속성을 사용하여 성능상 이슈가 있다<br>
> 2. Phark Method <br>
>  : text-indent를 이용하여 화면 바깥으로(-9999px만큼 내어 쓰기) 빼내어 보이지 않게 하는 방법<br>

`참고)` 다음 널리 - [http://darum.daum.net/convention/css/css_ir](http://darum.daum.net/convention/css/css_ir)

    

#### 2.1.2 멀티미디어 대체 수단

    - 자막/원고/수화 제공
    - 플레이어 콘트롤러 제공
    - 다양한 언어, 화질, 플랫폼별 고려하여 제공 
 
> 열린 자막
> : 영상 자체에 자막이 입혀진 경우
> 닫힌 자막
> : 소리정보까지 제공. 사용자가 자막을 on/off 할 수 기능을 제공한 자막
 


#### 2.1.3 명료성

    - 색으로만 구분되는 콘텐츠 주의 ( 모양의 구분 제공 )
    - 명확하게 인식 가능한 지시 사항 제공   
    - 텍스트/배경 콘텐츠 명도 대비 준수
    - 고대비 모드 제공 , 브라우저에서 이미지는 반전되지 않으므로 사용상 주의
    - 캡차는 시각 장애인이 인식하기 어려우므로 음성듣기 기능을 제공
    - 자동재생 배경음악 사용 주의 > 바로 멈춤기능 제공

> 4.5:1 을 꼭 지켜야하나?
> : 24(18pt) 이상, 굵은 18px(14pt) 환경에선 명도 대비 3:1 



### 2.2 운용의 용이성

#### 2.2.1 키보드 접근성

    - 키보드로 내비게이션을 운용할 수 없다
    - 탭, 엔터, 스페이스 키만으로 운용
    - 마우스가 올라왔을때 focus가 와야하며, 시각적으로 표시 해주어야 한다.
    - focus를 못받는 요소에는 onclick 이벤트를 주지 않아야 한다.
    - 방향키, 스페이스, page up/down 등의 키보드 탐색을 지원해야 한다.

* _tabindex 속성은 `<div>`, `<span>` 요소와 같이 포커스를 못받는 요소에게 포커스가 가도록 한다.

> 404페이지
> - 홈링크 제공
> - 사용자가 의도한 페이지정보, 검색, 페이지 이탈 기능 등을 제공해야 한다. 

#### 2.2.2 충분한 시간 제공

#### 2.2.3 광 과민성 발작 예방

#### 2.2.4 쉬운 내비게이션 

---

# HTML & CSS

## Flexbox 

    - Block 레이아웃 : 문서 배치
    - Inline 레이아웃 : 텍스트 배치
    - Table 레이아웃 : 표 배치 
    - Positioning 레이아웃 : 격리된 배치
    - Flex 레이아웃 : 유연한 배치, 모바일에 유리 
    - Grid 레이아웃 : 큰 화면에 적합. 현재는 지원 브라우저가 거의 없다.

![flex-direction-terms](https://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/images/flex-direction-terms.svg)

출처 : [W3C - CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/)

* flex container : flex 아이템을 감싸는 부모 요소
* flex item : flex container 안에 포함된 자식 요소
* main axis : item 이 정렬되는 주축
* cross axis : 주축에 교차가 되는 축

#### # Shorthand
```
flex-flow : <flex-direction> <flex-wrap>;
flex: <grow> <shrink> <basis>;
```

#### # Display Order
- order는 기본값이 0, 같은 값이면 마크업 순서대로
- 마크업 순서에 구애 받지 않고 배치할 수 있기 때문에 접근성을 향상 시킬 수 있다.
<br><br>

`참고)` 

- [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [Flexbox playground](https://codepen.io/enxaneta/full/adLPwv/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)
- [flexibility](https://github.com/jonathantneal/flexibility)