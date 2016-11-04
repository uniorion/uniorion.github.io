// 생성자 함수
function Tab(selector) {
  this.el = document.querySelector(selector);
}

// 프로토타입
// Tab.prototype; // {}
// 프로토타입 객체의 능력을 확장
// 탭 컴포넌트 만들어 지면서 어떤 일들이 일어날까?
Tab.prototype.init        = function() {};
Tab.prototype.activeTab   = function(index) {};
Tab.prototype.deactiveTab = function() {};
Tab.prototype.playTab     = function(duration) {};
Tab.prototype.stopTab     = function() {};

// 인스턴스 객체 생성
var header_tab, main_tab, footer_tab;

header_tab  = new Tab('.header .tab');
main_tab    = new Tab('.main .tab');
footer_tab  = new Tab('.footer .tab');

