this.FDS = (function(global){
  
  // 외부에서 접근이 불가능한 생성자 함수
  function Tab(el) {
    this.el = el;
    this.init();
  }

  Tab.prototype = {
    'init': function() {
      // 애플리케이션 초기화
    }
  }

  return {
    'Tab': Tab
  }
})(this);