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

 
#### isolate Floating 테크닉
float 속서이 적용된 방향으로만 음수 margin만 적용 가능하다.

#### flex: none;
> flex: none;  >> 0 0 auto,  display:block 과 똑같다.

---

# HTML & CSS

## Flex-Shortcode

## CSS3 미디어쿼리
* dppx : 디바이스 의존적 단위, ios, android
* dpcm : 인쇄단위

### 비트맵 이미지의 반응형 대응 (png, jpg, gif, bmp )
* content image 
```html
// [콘텐츠 이미지 예] : 모던 웹 브라우저에서 적용 가능한 고/저해상도 이미지 분기처리 방법
<img src="images/map.png"
     srcset="images/map@2x.png 2x, images/map@3x.png 3x" 
     alt="Map">
```
참고) [The srcset Attribute.](https://webkit.org/demos/srcset/)

* background image
```css
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





