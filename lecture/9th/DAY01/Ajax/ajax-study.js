(function(global){
  'use strict';

  var createXHR;

  if ( this.XMLHttpRequest ) {
    // IE 7+, Modern Web Browser
    createXHR = function() {
      return new this.XMLHttpRequest();  
    };
  }
  else {
    //  IE 6
    createXHR = function() {
      return new ActiveXObject('Microsoft.XMLHTTP');  
    }
  }
  global.crateXHR = createXHR;

})(this);

(function(global, Ajax){
  'use strict';

  var document = global.document;
  var xhr = new Ajax();

  // 동기(Sync) 방식으로 통신
  // 전달인자 1. '통신 방법'
  // 전달인자 2. '파일 경로'
  // 전달인자 3. '비동기 설정' [비동기:true, 동기:false]
  xhr.open('GET', './data/data.txt'); // default value: true -> 비동기 (Async)


  // 2초가 지난 뒤에 send()
  // global.setTimeout(function() {
  //   xhr.send();
  // }, 2000);
  
  var ajax_call_button      = document.querySelector(".call-ajax-data");
  var ajax_call_data_result = document.querySelector(".ajax-data-result");

  // 비동기 통신 상태를 감지하여 콜백 처리하는 이벤트 구문
  // 신형 이벤트 모델 IE 9+
  xhr. addEventListener('readystatechange', checkAjaxCommunication);
  // 구형 이벤트 모델
  // xhr.onreadytatechange = checkAjaxCommunication;

  function checkAjaxCommunication() {
    if ( xhr.status === 200 && xhr.readyState === 4 ) {
      console.log("데이터 통신에 성공했습니다. :-)");
      console.log("xhr.response: ", xhr.response);
      console.log("xhr.responseText: ", xhr.responseText);
      ajax_call_data_result.innerHTML = xhr.responseText;
    }
    // else {
    //   console.log("데이터 통신에 실패했습니다. :-(");
    //   ajax_call_data_result.innerHTML = "데이터 통신에 실패했습니다. :-(";
    //   ajax_call_data_result.classList.add('error');
    // }
  }

  ajax_call_button.addEventListener('click', callAjaxData);

  function callAjaxData(e) {
    xhr.send();
  }

})(this, this.XMLHttpRequest);