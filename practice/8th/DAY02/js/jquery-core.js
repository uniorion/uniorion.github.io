// </body> 끝에서 
(function($){
  'use strict';
  // $ === jQuery
  
  var $body = $('body').attr('data-end-body', 'yes');

  console.log('$body: ', $body);

})(jQuery);

// 외부에 공개될 네임스페이스 객체
this.fds = (function(){
  // 반환 객체
  return {
    // $ 속성에 jQuery 팩토리 함수 참조
    $: jQuery.noConflict(true)
  }
})();