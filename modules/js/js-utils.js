/*---------------------------------
*	언어 차원에서 지원되지 않는 사용자 정의 함수
*	isType() 유틸리티 헬퍼 함수
* 객체가 아닌 유형도 검증이 가능 
-----------------------------------*/
function isType(data) {
    return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}