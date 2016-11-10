(function(global){
  'use strict';

  var document        = global.document;
  var left_area_el    = document.querySelector('.left-area');
  var right_area_el   = document.querySelector('.right-area');
  var left_box_el     = left_area_el.querySelectorAll('img');
  var right_box_el    = right_area_el.querySelectorAll('img');

  for( var i = 0, l = left_box_el.length; i < l; i++ ) {
    left_box_el[i].onclick = toggleLeftBox;
  }
  for( var i = 0, l = right_box_el.length; i < l; i++ ) {
    right_box_el[i].onclick = toggleRightBox;
  }
  var left_selected_box   = null;
  var right_selected_box  = null;

  function toggleLeftBox() {
    left_box_el     = left_area_el.querySelectorAll('img');
    right_box_el    = right_area_el.querySelectorAll('img');
    for( var i = 0, l = left_box_el.length; i < l; i++ ) {
      left_box_el[i].setAttribute('class', '');
    }
    this.setAttribute('class', 'on');
    left_selected_box = this;
    if ( right_selected_box ) {
      var right_selected_box_next_sibling = right_selected_box.nextSibling;
      left_selected_box.parentNode.replaceChild(right_selected_box, left_selected_box);
      right_selected_box_next_sibling.parentNode.replaceChild(left_selected_box, right_selected_box_next_sibling);
    }
  }
  function toggleRightBox() {
    left_box_el     = left_area_el.querySelectorAll('img');
    right_box_el    = right_area_el.querySelectorAll('img');
    for( var i = 0, l = right_box_el.length; i < l; i++ ) {
      right_box_el[i].setAttribute('class', '');
    }
    this.setAttribute('class', 'on');
    right_selected_box = this;
    if ( left_selected_box ) {
      var left_selected_box_next_sibling = left_selected_box.nextSibling;
      right_selected_box.parentNode.replaceChild(left_selected_box, right_selected_box);
      left_selected_box_next_sibling.parentNode.replaceChild(right_selected_box, left_selected_box_next_sibling);
    }
  }

})(this);