"use strict";

/*
 * What is tail call?
 *  - The last call of the function is another function call
 *  - return 3 * funcA(n) is not a tail call, because after funcA(n) end, 3* need to execute.
 * Why is there a tail call optimization?
 *  - Because you don't need to manage the context for this function, when you need to execute next call
 */

/*
 * Classic factorial sequence
 */
function factorial(n, start = 1) {
    if (n <= 1) return start;
    return factorial(n - 1, n * start);
}

console.info("factorial(10):", factorial(10));
console.info("factorial(100):", factorial(100));