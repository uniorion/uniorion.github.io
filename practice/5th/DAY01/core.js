
//자바스크립트 데이터 유형
//원시 데이터 유형
var num, str, boo;
num = 1;
str = 'primitive data type';
boo = !0;

// 참조 데이터 유형
var obj, arr, fnc;
fnc = function() {
	console.log('this is function literal');
};
arr = [];
obj = {};

console.log('num:', isType(num));
console.log('str:', isType(str));
console.log('boo:', isType(boo));
console.log('arr:', isType(arr));
console.log('num:', isType(num));
console.log('obj:', isType(obj));

console.log('%c---------------------------------', 'color:#99AE20');

var html, head, body;

html = document.querySelector('html');
head = document.querySelector('head');
body = document.querySelector('body');

console.log('html type:', isType(html));
console.log('head type:', isType(head));
console.log('body type:', isType(body));

console.log('%c---------------------------------', 'color:#99AE20');

var page, wrapper, brand, slogan;

page 		= document.querySelector('.page');
wrapper = document.querySelector('.wrapper');
brand	 	= document.querySelector('.brand');
slogan 	= document.querySelector('.slogan');

console.log('page type:', isType(page));
console.log('wrapper type:', isType(wrapper));
console.log('brand type:', isType(brand));
console.log('slogane type:', isType(slogan));

if ( isType(wrapper) === 'null' ) {
	console.info('문서에 <div class="wrapper"> 요소가 존재하는지 유무를 파악해보세요.');
}

var count = 100;

if ( (count = count - 100) ) {
	console.log('count 변수 값은 0보다 작습니다.');
} else {
	console.log('count 변수 값은 0보다 작지 않습니다.');
}

console.log('count:', count);

console.log('%c---------------------------------', 'color:#99AE20');

var el_demo = page.querySelector(".demo");


//if ( isType(el_demo) !== 'null' ) {
if ( !el_demo ) {
	page.setAttribute('title', '데모없다~');
	page.style.background = '#D529DE';
} else {
	page.setAttribute('title', '데모있다~');
	page.style.background = '#A1F0BE';
}

