(function(global, $){
  'use strict';

  // jQuery 인스턴스 메소드 === jQuery.fn의 메소드
  // jQuery {} 인스턴스 객체를 만들어야 사용 가능한 메소드
  // 인라인 스타일을 설정하는 jQuery 인스턴스 메소드 .css()
  
  // 1. 스타일 속성 값을 가져오는 형식
  var $demo_container = $('.demo-container');
  console.log($demo_container.css('display'));

  // 2. 값을 전달하면 인라인 스타일로 해당 요소에 적용하기 위한 형식
  $demo_container.css('background', 'linear-gradient(#777, #000)');

  // 3. 복수의 속성들을 일괄적으로 적용하기 위한 형식
  $demo_container.css({
    'flex-direction': 'column',
    'flex-wrap': 'wrap',
    'align-content': 'flex-start'
  });
  
  // 4. 해당 요소로부터 복수의 속성 값을 배열로 전달해서, 객체로 반환 받고자 할 경우
  var container_props = $demo_container.css( ['flex-flow', 'justify-content'] );

  console.log('container_props: ', container_props);

  var $album = $('.album');

  $('img', $album).css({
    'display': function(idx, prop) {
      if ( idx === 2 && !container_props.display ) {
        container_props.display = prop;
      } else {
        prop = 'inline-block';
        return prop;
      }
    }
  });

  // 일반적인 방법
  // $album.on('click', moveDisk);
  // $album.on('mouseenter', playDisk);
  // $album.on('mouseleave', stopDisk);

  // 메소드 체이닝
  // $album
  //   .on('click', moveDisk)
  //   .on('mouseenter', playDisk)
  //   .on('mouseleave', stopDisk);

  // 객체 리터럴 활용
  $album.on({
    'mouseenter': moveDisk,
    'click'     : playDisk,
    'dblclick'  : stopDisk
  });

  var is_click = false;

  function moveDisk() {
    // console.log(this);  // DOM 객체
    // console.log('$(this) : ', $(this)); // jQuery 객체
    // 가능하다면 DOM 메소드로 처리해라!!!!!
    // this.getAttribute('class');
    // $(this).attr('class');
    
    // this.querySelector('.album-disk').classList.add('move');    // IE 9+ 
    $(this).find('.album-disk').addClass('move');
  }

  function playDisk() {
    $(this).find('.album-disk').addClass('play').removeClass('move');
  }

  function stopDisk() {
    $(this).find('.album-disk').removeClass('play').addClass('stop');
  }


}); // (this, this.jQuery)

(function(global, $){
  'use strict';

  // jQuery class attribute Methods
  // .addClass()
  // .removeClass()
  // .hasClass()
  // .toggleClass()
  
  $('.album img')
    .addClass('its-image')
    .addClass(function(index, current_class) {
      if ( index % 2 ) {
        return current_class += ' 2nd';
      }
    })
    // .removeClass('');       // 값만 모두 제거
    // .removeClass('2nd its-image'); // 제거할 클래스 이름 설정
    .removeClass(function(index, current_class) {
      var remove_class_name = '2nd';
      var reg = new RegExp(remove_class_name);
      if ( reg.test(current_class) ) {
        return remove_class_name;
      }
    });
    
  // .hasClass() 
  
  $('.demo-container *').addClass(function(index, current_class) {
    // console.log(this); // DOM object
    
    // Native
    // if ( this.classList.contains('album-vinyl') ) {
    //   return 'source-vinyl-stream';
    // }

    // jQuery
    if ( $(this).hasClass('album-vinyl') ) {
      return 'source-vinyl-stream';
    }

  });
    
  //-----------------------------------------------------------------
  // .toggleClass()
  
  $('.album').on('click', function() {
    // Native
    var vinyl = this.querySelector('.album-vinyl');
    vinyl.classList.toggle('toggle');

    if ( vinyl.classList.contains('toggle') ) {
      vinyl.classList.remove('toggle');
    } else {
      vinyl.classList.add('toggle');
    }

    // jQuery
    var $vinyl = $(this).find('.album-vinyl');
    $vinyl.toggleClass('toggle');

    if ( $vinyl.hasClass('toggle') ) {
      $vinyl.removeClass('toggle');
    } else {
      $vinyl.addClass('toggle');
    }
  });

  

})(this, this.jQuery);