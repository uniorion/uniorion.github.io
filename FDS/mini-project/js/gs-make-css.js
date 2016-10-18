var	doc_CSS = null;	// 출력될 css 문서

// css 문서내용 만들기
function setCSS() {
	attachComment();
	attachContainer();
	attachGuide();
	el_txta_css.textContent = doc_CSS;
}


/****************************
	공통 css
*/

// 상단 주석
function attachComment() {
	doc_CSS =	"\n/* ======================================="
					+ "\n 	Grid System CSS v1.0 - Static"
					+ "\n # width : " + total_width + unit
					+ "\n # columns : " + columns
					+ "\n # margin : " + margin_width_fix + unit
					+ "\n # gutter : " + gutter_width + unit
					+ "\n========================================== */";
}
// container 모듈
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
function attachGuide() {
		var column_gradient = "";

		column_gradient = "transparent " + margin_width_fix + unit
									 	+ ", " + GRID_COL_COLOR + " " + margin_width_fix + unit
									 	+ ", " + GRID_COL_COLOR + " " + (margin_width_fix + column_width) + unit;

		for (var i = 0; columns - 1 > i; ++i) {
			column_gradient = column_gradient 
											+ ", transparent " + (margin_width_fix + (column_width * i) + (gutter_width * i)) + unit;
			 								+ ", " + GRID_COL_COLOR + " " + (margin_width_fix + (column_width * i) + (gutter_width * i)) + unit
			 								+ ", transparent " + margin_width_fix + (column_width * i) + (gutter_width * i) + unit;

		}

		column_gradient = column_gradient
										+ ", transparent " + (total_width - margin_width_fix) + unit;



		// show-baseline
		doc_CSS =	doc_CSS 
						+ "\n.container.show-baseline::before {"
						+ "\nbackground-image: linear-gradient(180deg, transparent 9px, " + GRID_LINE_COLOR + " 9px);"
						+ "\nbackground-size: 1px 10px; }"
		doc_CSS =	doc_CSS
						+ "\n.container.show-columns::before {"
						+ "\nbackground-image: linear-gradient(90deg, " + column_gradient + ");"
						+ "\nbackground-size: " + total_width + "px 1px; } "

}


// + "\n.container.show-grid::before {
//   background-image: linear-gradient(180deg, transparent 9px, #7400ff 9px), linear-gradient(90deg, hsla(237, 100%, 66%, 0.3), hsla(239, 100%, 79%, 0.3));
//   background-size: 1px 10px, 120px 1px;
// }

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


