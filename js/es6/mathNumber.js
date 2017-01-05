"use strict";

/*
 * Math
 * - following is just part of the new ES6 math API, others are really less used by myself
 * - refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
// cbrt()
// - cube root
console.info("Math.cbrt(3):", Math.cbrt(3));

// clz32()
// - number of leading zeroes of a 32-bit integer.
console.info("Math.clz32(7):", Math.clz32(15));

// hypot()
// - sqrt(v1^2+v2^2+...+vn^2)
console.info("Math.hypot(3, 4):", Math.hypot(3, 4)); //5

// log10()
console.info("Math.log10(10):", Math.log10(2));

// log2()
console.info("Math.log2(2):", Math.log2(10));

/*
 * Number
 * 2^53-1, -(2^53-1)
 */
console.info("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER, "Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

// Check number type
console.info("Number.isNaN(NaN):", Number.isNaN(NaN));
console.info("Number.isFinite(NaN):", Number.isFinite(NaN));
console.info("Number.isInteger(7777):", Number.isInteger(7777));
console.info("Number.isInteger(7777.2352):", Number.isInteger(7777.2352)); // false
console.info("Number.isSafeInteger(7777):", Number.isSafeInteger(7777));

// parse()
console.info("Number.parseFloat('234.234'):", Number.parseFloat('234.234'));
console.info("Number.parseInt('234'):", Number.parseInt('234'));
console.info("Number.parseInt('234AAA'):", Number.parseInt('234AAA')); // 234
console.info("Number.parseInt('BBB234AAA'):", Number.parseInt('BBB234AAA')); // NAN
console.info("Number.parseInt('BBB234'):", Number.parseInt('BBB234')); // NAN