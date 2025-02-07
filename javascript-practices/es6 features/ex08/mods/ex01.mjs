// mjs 확장자는 ES Modult을 사용하는 JavaScript 파일을 나타낸다.
/*
    Unnamed Export Module
    
    1. default 키워드를 사용
    2. 주의: 이름 없이 export 되기 때문에 !하나만! export 할 수 있다.

 */

const add = (a, b) => a + b;
export default add;

// error
// export default (a, b) => a - b;