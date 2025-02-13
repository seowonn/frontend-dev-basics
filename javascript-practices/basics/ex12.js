/* Lexical Scope */
var f1 = function() {
    var s = "hello world";

    // inner는 f1 내부에서 선언되었기 때문에 f1의 지역변수 s에 접근할 수 있다.
    var inner = function() {
        console.log(s);
    }

    inner(); // 함수 내부에서 inner()를 즉시 실행함.
}
f1();

/* Closure is a function that has access to the outer function's scope in which it was created even after the outer function has finished executing. */

var f1 = function() {
    var s = "hello world";

    var inner = function() {
        console.log(s);
    }

    return inner; // inner() 함수를 실행하지 않고 반환만 함. 
}

var closure = f1();
closure();