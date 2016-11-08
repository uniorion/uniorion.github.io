(function(global, $){
  'use strict';

  // Native
  
  var getStyle = (function() {
    var _getStyle;

    // W3C 표준
    if (window.getComputedStyle) {
      _getStyle = function(el, property) {
        return window.getComputedStyle(el, null)[property];
      }
    }
    // MS
    else {
      _getStyle = function(el, property) {
        return el.currentStyle[property];
      }
    }
    return _getStyle;
  })(); 

  // SET
  var brand = document.querySelector('.brand');
  brand.style.color = '#9E49A3';

  // GET
  var n_bfs = getStyle(brand, 'font-size');
  console.log('n_bfs :', n_bfs);

  // jQuery
  // 문서 객체 대상 참조
  var $brand = $('.brand');
  // SET
  $brand.css('color', '#9E49A3');

  // GET
  console.log($brand.css('font-size')); 


  $brand.css({
    'font-size': '2rem',
    'letter-spacing': '0.03em',
    'font-weight': '700',
    'font-family': 'Spoqa Han Sans',
    'color': '#CD2424',
    'padding': '1em 1.2em',
    'border': '3px solid currentColor',
    'margin': '1em',
    'border-radius': '0.3125rem'
  });
  
  // jQuery 이벤트 설정
  $brand.on('click', function() {
    // $brand.css({
    //   'width': function(idx, current_width) {
    //     var changed_width = global.parseFloat(current_width)
    //   },
    // });
    
    // Native 로 작성
    var props = $brand.css( ['font-size', 'width', 'word-spacing'] );
    var html_string = [ '<h3>brand properties</h3>' ]

    for ( var prop in props ) {
      html_string.push('<p><code>' + prop + ': ' + props[prop] + '</code></p>');
    }

    $('.you').html(html_string.join(''));

  });
 

})(this, this.jQuery);