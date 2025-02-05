var MyMath = function(name) {
    console.log("MyObject called");
    this.name = name;
};


// prototype은 생성자 함수가 생성할 객체의 "공통 속성"을 정의하는 프로토타입 객체로,
// 모든 함수는 prototype을 갖는다.
console.log("============[02.02] prototype 객체");
console.log(MyMath.prototype);

console.log("\n============[02.03] prototype.constructor");
// constructor는 해당 함수 자체를 가리킨다. 따라서 [Function: MyMath]가 출력된다.
console.log(MyMath.prototype.constructor);
// constructor()는 반환문이 없기때문에 undefined가 출력된다.
console.log(MyMath.prototype.constructor());

console.log("\n============[02.04] prototype 객체 확장");
// 기존 name 속성 외에, add 함수, PI 상수 등 사용자가 임의로 객체를 확장할 수 있다.
MyMath.prototype.add = function(a, b) {
    return a + b;
}
MyMath.prototype.PI = 3.14;
// constructor 정보는 enumerable: false 속성으로 인해 prototype 출력 시 출력되지 않는다.
console.log(MyMath.prototype);
console.log("<add 함수 활용 예시>")
var calc = new MyMath("Calculator");
console.log("새로운 MyMath 객체 생성 완료됨")
console.log("name: " + calc.name);
console.log("add 함수 호출 결과: " + calc.add(2, 3));
console.log("PI 상수값: " +calc.PI);

console.log("\n============[03.03] MyMath 생성자 함수로 생성한 일반 객체의 __proto__ 객체");
var math = new MyMath('mymath');
// 생성된 객체(math)의 __proto__는 생성자 함수의 prototype(객체가 가리키는 부모 prototype)을 가리킨다.
// __prototype__은 모든 함수가 갖는 prototype과 달리, 모든 객체가 가진다.
// === 연산자는 참조값(메모리 주소값)을 비교한다.
console.log(MyMath.prototype);
console.log(math.__proto__);
console.log(math.__proto__ === MyMath.prototype); // true

console.log("\n============[03.04] 리터럴 {}로 정의한 일반 객체의 __proto__ 객체");
var obj = {}; // 여기서 자동으로 Object.prototype을 상속 받는다.
console.log(obj.__proto__ === Object.prototype);

console.log("\n============[04.01] prototype 객체 속성 접근(상속)");
// 여기서 add 함수는 MyMath의 prototype 객체에서 선언한 속성이다.
console.log(math.add(10, -20), math.PI);

console.log("\n============[04.02] prototype 객체 속성 오버라이드");
math.add = function(a, b) {
    return Math.abs(a) + Math.abs(b);
}
console.log(math.add(10, -20), math.PI);

console.log("\n============[04.03] 생성 객체만의 속성");
// 생성자 함수 MyMath로 만든 인스턴스 'math'에만 동적으로, 독립적으로 메서드(substract)를 추가할 수 있다.
// 즉 다른 MyMath 인스턴스에는 substract 메서드를 찾을 수 없다. 
math.substract = function(a, b) {
    return a - b;
}
console.log(math.substract(10, 20));

console.log("\n============[05.01] prototype 객체의 '__proto__' 속성 확인");
// Prototype Chain에 의해 MyMath.prototype은 Object.prototype을 상속받는다. 
// MyMath.prototype.__proto__ : Object.prototype을 참조 (즉, MyMath.prototype의 부모 객체를 참조)
console.log(MyMath.prototype.__proto__);
// MyMath.prototype은 MyMath 생성자로 만들어진 인스턴스들이 상속/추가/오버라이딩된 prototype 객체를 의미미
console.log(MyMath.prototype);
console.log(MyMath.prototype.__proto__ === Object.prototype);

console.log("\n============[05.02] Object.prototype 객체 속성 사용하기");
console.log(math.toString(), math.hasOwnProperty('add'));
math.toString = function() {
    return `[MyMath ${this.name}]`;
}
console.log(math.toString());

console.log("\n============[05.03] function 객체의 __proto__ 확인");
// JavaScript에서 모든 함수는 Function.prototype을 상속받는다. 
console.log(MyMath.__proto__); // MyMath 함수 자체의 부모 프로토타입
console.log(MyMath.prototype); // MyMath 생성자로 만든 객체들이 상속받는 프로토타입
console.log(math.__proto__);
console.log(math.prototype);
console.log(Function.prototype);
console.log(MyMath.__proto__ === Function.prototype);

console.log("============[06] Function.prototype 객체 속성 사용하기");
// apply()와 call()을 사용하여 this를 변경한 상태에서 함수를 실행
// this = null로 넣어 전역 컨텍스트 사용
console.log(math.toString.apply({name: 'ㅋ ㅋ ㅋ ㅋ'}), math.add.call(null, 10, -20));
