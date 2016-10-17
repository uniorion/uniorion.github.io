var	docCSS = null;	// 출력될 css 문서 전체
 
doc_CSS = "@charset 'utf-8';\n"

// css 문서내용 만들기
function setCSS() {
	attachComment();
	attachContainer();
	el_txta_css.innerText = doc_CSS;
}


/****************************
	공통 css
*/

// 상단 주석
function attachComment() {
	doc_CSS =	doc_CSS
					+ "\n/* ======================================="
					+ "\n 	Grid System CSS v1.0 - Static"
					+ "\n # width : " + total_width + unit
					+ "\n # columns : " + columns
					+ "\n # margin : " + margin_fix + unit
					+ "\n # gutter : " + gutter + unit
					+ "\n========================================== */";
}
// container 스타일
function attachContainer() {
	doc_CSS =	doc_CSS 
					+ "\n\n.container {"
					+ "\n	position: relative;"
					+ "\n	width: " + total_width + unit + ";"
					+ "\n	margin-left: auto;"
					+ "\n	margin-right: auto;"
					+ "\n}"
					+ "\n.container[class*='show-'] {"
					+ "\n  position: relative;"
					+ "\n}"
					+ "\n.container[class*='show-']::before {"
					+ "\n 	content: '';"
					+ "\n  position: absolute;"
					+ "\n  z-index: 1000;"
					+ "\n  top: 0;"
					+ "\n  min-height: 100vh;"
					+ "\n  width: 100%;"
					+ "\n}";
}


/*****************
		가이드
*/
// show-grid
// show-baseline
// show-columns


/*****************
		columns
*/



/*****************
		push, pull
*/



/*****************
		prefix, suffix
*/



/*****************
		isolate
*/


