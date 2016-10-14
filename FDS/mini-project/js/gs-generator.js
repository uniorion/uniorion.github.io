
var el_body 				= document.querySelector('body');
var el_rdo_gs_type 	= document.getElementById('rdo_gs_type');
var el_total_width 	= document.getElementById('txt_total_width');
var el_columns 			= document.getElementById('txt_columns');
var el_margin 			= document.getElementById('txt_margin');
var el_gutter 			= document.getElementById('txt_gutter');
var el_txta_css			= document.getElementById('txta_css');

// 퍼센트 반환 함수
function percent(target, context) {
  return target/context * 100;
}
