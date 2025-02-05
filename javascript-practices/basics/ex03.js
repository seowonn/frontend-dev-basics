console.log("============[02] undefined");
var myVar1; // 암묵적으로 undefined가 대입
var myVar2 = undefined; // 명시적으로 undefined가 대입
var myVar3 = null;
console.log(myVar1, myVar2, myVar3);

console.log("============[03] var");
// x; // ReferenceError: x is not defined
y = 10;
var x;
function f() {}
f();

console.log("============[05] undefined와 null의 동치(equal) 비교");
console.log(myVar1 == myVar2); // 
console.log(myVar1 === myVar2); // 타입 비교 + (값비교, 동일성)

console.log("============[06] Equal Operators(==, ===) 와 형변환");
// == : equality, 값의 동치성, 형변환
console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));

// === : 타입의 동일성을 비교한다.
// 만약 타입이 동일한 경우
//  2-1. primitive type: 값의 동일성
//  2-2. 객체(object, function) : 객체의 동일성 (참조값 비교교)
console.log('4' === 4); // 문자와 숫자의 타입은 서로 다름으로 false
console.log(1 === true); // 숫자와 boolean의 타입은 서로 다름으로 false
console.log('abc' === new String('abc')); // 원시 타입(String)과 객체를 비교했음으로 false
// 서로 다른 객체, 즉 서로 다른 참조값을 비교함으로 false
console.log(new Number(10) === new Number(10)); 
