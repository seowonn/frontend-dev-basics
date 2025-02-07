console.log('===[Test: Unnamed Export Module]'); // Unnamed(export default) Export Module Import 에서은 반드시 이름을 지정해야 한다.
import myFunction from './mods/ex01.mjs'; // 함수
console.log(myFunction(10, 20));

import myObject from './mods/ex02.mjs'; // 객체
console.log(myObject.substract(10, 20));

console.log('\n===[Test: Named Export Module II]'); // Named Export 모듈의 다수 객체 Destrcting Import
import { substract } from './mods/ex03.mjs';
console.log(substract(10, 20));

console.log('\n===[Test: Named Export Module]'); // Named Export Module은 다수의 객체를 Export 하기 때문에 Import 할 때 특정 이름을 지정할 수 없다. 대신, '* as 이름' 를 사용할 수 있다.
import * as m from './mods/ex03.mjs';
console.log(m.add(10, 20));
console.log(m.substract(10, 20));

console.log('\n===[Test: Named + Unamed Export Module]')
import math, { add } from './mods/ex04.mjs';
console.log(math.substract(10, 20));
console.log(add(10, 20));
