var o = {
    name: "둘리",
    age: 10
};

var f = function() {
    console.log("Hello World");
};



console.log("============object 타입의 확장");
// o 객체에 another 속성을 추가하여 객체를 확장할 수 있다. 
o.another = {
    age: 20,
    name: "마이콜",
    print: function() {
        console.log("age: " + this.age + ", name: " + this.name);
    }
}
o.another.print();

console.log("\n============function 타입의 확장");
// f 함수에 another 속성을 추가하여 함수를 확장할 수 있다. 
f.another = {
    age: 20,
    name: "마이콜",
    print: function() {
        console.log("age: " + this.age + ", name: " + this.name);
    }
}
f.another.print();

console.log("\n============기본 타입(primitive type)은 확장되지 않는다");
var i1 = 10;
var i2 = new Number(20);

console.log(i1 + " : " + i2 + " : " + (i1 + i2));
i2.another = {
    name: "마이콜",
    age: 20
};
console.log(i2.another);

i1.another = {}; // new Number(i1).another = {};
console.log(i1.another); // new 