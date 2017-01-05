"use strict";

/*
 * symbol is immutable
 * - can be used as object key
 * symbol object is wrapper of primitive data type symbol
 *
 * Symbol([description])
 */

// Define
var sym1 = Symbol();
var sym2 = Symbol("des of Symbol");

// Even the description is the same, each time it's a new symbol object
console.info("Symbol('text')===Symbol('text'):", Symbol('text') === Symbol('text')); // false

// It's can not be new, following is wrong
//var sym3 = new Symbol('des');

// typeof
console.info("typeof Symbol():", typeof Symbol()); // "symbol"
console.info("typeof Symbol('desc'):", typeof Symbol()); // "symbol"

// Can be used as object key
var obj = {};
var sym4 = Symbol('777');
obj[sym4] = true;
console.info("obj[sym4]:", obj[sym4]);

// Can not be identified from for ... in loop
obj.b = "Go for the world";

// only has attribute b
var item = null;
console.info("for ... in");
for (var attr in obj) {
    if (!obj.hasOwnProperty(attr)) {
        continue;
    }
    item = obj[attr];
    console.info("item:", item);
}