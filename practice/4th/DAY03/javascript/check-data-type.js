
// 싱글 'var' 패턴(single 'var' pattern)
var num = 102,
		str = 'typeof는 함수가 아니다.',
		boo = !false,
		fnc = function() {},
		arr = [num, boo, fnc],
		obj = {"number_type": num, "boolean": boo };

// 원시 데이터 유형
console.log("num 변수에 복사된 데이터 유형:", typeof num);
console.log("str 변수에 복사된 데이터 유형:", typeof str);
console.log("boo 변수에 복사된 데이터 유형:", typeof boo);

// 참조데이터 유형 
console.log("fnc 변수에 참조된 데이터 유형:", typeof fnc);
console.log("arr 변수에 참조된 데이터 유형:", typeof arr);
console.log("obj 변수에 참조된 데이터 유형:", typeof obj);
console.log("null 데이터 유형:", typeof null);

// 의도한 결과를 원한다면 ()를 사용하여야 한다.
console.log( typeof num + str );	// 8 + '' => 8
console.log( typeof (num + str) );	// 8 + '' => 8

console.log( 'obj instanceof Object:'		, obj instanceof Object);
console.log( 'arr instanceof Array:'		, arr instanceof Array);
console.log( 'arr instanceof Object:'		, arr instanceof Object);
console.log( 'fnc instanceof Function:'	, fnc instanceof Function);

// 원시 데이터 유형의 경우, instanceof를 통해 기대하는 바를 도출할 수 없다.
// 이유는 원시 데이터 유형은 실상 객체가 아닌, 값이기 때문이다.
// 다만 자바스크립트 엔진이 원시 데이터 유형(null, undefined 제외)의 값을 마치 객체인 것처럼 사용할 수 있게 만들어 준다.
console.log( 'num instanceof Number:', num instanceof Number);
console.log( 'str instanceof String:', str instanceof String);
console.log( 'boo instanceof Boolean:', boo instanceof Boolean);

console.log( "num.constructor : ", num.constructor );
console.log( "num.constructor === Number : ",  num.constructor === Number );
console.log( "str.constructor : ", str.constructor );
console.log( "str.constructor === String : ",  str.constructor === String );
console.log( "boo.constructor : ", boo.constructor );
console.log( "boo.constructor === Boolean : ",  boo.constructor === Boolean );
console.log( "fnc.constructor : ", fnc.constructor );
console.log( "fnc.constructor === Function : ",  fnc.constructor === Function );
console.log( "arr.constructor : ", arr.constructor );
console.log( "arr.constructor === Array : ",  arr.constructor === Array );
console.log( "obj.constructor : ", obj.constructor );
console.log( "obj.constructor === Object : ",  obj.constructor === Object );

// 언어 차원에서 지원되지 않는 사용자 정의 함수
// isType() 유틸리티 헬퍼 함수
// 객체가 아닌 유형도 검증이 가능 
function isType(data) {
	return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}
