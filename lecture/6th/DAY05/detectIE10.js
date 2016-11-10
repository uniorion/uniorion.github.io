// IE 10, 11의 식별자를 통해 브라우저 감지하는 작은 프로그램
// [IE 10] MSIE 10.0
// [IE 11] rv:11.0

(function(global){
  'use strict';
  var html = global.document.documentElement,
      pre_class = html.getAttribute('class') || '',
      userAgent = global.navigator.userAgent.toLowerCase();

  var detectIE = function(version_id, class_name) {
    if ( typeof version_id !== 'string' || typeof class_name !== 'string' ) {
      throw new Error('첫번째, 두번째 전달인자 모두 문자열이어야 합니다.');
    }

    if ( userAgent.indexOf(version_id) > -1 ) {
      html.setAttribute('class', (pre_class + ' ' + class_name).trim());
    }
  };
    
  detectIE('msie 10.0', 'ie10');
  detectIE('rv:11.0', 'ie11');
  
})(this);