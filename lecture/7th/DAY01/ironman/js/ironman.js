(function(global){
  
  var messages = [];
  messages.push('Function is Object.');
  messages.push('Function objects can be invoked later.');
  messages.push('JavaScript\'s Function is First Class Object.');

  var now_index = 0;

  var document                = global.document; 
  var el_message              = document.querySelector('.message');
  var el_ironman_print_button = document.querySelector('.ironman-print-button');

  el_ironman_print_button.onclick = function() {
    
    var idx =  now_index % messages.length

    el_message.innerText = messages[idx];

    now_index++;
  }

})(this);