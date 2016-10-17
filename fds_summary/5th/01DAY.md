# JavaScript

> 모듈 의존성 관리(중요!)
> 외부 스크립트 호출 시, 다른 파일에 있는 함수를 호출하려면 함수가 있는 파일이 먼저 로드 되어야 한다. (의존성)

## 조건문 (condition)

### 1. if 문
```js
if ( 조건문1 ) {
    // 조건문1이 참인 경우 실행
} else if ( 조건문2 ) {
    // 조건문1이 거짓이고, 조건문2가 참인 경우 실행
} else {
    // 모두 거짓인 경우 실행
}
```


---

# HTML & CSS

## # CSS3 미디어쿼리
* dppx : 디바이스 의존적 단위, ios, android
* dpcm : 인쇄단위

### 비트맵 이미지의 반응형 대응 (png, jpg, gif, bmp )
#### content image 
```html
// 모던 웹 브라우저에서 적용 가능한 고/저해상도 이미지 분기처리
<img src="images/map.png"
     srcset="images/map@2x.png 2x, images/map@3x.png 3x" 
     alt="Map">
```
참고) [The srcset Attribute.](https://webkit.org/demos/srcset/)

#### background image
```css
// 레티나 디스플레이가 사용되고 있는 기기에 적용되는 media query
// 미디어쿼리로 pixel ratio를 감지하여 이미지를 교체한다.
@media (-webkit-min-device-pixel-ratio: 2),  
       (min--moz-device-pixel-ratio: 2),     
       (min-resolution: 192dpi),            // 웹브라우저 표준 dpi : 96 * 2
       (min-resolution: 2dppx)              // 표준
    {   
        .detect-DPRx2 {
            background-image: url(coffeex2.jpg);
            background-size: 400px 294.5px;
        } 
    }
```
참고) [MDN-device-pixel-ratio](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries#-moz-device-pixel-ratio)

<br>

## # 반응형 웹 디자인 패턴

### 1.1 layout

    - tiny Tweaks : 웹서비스 구조는 그대로 유지, 스케일만 변경
    - Mostly Fluid : 유연한 멀티 컬럼 그리드 레이아웃에 기초하여 화면 크기에 따라 콘텐츠가 수직 방향으로 쌓이게 되는 패턴이다. 
    - Column drop : 유연한 멀티 컬럼 그리드 레이아웃에 기초하여 화면 크기에 따라 콘텐츠를 단계적으로 떨궈 
    - Column drop2 : Column drop과 비슷하지만, 화면크기에 따라 콘텐츠를 단계적으로 감춘다는 점에서 다소 다른 패턴이다.
    - layer
    - off Canvas : 좁은 공간을 효율적으로 사용할 수 있도록 감춰진 영역을 사용자의 요구에 따라 노출하는 패턴.
    - select 
    - toggle navigation : 글로벌 내비게이션 바 영역의 메뉴들이 모바일 화면에서 토글 버튼으로 바뀌어
    - footer Navigation : 
    - 


#### # 유연한 그리드 시스템(Flexible Grid System)

