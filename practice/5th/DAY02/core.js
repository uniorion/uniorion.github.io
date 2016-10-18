
// 버튼 눌림 상태 저장
var is_pressed 		= false;
var text_normal 	= 'normal state';
var text_pressed 	= 'pressed state';

// 버튼 엘리먼트 찾아와 변수에 담기 
var el_btn_toggle = document.querySelector('.ui-button--toggle');

/**
 * 버튼 이벤트 - on 클래스 토글
 */
el_btn_toggle.onclick = toggleButton;

 function toggleButton() {

	if ( is_pressed === true ) {
		is_pressed = false;
		el_btn_toggle.firstChild.textContent = text_normal;
		el_btn_toggle.classList.remove('pressed');
	}
	else {
		is_pressed = true;
		el_btn_toggle.firstChild.textContent = text_pressed;
		el_btn_toggle.classList.add('pressed');
	}
} 

