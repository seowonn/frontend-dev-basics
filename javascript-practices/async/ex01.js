/*
    callback 지원 비동기 함수 사용
*/
const {fn01} = require('./fns');

// test: success
fn01('param~~', function(error, result) {
    if(error) {
        console.error(error);
        return;
    }
    console.log(`result: ${result}`);
});

// test: fail
// fn01(null, function(error, result) {
//     if(error) {
//         console.error(error);
//         return;
//     }
//     console.log(`result: ${result}`);
// })

console.log('wait....');

// 무거운 연산 (10초 소요): Call Stack에 있는 내용이 다 끝나야 콜백함수가 실행된다.
const start = Date.now();
while (Date.now() - start < 10000) {} // 10초 동안 Call Stack 점유

console.log("무거운 연산 종료");


