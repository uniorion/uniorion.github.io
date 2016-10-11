
// 문서에서 제어하고자 하는 요소들을 각각 변수(적절한 이름)에 참조한다.

var container = document.querySelector(".container");
var show_grid_button = document.querySelector(".btn--show-grid");
var hide_grid_button = document.querySelector(".btn--hide-grid");

console.log("container:", container);
console.log("show_grid_button:", show_grid_button);
console.log("hide_grid_button:", hide_grid_button);

//이름이 없는 함수 ( 함수(표현)식, 함수 리터럴, 무명, 익명 함수)
show_grid_button.onclick = function() {
	// console.log("clicked show grid button");
	var pre_assign_class = container.getAttribute("class");
	console.log(pre_assign_class);
	container.setAttribute("class", pre_assign_class + " show-grid");
};

hide_grid_button.onclick = function() {
	var pre_assign_class = container.getAttribute("class");
	console.log(pre_assign_class);
	var remove_class = pre_assign_class.replace("show-grid", "")
	container.setAttribute("class", remove_class.trim());
};	//이름이 없는 함수 ( 함수(표현)식, 함수 리터럴, 무명, 익명 함수)
