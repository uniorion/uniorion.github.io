
// 조건이 참이 동안(while condition is true) 코드 반복 실행
var num = 0;
while ( num < 10 ) {
	console.log('num:', num);
	num = num + 1;
}

// while 문과 유사하나, while문과 달리 조건이 거짓일지라도 1회는 반드시 수행
var num2 = 14;
do {
	console.log('num2:', num2);
	num2 = num2 - 2;
} while ( num2 > 10 );

var i = 20;
for (; i > 10;) {
	console.log('in > i:', i);
	 i--;
}
console.log('out > i:', i);


for ( var i = 0; i < 9; i++) {
	console.log("i :", i);
	for ( var  j = 0; j < 9; j++) {
		console.log("j :", j);
	}
}

var obj = {name: '객체', age: '21년'};
obj.computer = 'Apple Computer';
obj.keyboard = true;
obj.getKey = function () {
	return this.keyboard;
}

for (var prop in obj) {
	console.log('prop:', prop);
	console.log('value:', obj[prop]);
}











