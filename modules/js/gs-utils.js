/*---------------------------------
* 
*
*
-----------------------------------*/
function percent(target, context) {
  return target/context * 100;
}

function px2pt(px) {
    return px * (72/96);
}


// function toggleGrid()
function toggleGrid() {
  var _container = document.querySelector('.container');
  
  if ( _container.classList.contains('show-grid')  ) {
    _container.classList.remove('show-grid');
  }
  else {
    _container.classList.add('show-grid');
  }
}