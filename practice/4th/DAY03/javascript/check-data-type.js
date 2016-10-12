
// 'var' 싱글톤 패턴(singleton pattern)
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
console.log( 'fnc instanceof Function:'	, fnc instanceof Function);


