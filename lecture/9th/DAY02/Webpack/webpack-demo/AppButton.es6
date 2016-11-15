let i = 'global `i`';

let $ = require('jquery');

let $all = $('body *');

for ( let i = 0, l = $all.length; i < l; i++ ) {
  console.log('in for statement: ' + i);
}

console.log(i); // `global` i

class AppButton extends HTMLButtonElement {
  constuctor(selector) {

    selector = selector + 0;
    return selector;
  }
  press() {

  }
}

console.log(typeof AppButton);