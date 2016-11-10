jQuery(function($) {
  'use strict';

  var $doc = $('html, body');
  var $scroll_menu_ul = $('.scroll-menu ul');

  $('.scroll-menu a').on('click', function(evt) {
    evt.preventDefault();
    var scroll_menu_ul_height = window.parseInt( $scroll_menu_ul.css('height'), 10 );
    var target_id             = this.getAttribute('href');
    var $target               = $(target_id);

    $doc.stop().animate({
      'scrollTop': $target.offset().top,
      'scrollLeft': $target.offset().left
    },  {
      duration: 1000,
      step: function(){
       console.log(arguments);
    }}, 'easeInOutCirc');
  });

});