// 요소찾아 변수에 담기
var 	el_gs_type_stt 		= document.getElementById('rdo_gs_type_stt')
		, el_gs_type_fld 		= document.getElementById('rdo_gs_type_fld')
		, el_total_width 		= document.getElementById('txt_total_width')
		, el_columns 				= document.getElementById('txt_columns')
		, el_margin_width 	= document.getElementById('txt_margin_width')
		, el_gutter_width 	= document.getElementById('txt_gutter_width')
		, el_txta_css				= document.getElementById('txta_css')
		, el_btn_calculate 	= document.getElementsByClassName('btn_calculate')[0];

var  	gs_type_val 	= getRadioCheckedValue('rdo_gs_type')
		, total_width 	= null
		,	columns 			= null
		,	margin_width 	= window.parseInt(el_margin_width.value, 10)
		,	gutter_width 	= null;

var 	unit = 'px';

var 	margin_width_fix 		= margin_width
    , column_width 				= 0
    , total_gutter_width	= 0
    , ex_margin 					= 0
    , total_column_width	= 0
    , mod_column_width 		= 0;


function calcGrid() {

	total_width 		= window.parseInt(el_total_width.value, 10);
	columns 				= window.parseInt(el_columns.value, 10);
	margin_width 		= window.parseInt(el_margin_width.value, 10);
	gutter_width 		= window.parseInt(el_gutter_width.value, 10);

	total_gutter_width	= gutter_width * ( columns - 1 );			// 거터의 총넓이
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
			console.log("정수 계산 안됨.");
			return;
		}
		mod_column_width = mod_column_width + 1;
		margin_width_fix = margin_width_fix + (mod_column_width / 2);
		calcGrid();
	}
	else
	{
		console.log("calcGrid() : ex");
	}
}


function displayResult() {

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
// Calculate
el_btn_calculate.onclick = function() {
	calcGrid();

	console.log("column_width : ", column_width);
	console.log("margin_width_fix : ", margin_width_fix);
	console.log("mod_column_width : ", mod_column_width);
};
// 라디오 버튼
el_gs_type_stt.onclick = function() {
	gs_type_val = getRadioCheckedValue('rdo_gs_type');
	console.log(gs_type_val);
};
el_gs_type_fld.onclick = function() {
	gs_type_val = getRadioCheckedValue('rdo_gs_type');
	console.log(gs_type_val);
};
