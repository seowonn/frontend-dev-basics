/*
    Unnamed Export Module
    
    1. default 키워드를 사용
    2. 주의: 이름 없이 export 되기 때문에 하나만 export 할 수 있다.

 */

// 한꺼번에 몰아서 unmaned로 export하는 경우우
// export default {
//     add: (a, b) => a + b,
//     substract: (a, b) => a - b
// };

const add = (a, b) => a + b;
const substract = (a, b) => a - b;

// export default {
//     add: add,
//     substract: substract
// };

// 또는
export default {add, substract};