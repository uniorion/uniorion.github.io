(function(global){
  'use strict';

  var document      = global.document;
  var el_header     = document.querySelector('header');
  var btn_hambuger  = el_header.querySelector('.btn-hambuger');
  var logo          = el_header.querySelector('.logo');
  var gnb           = el_header.querySelector('header nav');

  /**
   * 스크롤 세로 위치값을 반환
   * @return {[type]} [description]
   */ 
  var getScrollY = function() {
    if ( global.scrollY ) {
      return global.scrollY;
    }
    else {
      return global.scrollTop;
    }
  };

  global.onresize = function() {
    // 브라우저 width 감지하여 750px 초과 시 
    // gnb 메뉴가 열려 있으면 닫기
    var device_width = getWindowWidth();
    if ( device_width > 750 ) {
      isGnbOpen() ? toggleGnb() : false;
    }
    else {
      // 750px 이하 시 gnb메뉴 감추기
      fixTopMenu();
    }
  };

  // gnb 메뉴 fix 처리
  global.onscroll = fixTopMenu;

  // 클릭 시 gnb 메뉴 토글
  btn_hambuger.onclick = toggleGnb;

  //-----------------------------------------------------------------
  /**
   * 세로 스크롤 값에 따라 상단에 gnb 메뉴 fix
   * @return {[type]} [description]
   */
  function fixTopMenu() {
    var device_width  = getWindowWidth();
    var scroll_y      = getScrollY() || 0;
    var cl_header     = el_header.getAttribute('class');

    if (scroll_y <= 86) {
      // fix 된 gnb 메뉴 제거
      el_header.classList.remove( 'top-fix');
    }
    else {
      el_header.classList.add( 'top-fix' );
    }
  }

  /**
   * mobile_gnb 메뉴가 열려있는지 확인
   * @return {Boolean} [true:열림 / false:닫힘]
   */
  function isGnbOpen() {
    var cl_gnb = gnb.getAttribute('class') || '';
    return cl_gnb.indexOf('on') > -1 ? true : false;
  }

  /**
   * mobile_gnb 메뉴 top에 고정된 상태인지 확인
   * @return {Boolean} [true:고정 / false:비고정]
   */
  function isGnbFix() {
    var cl_header = el_header.getAttribute('class') || '';
    return cl_header.indexOf('top-fix') > -1 ? true : false;
  }

  /**
   * mobile_gnb 메뉴 토글
   * @return 없음
   */
  function toggleGnb() {
    var cl_gnb          = gnb.getAttribute('class') || '';
    var cl_logo         = logo.getAttribute('class') || '';
    var cl_btn_hambuger = btn_hambuger.getAttribute('class') || '';

    if ( cl_gnb.indexOf('on') > -1 ) {
      // 열림 상태 => 닫음
      gnb.classList.remove('on');
      logo.classList.remove('menu-on');
      btn_hambuger.classList.remove('menu-on');
    } 
    else {
      // 닫힘 상태 => 열림
      gnb.classList.add('on');
      logo.classList.add('menu-on');
      btn_hambuger.classList.add('menu-on');
    }
  }

  /**
   * 브라우저 width 값을 반환
   * @return {integer} 
   */
  function getWindowWidth() {
      return global.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }

})(this);