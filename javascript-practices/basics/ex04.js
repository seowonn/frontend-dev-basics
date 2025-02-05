console.log("============[02] 생성방법1: 생성자 함수");
// Object라는 내장된 생성자 함수를 호출하여 새로운 빈 객체를 생성한다.
var o1 = new Object();
// 이후 객체의 property(속성)를 동적으로 추가할 수 있다.
o1.name = '둘리';
o1.age = 10;
o1.another = new Object();
o1.another.name = '마이콜';
o1.another.age = 20;
console.log(o1);
console.log("");

console.log("============[03] 생성방법2: {} 객체 리터럴 사용")
// 객체 리터럴을 사용하여 아래와 같이 작성할 수도 있다.
var o2 = {};
o2.name = '둘리2';
o2.age = 12;
o2.another = new Object();
o2.another.name = '마이콜2';
o2.another.age = 22;
console.log(o2);
console.log("");

console.log("============[04] 생성방법3: JSON");
// JSON 형태로, 속성명 : 속성값 방식으로 객체를 생성할 수 있다. 
var o3 = {
    name: "둘리3",
    age: 13,
    another: {
        name: "마이콜3",
        age: 23
    }
}
console.log(o3);
console.log("");

console.log("============[참고] JSON 포맷 데이터 통신(AJAX): XmlHttpRequest 객체를 사용");
var response = "{name: '둘리', age: 10, email: 'dooly@google.com'}";
// eval() 함수: JSON 문자열을 객체로 변환하는 방식식
// 객체 리터럴을 의미하는 {}가 코드 블록{}으로 인식되는 문제를 방지하기 위해 
// "(", ")"를 넣어 표현식으로 해석하도록 강제해준다.
var userVo = eval("(" + response + ")");
console.log(userVo);
// JSON.parse()를 사용하여 JSON 문자열을 안전하게 객체로 변환할 수 있다.
// 이때 JSON 표준을 준수한 "key": "value" 형식을 사용해야 한다.
var response2 = '{"name": "둘리", "age": 10, "email": "dooly@google.com"}';
var userVo2 = JSON.parse(response2);
console.log(userVo2);