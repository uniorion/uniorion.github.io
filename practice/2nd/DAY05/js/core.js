// 원시 데이터 유형
var fds_model	= "데이터 리스트";	//문자열
var current_state = 200;	// 숫자
var is_finished	= false;	// 불리언
var container_el = null		// 비어있다.
var my_name;							// 변수 선언만 하게 되면 undefined

//다른 변수에 model 이름 붙여진 메모리 공간의 데이터를 복사
var fds_view = fds_model;

// 현재 코드 라인에서는 결과 값이 동일하다. (동일한 데이터가 각 변수에 복제되었다.)
console.log("fds_model", fds_model);
console.log("fds_view", fds_view);

// fds_model 변수 값이 fds_view 변수에 복제되었기 때문에 둘의 결과 값은 동일하다.
console.log("fds_model === fds_view : ", fds_model === fds_view);

var fds_model = "Front-End Dev.";

console.log("fds_model:", fds_model);
console.log("fds_view:", fds_view);

console.log("fds_model === fds_view : ", fds_model === fds_view);
console.log("---------------------------------------");

var parent_value	= document.getElementById("parent");
var one_value 		= document.getElementById("child-one");
var two_value 		= document.getElementById("child-two");

console.log("parent_value:"	, parent_value);
console.log("one_value:"		, one_value);
console.log("two_value:"		, two_value);

parent_value.style.padding = "5px";
parent_value.style.border = "1px solid #9a9a9a";
one_value.style.border = "1px solid #a8b743";
two_value.style.background = "#d84301";