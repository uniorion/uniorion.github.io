## Javascript

* Array, Function, Object 형은 모두 참조가 가능한 객체이다. 
* Object 는 legnth 속성을 가지지 않는다. 

### 정보분석 (Comparative Data)

#### # typeof | typeof()
* typeof는 함수가 아니라, 뒤에나오는 데이터 유형을 감지하여 감지된 데이터 유형 값을 문자열로 반환한다.
```js
// 'var' 싱글톤 패턴(singleton pattern)
var num = 102,
    str = 'typeof는 함수가 아니다.';

console.log("num 변수에 복사된 데이터 유형:", typeof num); // => number  
console.log("str 변수에 복사된 데이터 유형:", typeof str); // => string  
```

* 만약 감지하고자 하는 데이터 유형이 2개 이상이라면 `괄호()를 사용하여 데이터를 묶어서 체크`해야 한다.
```js
console.log( typeof num + str );    // 8 + '' => 8 
console.log( typeof (num + str) );  // string
```

* array, object, null 모두 object 를 반환하므로 typeof로 구분할 수 없다.
```js
var arr = [num, boo, fnc],
    obj = {"number_type": num, "boolean": boo };

console.log("arr 데이터 유형:", typeof arr);
console.log("obj 데이터 유형:", typeof obj);
console.log("null 데이터 유형:", typeof null);
```


#### # instanceof 
* instance 란?
    - 실체화된(생성된) 객체
    - 생성된 객체의 모체(클래스(Class), 프로토타입(prototype))
    - 설계가 바뀌면 인스턴스도 바뀐다.

* instanseof 사용법
```js
// 인트턴스 instanseof 원형(모체)  => '인스턴스' 는 '원형'으로 생성된 객체인가?
// return BOOLEAN {true, false
console.log( 'obj instanceof Object:'   , obj instanceof Object);
console.log( 'arr instanceof Array:'    , arr instanceof Array);
console.log( 'fnc instanceof Function:' , fnc instanceof Function);
```
* `arr instanceof Array`을 사용하여 




> 참고서적 : _자바스크립트 + jQuery 완전정복 스터디 | 김춘경 저_

※ 모듈별로 쪼개 관리하는 훈련이 필요하다.

---

## HTML & CSS

