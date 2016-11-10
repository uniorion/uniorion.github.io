(function($){
  'use strict';

  // GET
  // .width()
  // .height()

  // SET
  // value type: number or string(e.g %, em, rem)
  // .width(value)
  // .height(value)

  // Arrow Function
  // var myFn = (who) => {
  //   who + 'my arrow function';
  // };

  var $boxes = $('.box');
  var box_width = 100;
  var effect_sound = new Audio();
  effect_sound.src = 'media/pop.mp3';
  
  var fireEffectSound = function() {
    effect_sound.pause();
    effect_sound.currentTime = 0;
    effect_sound.play();
  }

  $boxes.one('click', function() {
    fireEffectSound();
    box_width = box_width - 10;
    $(this)
      .css('flex', 'none')
      .addClass('clicked')
      .width(box_width)
      .height(box_width);
  });


  console.log( $('.box1').width() );

  $('.box1').outerWidth(300);
  // $('.box1').width(200);

  console.log( $('.box1').width() );

  $('.innerBox').on('click', function(ev) {
    ev.stopPropagation();
    $(this)
      .offset(function(i, os) {
        console.log(os);
        return {
                'top':  os.top  + 100,
                'left': os.left + 100
               }
      })
      .width(function(i, w){
        return w + 50;
      })
      .height(function(i, h){
        return h + 50;
      });
  });
})(jQuery);