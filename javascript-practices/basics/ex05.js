console.log("============[01] 일반 함수");
var myFunction = function() {
    console.log('일반함수');
}
myFunction();

console.log("============[02] 생성자 함수");
// 생성자 함수는 대문자로 시작함
var MyObject = function(age, name) {
    console.log("MyObject Constructor called");
    this.age = age;
    this.name = name;
    console.log("age: " + this.age + ", name: " + this.name);
}

var o1 = new MyObject(10, '둘리');
console.log("o1: " + typeof(o1) + " : " + (o1 instanceof MyObject));
console.log(o1);

// MyObject 객체 생성을 하기 위해 생성자를 호출함
var o2 = new MyObject(20, '마이콜');