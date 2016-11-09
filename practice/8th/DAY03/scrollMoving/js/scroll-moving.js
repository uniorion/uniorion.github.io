jQuery(function($) {
  'use strict';

  var $doc = $('html, body');
  var $scroll_menu_ul = $('.scroll-menu ul');

  $('.scroll-menu a').on('click', function(evt) {
    console.dir(evt);
    evt.preventDefault();
    evt.stopPropagation();
    var scroll_menu_ul_height = window.parseInt( $scroll_menu_ul.css('height'), 10 );
    var target_id             = this.getAttribute('href');
    var $target               = $(target_id);

    $doc.animate({
      'scrollTop': $target.offset().top - scroll_menu_ul_height
    }, 400, 'easeInOutCirc');
  });

});