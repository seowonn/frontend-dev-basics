/*
    promise 지원 비동기 함수 사용 II: async ~ await
*/

const {fn02} = require('./fns');

// test: success
const fn = async (param) => {
    const result = await fn02(param); // 비동기로 동작하는 부분
    console.log(result);
}

fn('params~~');
fn(null);

console.log('wait...');


const testFunction = async (id) => {
    try {
        console.log("비동기 함수 호출 시작"); // (A)

        const response = await new Promise((resolve) => {
            setTimeout(() => {
                console.log("비동기 함수 setTimeout 지나침"); // (B)
                resolve({ data: { type: "exampleType", name: "exampleName" } });
            }, 2000);
        });

        console.log("비동기 함수 await 이후 실행"); // (C)

        // 가짜 데이터 업데이트 (원래 setModalData를 사용하는 부분)
        console.log("데이터 업데이트:", response.data);

    } catch (err) {
        console.log("에러 발생:", err);
    }

    console.log("비동기 함수 진행 완료"); // (D)
};

testFunction(1);
console.log("함수 호출 이후 즉시 실행"); // (E)
