var fds = (function(global, jQuery){
  'use strict';

  // jQuery 사용가능
  // 외부에서 접근이 불가능한 private jQuery
  var $ = jQuery;

  var $target;
  // 요소(타입) 셀렉터
  $target = $('article');

  // 그룹핑
  $target = $('img, h2, li');

  // 자손(하위) 선택자
  $target = $('[class^="post-"] ul');

  // 자식 선택자
  $target = $('li', $target);
  $target = $('ol > li');

  // 클래스 선택자
  $target = $('.reset-list');

  // 멀티 클래스 선택자
  $target = $('.reset-list.clearfix');

  // 아이디 선택자
  $target = $('#page');

  // 유니버셜 선택자
  $target = $('article *');

  // 인접 형제 선택자
  // 인접한 1개만 선택
  $target = $('img + *');

  // 일반 형제 선택자
  // 다음에 나오는 모든 형제들 선택
  $target = $('.clearfix ~ p');

  // 속성 선택자
  $target = $('[title]');
  $target = $('[src]');

  // 속성 선택자 일치
  $target = $('[alt="one"]');

  // 속성 선택자 시작
  $target = $('[title^="article"]');

  // 속성 선택자 끝
  $target = $('[class$="hidden"]');

  // 속성 선택자 공백 구분 (~)
  $target = $('[title~=article]');

  // 속성 선택자 대쉬 구분 (|)
  $target = $('[lang|="en"]');

  // 속성 선택자 *
  $target = $('[src*="?"]');

  // 멀티 속성 선택자 [][]
  $target = $('[id*="n"][class="brand"]');

  // 가상 클래스 선택자 (상태)
  $target = $(':root');
  $target = $(':target');
  $target = $(':enabled');
  $target = $(':disabled');
  $target = $(':checked');

  $('td:first')
  $('td:eq(0)');
  $('td').eq(0);
  $('td').first();




  // 선택된 집합(요소)에 클래스 속성 설정
  $target.addClass('selected');

  // jQuery 플러그인 제작
  $.fn.gt = function(n) {
    // this 는 jQuery Instance
    return this.slice(n+1);
  }

  return {
    $: jQuery // 비공개 멤버인 jQuery에 접근 가능한 유일한 방법: 특권 부여
  }
  
})(this, this.jQuery.noConflict(true)); // 전역에 공개된 jQuery를 포기하고 반환된 jQuery 객체를 함수에 전달

//////////////////////////////////////////
// this.jQuery.noConflict(true) 처리 결과
//////////////////////////////////////////
// $ != jQuery
// jQuery === undefined
// fds.$ === jQuery
//////////////////////////////////////////

(function(fds){
  'use strict';

  var jQuery_version = fds.$().jquery;

  console.log('jQuery_version: ', jQuery_version);

})(this.fds);