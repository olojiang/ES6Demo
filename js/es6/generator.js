"use strict";

/*
 * Define iterable object by generator syntax
 */
var fibonacci = {
    // function*()
    // yield VALUE
    // - it doesn't has next(), and use an infinite loop
    // - each time it will yield one value
    // - which means only when for of, it will gradually executing the infinite loop
    [Symbol.iterator]: function*() {
        let pre = 0, cur = 1;
        
        // Won't execute to stack overflow
        for (; ;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
};

for (let fibo of fibonacci) {
    console.info("fibo:", fibo);
    if (fibo > 500) {
        break;
    }
}