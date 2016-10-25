var condition = true, count = 0;

while (condition) {
	if ( ++count > 3 ) {
		condition = !condition;
	}
	console.log('count: ', count);
}

do {
	if ( ++count > 3 ) {
		condition = !condition;
	}
} while(condition)
console.log('count: ', count);

// 1부터 100까지 숫자를 합한 값을 for문으로 구하시오.
var sum = 0;
for ( var i = 1; i <= 100; i++ ) {
	sum = sum + i;
}
console.log('sum: ', sum);

var fds = {}; // 객체 리터럴(값)
fds.name = 'Front-End Develop SCHOOL';

console.log(fds['name'], 'name' in fds);

for (var prop in fds) {
	console.log('prop:', prop)
	console.log('fds[prop]:', fds[prop]);
	console.log('fds[prop] === fds.name:', fds.name);
}

// 함수 선언식 
function fnName() {}

// 함수 표현식 
var fnName2  = function(){};