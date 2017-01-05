"use strict";

var arr = ["hello", "for", "of"];

/*
 * for in - it's key for iterable
 */
for (var i in arr) {
    console.info("arr[i]:", i, arr[i]);
}

/*
 * for of - it's value for iterable
 */
for (var n of arr) {
    console.info("n:", n);
}

/*
 * Create iterable object
 */
let fibonacci = {
    // Create iterate function
    // - redefine iterator
    [Symbol.iterator]() {
        // Iterable private variable
        let pre = 0, cur = 1;
        
        return {
            // override next()
            next() {
                // destructing
                [pre, cur] = [cur, pre + cur];
                
                // It has protocol of the iterable, value and done field
                return {done: false, value: cur};
            }
        };
    }
};

for (let fibo of fibonacci) {
    console.info("fibo:", fibo);
    
    if (fibo > 500) {
        break;
    }
}