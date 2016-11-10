var k = 90;
var m = -101;
var j = 0;
var b = 2.123134191;
var y = (k + m - j ) * b / m;

console.log("k:", k);
console.log("m:", m);
console.log("j:", j);
console.log("b:", b);
console.log("y:", y);

//자바스크립트 데이터 유형을 체크(감지, 확인, 검토)
console.log("typeof k:", typeof k);
console.log("typeof m:", typeof j);
console.log("typeof j:", typeof j);
console.log("typeof b:", typeof b);
console.log("typeof y:", typeof y);


// ---------------------------------------
var html_is 			= 'HTML은 "문서 구조를 작성하는 언어"이다.';
var css_is				= "css는 \"문서를 시각적으로 꾸며주는 언어\"이다.";
var javascript_is = "javascript는 \'HTML문서를 동적으로 변경/제어하는 인터렉티브 언어\'이다.";

var is_web_programing_languages;
is_web_programing_languages = html_is   + '\n' + css_is + '\n' + javascript_is ;

console.log("web_programing_languages_is:", '\n' + is_web_programing_languages)

// 자바스크립트 불리언 데이터 유형
var fds_true 	= true;
var fds_false = false;

console.log("fds_true:", fds_true);
console.log("fds_false:", fds_false);

console.log("typeof fds_true:", typeof fds_true);
console.log("typeof fds_false:", typeof fds_false);

console.log("%c----------------------------------------------", "color: #55c4e1");

var n		= 0;		// false
var n_1	= 1;		// true
var n_2 = -10; 	// true
var n_3	= 23;		// true

// 형 변환
// Data to Boolean
console.log("typeof n:", Boolean(n));
console.log("typeof n_1:", Boolean(n_1));
console.log("typeof n_2:", Boolean(n_2));
console.log("typeof n_3:", Boolean(n_3));

console.log("%c----------------------------------------------", "color: #55c4e1");

var data1;		// 암묵적으로 변수 초기화
var data2 = null ;
var data3 = undefined;	// 거의 사용되지 않는다.

console.log("data1:", data1);
console.log("data2:", data2);

console.log("%c----------------------------------------------", "color: #55c4e1");
// 형 변환
console.log( "data1:", Boolean(data1) );
console.log( "data2:", Boolean(data2) );
