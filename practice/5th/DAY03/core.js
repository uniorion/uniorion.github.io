
true ? console.log('this is 참!') : console.log('this is 거짓!');

true ? 
	console.log('this is 참!') : 
	console.log('this is 거짓!');

var condition = 'ramos';

condition === 'hesus' ? 
    console.log('He is hesus!') :
    condition === 'Jeus' ? 
        console.log('He is Jeus!') :
        console.log('...........');

console.log('%c---------------------------------', 'color:#1DB332')

function getSomeMoney( money ) {
	if ( money !== 0 ) {
		money = money || 100;
	}
	// if ( typeof money !== 'number' ) { console.error('숫자값을 전달해줘!'); } 
	// if ( typeof money !== 'number' ) { throw new Error('숫자값을 전달해줘!'); } 
	return '네가 원하는 돈의 양은 ' + money + '구나! 내가 줄거 같아?';
}

var result = getSomeMoney(0);

console.log('result : ' + result );



  
var condition = true;
var excuteFn = function() { console.log('condition is ture.') };

condition && excuteFn();

if ( condition ) {
	excuteFn();
}

condition || excuteFn();

if ( !condition ) {
	excuteFn();
}

// 논리 연산자를 사용한 조건문이 자주 사용되는 경우는
// 변수에 값을 할당할 때 바로 조건 처리된 결과를 할당(복사 또는 참조) 받기 위해서이다.
var viewport_width = window.innerWidth || document.docuementElement.clientWidth || document.body.clientWidth;

// 위, 아래 구문은 동일한 결과를 가져온다.

var viewport_width;

if ( window.innerWidth ) {
	viewport_width = window.innerWidth;
} else if ( document.docuementElement.clientWidth ) {
	viewport_width = document.docuementElement.clientWidth;
} else {
	viewport_width = document.body.clientWidth;
}


var members = ['헐크', '아이어맨', '캡틴아메리카', '토르'];

switch ( members[3] ) {
	case '헐크' :
		console.log('헐크');
		break;
	case '아이어맨' :
		console.log('아이어맨');
		break;
	case '캡틴아메리카' :
		console.log('캡틴아메리카');
		break;
	case '토르' :
		console.log('토르');
		break;
	default : 
		console.log('슈퍼맨');
}