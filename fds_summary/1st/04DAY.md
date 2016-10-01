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
<p>명시적 라벨 부여 
    <label for="yourname1">이름</label> 
    <input type="text" id="yourname1" />
</p>
<p>
    암묵적 라벨 부여 
    <label>
       이름 <input type="text" id="yourname2" />
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

#### dl
: 여러 짝의 용어와 정의, 키-값 짝의 목록
: 하위요소는 1개 이상의 `<dd>` 요소가 뒤따르는 0개 이상의 `<dt>` 요소

#### dt
: 정의 목록에서 용어를 나타냄, `<dl>`의 자식으로만.
: 보통 `<dd>` 전에 쓰이며, 연속적으로 쓰이는 `<dt>`는 바로 다음에 나오는 <br>
  의 `<dd>`요소로 정의되는 여러개의 용어를 나타냄.

#### dd
: 정의 목록에서 용어의 정의를 나타냄, `<dl>`의 자식으로만.

#### time
: 24시간 시각이나 정확한 그레고리력 날짜를 나타냄.
: 기계가 이해할 수 있는 형태로 날짜나 시간을 나타내기 위한 목적.
```html
<p>The concert starts at <time>20:00</time>.</p>
<p>The concert took place on <time datetime="2001-05-15 19:00">May 15</time>.</p>
```

#### figure
: 독립적인 콘텐츠를 표현.
: 메인 플로우와 연관이 있지만 플로우에서 독립적으로 위치할 수 있음.
: 이미지, 일러스트, 시, 도표, 코드, 스키마 등 

#### figcaption
: 수치 혹은 그림에 관련된 caption 혹은 legend 을 표현.
```html
<figure>
    <p>
        Depression is running through my head,<br>
        These thoughts make me think of death,<br>
        A darkness which blanks my mind,<br>
        A walk through the graveyard, what can I find?....
    </p>
    <figcaption><cite>Depression</cite>. By: Darren Harris</figcaption>
</figure>
```
 