
(function(global){
   'use strict';

   var works_box2 = document.querySelector('.box2');
   var works_box2_img = works_box2.querySelector('.rwd-img');
   var works_box2_hover = works_box2.querySelector('.box2-hover');

    works_box2.addEventListener('mouseover',function(){
          works_box2_hover.style.display = 'block';

    })
    works_box2.addEventListener('mouseleave',function(){
          works_box2_hover.style.display = 'none';

    })
    
})(this);