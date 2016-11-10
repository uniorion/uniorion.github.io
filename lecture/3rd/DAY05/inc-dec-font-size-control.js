
var btn_inc 	= document.querySelector(".button-increase-font-size");
var btn_dec 	= document.querySelector(".button-decrease-font-size");
var btn_reset	= document.querySelector(".button-reset-font-size");
var txt_area 	= document.querySelector(".demo-text-area");

// console.log("btn_inc:"		, btn_inc);
// console.log("btn_dec:"		, btn_dec);
// console.log("btn_reset:"	, btn_reset);
// console.log("txt_area:"		, txt_area);

const RESET_FONT_SIZE = 14;
const MAX_FONT_SIZE 	= 24;
const MIN_FONT_SIZE 	= 10;

var current_font_size = null;
var changed_font_size	= null;

btn_inc.onclick = function() {
	// TODO
	// 대상 객체를 참조한 변수 txt_area를 통해 문서객체의 현재 설정(계산)된 글자 크기를 가져온다.
	// 가져온 값은 문자열(단위를 포함한)이기 때문에 산술연산을 하기 위해 단위를 제거한다.
	// 단위가 제거된 숫자 유형으로 변경된 값에 + 연산을 수행한 후,
	// 다시 문서객체에 변경된 값을 단위를 붙여 할당한다.
	current_font_size = window.getComputedStyle(txt_area).fontSize;
	current_font_size = window.parseInt(current_font_size, 10);

	if ( current_font_size < MAX_FONT_SIZE ) {
		changed_font_size = current_font_size + 2;
		txt_area.style.fontSize = changed_font_size + 'px';
	}
};
btn_dec.onclick = function() {
	current_font_size = window.getComputedStyle(txt_area).fontSize;
	current_font_size = window.parseInt(current_font_size, 10);

	if ( current_font_size > MIN_FONT_SIZE ) { 
		changed_font_size = current_font_size - 2;
		txt_area.style.fontSize = changed_font_size + 'px';
	}
};
// 현재 문서의 폰트크기를 14px로 초기화
btn_reset.onclick = function() {
	txt_area.style.fontSize = RESET_FONT_SIZE + 'px';
};