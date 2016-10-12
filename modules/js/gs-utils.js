/*---------------------------------
* 
*
*
-----------------------------------*/
function percent(target, context) {
  return target/context * 100;
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