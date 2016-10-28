/*! bom+dom.js © yamoo9.net, 2016 */

// Module Pattern
(function(global){
  'use strict';

  /////////
  // BOM //
  /////////

  // 브라우저 객체 모델
  // 브라우저를 구성하는 객체들
  // window {} : Global Object
  // window 객체에 종속된 하위 객체들
  // window.screen {}
  // 사용자의 스크린에 관한 정보를 제공하는 객체
  
  // 함수 갈무리
  function screenInfo() {

    var screen                  = global.screen;
    var _screen_info            = {};

    _screen_info.width            = screen.width;
    _screen_info.height           = screen.height;
    _screen_info.avail_width      = screen.availWidth;
    _screen_info.avail_height     = screen.availHeight;
    _screen_info.avail_top        = screen.availTop;
    _screen_info.avail_left       = screen.availLeft;
    _screen_info.resolution       = _screen_info.width +'x' + _screen_info.height;
    _screen_info.avail_resolution = _screen_info.avail_width +'x' + _screen_info.avail_height;

    // 스크린 Gap에 대한 정보를 가진 객체
    _screen_info.gap = {
      'width': _screen_info.width - _screen_info.avail_width,
      'height': _screen_info.height - _screen_info.avail_height
    };

    // 객체 반환
    return _screen_info;
  }

  // 모듈 내에서만 사용가능
  // 모듈 내부에 감춰진 함수
  console.log( screenInfo() );

  // 외부에  해당 함수를 공개하고 싶다. 
  // 노출 패턴
  global.screenInfo = screenInfo(); // 함수를 실행한 결과 값(객체)을 screenInfo 에 참조
  global.screenInfo = screenInfo;   // 함수 객체를 screenInfo에 참조

  //-----------------------------------------------------------------

  // window.location
  // 웹 브라우저의 주소 창의 정보를 가지고 있는 객체
  console.dir( global.location );



  // window.history
  // window.navigator
  // 웹 브라우저의 정보를 가진 객체
  // 브라우저 스니핑
  var navigator = global.navigator;
  var platform  = navigator.platform;
  var is_mac    = platform.toLowerCase().indexOf('mac') > -1;
  var is_win    = platform.toLowerCase().indexOf('win') > -1;
  var html      = window.document.documentElement;

  html.className = is_mac ? 'mac' : 'win';

  // window.document

  // --------------------------------------------------------------------------------

  /////////
  // DOM //
  /////////

  // 문서 객체 모델
  // "DOM을 깨우치다."



}(this));