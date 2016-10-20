var	doc_CSS = null;	// 출력될 css 문서

// css 문서내용 만들기
function setCSS() {
	attachComment();
	attachContainer();
	attachGuide();
	attachColumns();

	if ( el_opt_pu.checked ) {
		attachPushPull();
	}
	if ( el_opt_fix.checked ) {
		attachOffset();
	}
	if ( el_opt_isolate.checked ) {
		attachIsolate();
	}
}

/****************************
	공통 css
*/
// 상단 주석
function attachComment() {
	doc_CSS =	"\n/* ======================================="
					+ "\n 	Grid System CSS v1.0 - " + (gs_type_val === "stt" ? "Static" : "Fluid")
					+ "\n # width : " + total_width + "px"
					+ "\n # columns : " + columns
					+ "\n # column width : " + column_width + "px"
					+ "\n # margin : " + margin_width_fix + "px"
					+ "\n # gutter : " + gutter_width + "px"
					+ "\n========================================== */";
}
// container 모듈
function attachContainer() {
	doc_CSS =	doc_CSS 
					+ "\n\n.container {"
					+ "\n	position: relative;"
					+ "\n	width: " + (gs_type_val === "stt" ? total_width : "100") + unit + ";"
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
function attachGuide() {
	var   column_gradient = ""
			, col_start 			= 0
			, col_end 				= 0
			, gut_end 				= 0;

	// static
 	if ( gs_type_val === "stt" ) {

		column_gradient = "transparent " + margin_width_fix + unit;
		for (var i = 1; columns >= i; ++i) {

			col_start = margin_width_fix + (((i - 1) * column_width)  + ((i - 1) * gutter_width));
			col_end 	= margin_width_fix + ((i * column_width)  + ((i - 1) * gutter_width));
			gut_end		= margin_width_fix + ((i * column_width)  + (i * gutter_width));

			column_gradient = column_gradient 
			 								+ ", " + GRID_COL_COLOR_START + " " + col_start + unit
			 								+ ", " + GRID_COL_COLOR_END 	+ " " + col_end + unit
											+ ", transparent " + col_end + unit
											+ ", transparent " + gut_end + unit;
		}
		column_gradient = column_gradient
										+ ", transparent " + (total_width - margin_width_fix) + unit;
	} 
	// fluid
	else {	
		column_gradient = "transparent " + percent(margin_width_fix, total_width) + unit;
		for (var i = 1; columns >= i; ++i) {

			col_start = margin_width_fix + (((i - 1) * column_width)  + ((i - 1) * gutter_width));
			col_end 	= margin_width_fix + ((i * column_width)  + ((i - 1) * gutter_width));
			gut_end		= margin_width_fix + ((i * column_width)  + (i * gutter_width));

			col_start = percent(col_start, total_width);
			col_end 	= percent(col_end, total_width);
			gut_end		= percent(gut_end, total_width);

			column_gradient = column_gradient 
			 								+ ", " + GRID_COL_COLOR_START + " " + col_start + unit
			 								+ ", " + GRID_COL_COLOR_END 	+ " " + col_end + unit
											+ ", transparent " + col_end + unit
											+ ", transparent " + gut_end + unit;
		}
		column_gradient = column_gradient
										+ ", transparent " + (total_width - margin_width_fix) + unit;
	}

	// show-baseline
	doc_CSS =	doc_CSS 
					+ "\n.container.show-baseline::before {"
					+ "\nbackground-image: linear-gradient(transparent 9px, " + GRID_LINE_COLOR + " 9px);"
					+ "\nbackground-size: 1px 10px; }\n"
	// show-columns
	doc_CSS =	doc_CSS
					+ "\n.container.show-columns::before {"
					+ "\nbackground-image: linear-gradient(90deg, " + column_gradient + ");"
					+ "\nbackground-size: " + (gs_type_val === "stt" ? total_width : "100") + unit + " 1px; }\n"
	// show-grid
	doc_CSS =	doc_CSS
					+ "\n.container.show-grid::before {"
					+ "\nbackground: linear-gradient(transparent 9px, " + GRID_LINE_COLOR + " 9px)"
					+ "\n, linear-gradient(90deg, " + column_gradient + ");" 
					+ "\nbackground-size: 1px 10px, " + (gs_type_val === "stt" ? total_width : "100") + unit + " 1px; }\n"
}
 
/*****************
		row, columns
*/
function attachColumns() {
	// row module
	doc_CSS =	doc_CSS
					+ "\n.row {"
					+ "\nmargin-left: " + (gs_type_val === "stt" ? margin_width_fix : percent(margin_width_fix, total_width))  + unit + ";"
					+ "\nmargin-right: " + (gs_type_val === "stt" ? margin_width_fix : percent(margin_width_fix, total_width)) + unit + "; }\n"
					+ "\n.row::after {"
					+ "\ncontent: '';"
					+ "\ndisplay: block;"
					+ "\nclear: both; }\n"
	// column module
	doc_CSS =	doc_CSS
					+ "\n.row div[class*='col-'] {"
					+ "\nbox-sizing: border-box;"
					+ "\nfloat: left; }\n"
					+ "\n[class*='col-']:not(:last-child) {"
					+ "\n  margin-right: " + (gs_type_val === "stt" ? gutter_width : percent(gutter_width, total_width)) + unit + "; }\n";

	var col_width = 0;

	for(var i = 1; columns >= i; ++i) {
		
		col_width = (column_width * i) + (gutter_width * (i - 1));

		if ( gs_type_val === "fld" ) {
			col_width = percent(col_width, total_width);
		}

		doc_CSS =	doc_CSS + "\n.col-" + i + " { width: " + col_width + unit + "; }";
	}
}

/*****************
		push, pull
*/
function attachPushPull() {
	doc_CSS =	doc_CSS
					+ "\n\n[class*='push-'],"
					+ "\n[class*='pull-'] {"
					+ "\nposition: relative; }\n";

	var offset = 0;

	for(var i = 1; columns >= i; ++i) {
		offset = (column_width * i) + (gutter_width * i);

		if ( gs_type_val === "fld" ) {
			offset = percent(offset, total_width);
		}

		doc_CSS =	doc_CSS + "\n.push-" + i + "  { left: " + offset + unit + ";  }";
		doc_CSS =	doc_CSS + "\n.pull-" + i + "  { right: " + offset + unit + ";  }";
	}
}

/*****************
		prefix, suffix
*/
function attachOffset() {
	doc_CSS =	doc_CSS + "\n";

	var offset = 0;

	for(var i = 1; columns >= i; ++i) {
		offset = (column_width * i) + (gutter_width * i);

		if ( gs_type_val === "fld" ) {
			offset = percent(offset, total_width);
		}

		doc_CSS =	doc_CSS + "\n.prefix-" + i + "  { margin-left: " + offset + unit + ";  }";
		doc_CSS =	doc_CSS + "\n.suffix-" + i + "  { margin-right: " + offset + unit + ";  }";
	}
}

/*****************
		isolate
*/
function attachIsolate() {
	doc_CSS =	doc_CSS
					+ "\n\n.row.isolate [class*='col-'] {"
					+ "\nmargin-right: -100%; }\n"

	var offset = 0;

	for(var i = 1; columns >= i; ++i) {
		offset = (column_width * (i-1)) + (gutter_width * (i-1));

		if ( gs_type_val === "fld" ) {
			offset = percent(offset, total_width);
		}

		doc_CSS =	doc_CSS + "\n.row.isolate .o" + i + "  { margin-left: " + offset + unit + ";  }";
	}
}