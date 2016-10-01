## HTML
 
### Form 의 구성
```html
<form action="" method="">
    <fieldset>
        <legend><input type="text"></legend>
    </fieldset>
</form>
```

#### fieldset 
: 여러개의 콘트롤과 레이블을 그룹화
: 하나의 form 안에는 여러 fieldset으로 그룹화할 수 있다.<br>
    > e.g) 회원가입 form의 필수입력사항 / 선택사항

#### legend
: fieldset요소를 이용하여 그룹화한 범위의 캡션을 지정

#### label
: 사용자 인터페이스에 레이블을 부여함(접근성)
: 두 요소는 id-for 로 연결 or label 요소안에 input을 마크업.
```html
<p>명시적 라벨 부여 </br>
    <label for="yourname1">이름</label> 
    <input type="text" name="yourname1" id="yourname1" />
</p>
<p>
    암묵적 라벨 부여 </br> 
    <label>
       이름 <input type="text" name="yourname2" id="yourname2" />
    </label>
</p>
```
: 모든 input 요소에 label을 제공하지 못할 때 `title`속성으로 대체 가능
```html
<label for="phone">핸드폰 번호</label>
<input type="text" id="phone" title="번호 앞자리" /> -
<input type="text" title="번호 중간자리"/>- 
<input type="text" title="번호 뒷자리" /> 
```

#### 로그인 버튼
: input /  button 가능하나 button 요소가 더 명시적

 
dt는 인라인 요소이며, dd는 블럭 요소

* 시스템이 이해하는 날짜 정보
<time class="news-item-date" datetime="2016-09-22T17:27:30">2016.9.22</time>

figure > caption이 있는 콘텐츠 , 이미지, 비디오, 테이블 등l
figcaption 정보가 image를 충분히 설명하지 못하면 alt 에 적절한 설명이 필요하다.
