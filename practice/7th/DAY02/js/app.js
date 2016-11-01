// 의존 모듈 주입 (Dependency Module Injection)
// DOM_Helper 모듈
(function(global, $){
  'use strict';

  var gnb                  = $.query('#gnb');
  var gnb_first            = $.first(gnb);
  var gnb_first_first      = $.first(gnb_first);
  var gnb_first_first_next = $.next(gnb_first_first);
  var gnb_links            = $.queryAll('a', gnb);
  var gnb_prev_el          = $.next(gnb_links[1]);
  var gnb_next_p           = $.next(gnb);
  var gnb_next_p_parent    = $.last(gnb_links[3]);

  console.log('gnb_first_first_next:', gnb_next_p);

})(this, this.DOM_Helper);