const  GRID_COL_COLOR_START 	= 'hsla(190, 84%, 59%, 0.5)'
		 , GRID_COL_COLOR_END 		= 'hsla(163, 64%, 49%, 0.2)'
 		 , GRID_LINE_COLOR				= '#7400ff';

var 	unit = 'px';

// 요소찾아 변수에 참조
var 	el_gs_type_stt 		= document.querySelector('#rdo_gs_type_stt')
		, el_gs_type_fld 		= document.querySelector('#rdo_gs_type_fld')
		, el_total_width 		= document.querySelector('#txt_total_width')
		, el_columns 				= document.querySelector('#txt_columns')
		, el_margin_width 	= document.querySelector('#txt_margin_width')
		, el_gutter_width 	= document.querySelector('#txt_gutter_width')
		, el_txta_css				= document.querySelector('#txta_css')
		, el_btn_calculate 	= document.querySelector('.btn-calculate')
		, el_btn_download 	= document.querySelector('.btn-download')
		, el_content_area 	= document.querySelector('#txt_content_area')
		, el_column_width 	= document.querySelector('#txt_column_width')
		, el_fixed_margin 	= document.querySelector('#txt_fixed_margin')
		, el_opt_pu 				= document.querySelector('#chk_opt_pu')
		, el_opt_fix 				= document.querySelector('#chk_opt_fix')
		, el_opt_isolate 		= document.querySelector('#chk_opt_isolate')
		, el_recommend_alert= document.querySelector('.recommend_alert');

var  	gs_type_val 				= getRadioCheckedValue('rdo_gs_type')
		, total_width 				= 0
		,	columns 						= 0
		,	margin_width 				= window.parseInt(el_margin_width.value, 10)
		,	gutter_width 				= null
		,	margin_width_fix 		= 0
    , column_width 				= 0
    , total_gutter_width	= 0
    , ex_margin 					= 0
    , total_column_width	= 0
    , mod_column_width 		= 0;

function setInputValue() {
	total_width 		= window.parseInt(el_total_width.value, 10);
	columns 				= window.parseInt(el_columns.value, 10);
	margin_width 		= window.parseInt(el_margin_width.value, 10);
	gutter_width 		= window.parseInt(el_gutter_width.value, 10);	
	margin_width_fix = margin_width;
	
	if ( columns === 1 ) {
		gutter_width = 0;			// 컬럼이 하나이면 거터값 무시하고 계산
	}
}
	
// 그리드 요소 값 계산
function calcGrid() {
	total_gutter_width	= gutter_width * ( columns - 1 );					// 거터의 총넓이
	ex_margin 					= total_width - ( margin_width_fix * 2 );	// 총넓이에서 양쪽마진값을 뺀 값
	total_column_width	= ex_margin - total_gutter_width;					// 컬럼의 총넓이
	mod_column_width 		= total_column_width % columns;

	if ( mod_column_width === 0 ) 	// 총컬럼 넓이를 컬럼수로 나누어 0 떨어지면 ok
	{
		console.log("calcGrid() : 0");
		column_width = total_column_width / columns;
	} 
	else if ( isEven( mod_column_width ) === true ) 	// 총컬럼 넓이를 컬럼수로 나눈 값이 짝수이면
	{
		console.log("calcGrid() : even");
		// 나머지의 1/2를 마진값에 더하여 다시 계산
		margin_width_fix = margin_width_fix + (mod_column_width / 2);
		calcGrid();
	}
	else if ( isEven( mod_column_width ) === false ) 	// 총컬럼 넓이를 컬럼수로 나눈 값이 홀수이면
	{
		console.log("calcGrid() : odd");
		if ( isEven( columns ) === true ) {	// 나머지가 홀수일 때, 컬럼수가 짝수이면 정수 계산이 안됨.
			console.log("정수로 계산 안됨.");					// ************* 경고 디스플레이 처리 필요
			showAlert();
			return false;
		}
		mod_column_width = mod_column_width + 1;
		margin_width_fix = margin_width_fix + (mod_column_width / 2);
		calcGrid();
	}
	return true;
}

// 결과값 보여주기
function displayResult() {
	el_content_area.value = total_width;
	el_column_width.value = column_width;
	el_fixed_margin.value	= margin_width_fix;
	el_txta_css.innerText = doc_CSS;
} 

function isType(data) {
    return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}
// 정수형 check 
function isInt(num) {
	if ( isType(num) !== 'number' ) {
		return false;
	}
	var str = String(num)
	if ( str.indexOf('.') === -1 ) {
		return true;
	} else {
		return false;
	}
}
// 짝수 check
function isEven(num) {
	if ( isType(num) !== 'number' ) {
		return false;
	}
	if ( (num % 2) === 0 ) {
		return true;
	} else {
		return false;
	}
}

// 퍼센트 반환 함수
function percent(target, context) {
  return target / context * 100;
}

// 라디오버튼 그룹 중 check 된 요소의 값 반환
function getRadioCheckedValue(rdo_name) {
	var _rdo_group = document.getElementsByName(rdo_name);

	for(var i=0; _rdo_group.length > i; ++i) {
		 if( _rdo_group[i].checked === true ) {
		 		return _rdo_group[i].value;
		 }
	}
}

/*
	이벤트 연결
*/
// Calculate 버튼
el_btn_calculate.onclick = function() {
	hiddenAlert();
	setInputValue();
	if ( calcGrid() ) {
		setCSS();
		displayResult();
	}
};
// 라디오 버튼
el_gs_type_stt.onclick = function() {
	gs_type_val = getRadioCheckedValue('rdo_gs_type');
	(gs_type_val === "stt") ? unit = 'px' : unit = '%';
};
el_gs_type_fld.onclick = function() {
	gs_type_val = getRadioCheckedValue('rdo_gs_type');
	(gs_type_val === "stt") ? unit = 'px' : unit = '%';
};

// 경고 노출 
function showAlert() {
	var str_class = el_recommend_alert.getAttribute('class');
	str_class = str_class.replace(' on', '');
	el_recommend_alert.setAttribute('class', str_class + ' on');
}
// 경고 숨김
function hiddenAlert() {
	var str_class = el_recommend_alert.getAttribute('class');
	str_class = str_class.replace(' on', '');
	el_recommend_alert.setAttribute('class', str_class);
}