"use strict";

/*
 * ES6, Array
 */

// from(), create items
// - Set
var s = new Set(["Test", 7, true, "Array"]);
console.info("Array.from(s):", Array.from(s));

// - Argument
function toArray() {
    return Array.from(arguments);
}

console.info("toArray(1, 2, 3, true, 'test String'):", toArray(1, 2, 3, true, "test String"));

// - Map
var m = new Map([[1, true], [2, "Hello"], [3, 777]]);
console.info("Array.from(m):", Array.from(m));

// - String
console.info("Array.from('test'):", Array.from('test'));

// - act as map()
console.info("Array.from([1,2,3], x=>x*x):", Array.from([1, 2, 3], x => x * x));

// - generate array of sequence
console.info("Array.from({length:10}, (v, index)=>index):", Array.from({length: 10}, (v, index) => index));

// observe(), observe for the array change.
var arr = ["abc", 1, false];
Array.observe(arr, function (changes) {
    console.table(changes); // chrome support this
});

arr[1] = 77;
arr.splice(1, 1, 22, 33, "String test");

// of(), Array.of(element0[, element1[, ...[, elementN]]])
console.info("Array.of(1):", Array.of(1));  // [1]
console.info("Array.of(1,true, 'hehe'):", Array.of(1, true, 'hehe')); // [1, true, 'hehe']
console.info("Array.of(undefined):", Array.of(undefined)); //[undefined]

// copyWithin(), arr.copyWithin(targetIndex, startIndex[, end = this.length])
console.info("[1, 2, 3, 4, 5].copyWithin(0, 3):", [1, 2, 3, 4, 5].copyWithin(0, 3)); // [4, 5, 3, 4, 5]
console.info("[1, 2, 3, 4, 5].copyWithin(0, 3, 4):", [1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
console.info("[1, 2, 3, 4, 5].copyWithin(0, -2, -1):", [1, 2, 3, 4, 5].copyWithin(0, -2, -1)); // [4, 2, 3, 4, 5]

// fill(), arr.fill(value[, start = 0[, end = this.length]])
console.info("[1, 2, 3, 4, 5].fill(77):", [1, 2, 3, 4, 5].fill(77));
console.info("[1, 2, 3, 4, 5].fill(77, 3):", [1, 2, 3, 4, 5].fill(77, 3));
console.info("[1, 2, 3, 4, 5].fill(77, 3, 4):", [1, 2, 3, 4, 5].fill(77, 3, 4));

// includes(), var boolean = array.includes(searchElement[, fromIndex])
console.info("[1, 2, 3].includes(3):", [1, 2, 3].includes(3)); // true
console.info("[1, 2, 3].includes(2, 2):", [1, 2, 3].includes(2, 2)); // false
console.info("[1, 2, 3].includes(2, 1):", [1, 2, 3].includes(2, 1)); // true
console.info("[1, 2, 3].includes(2, -2):", [1, 2, 3].includes(1, -2)); // false
console.info("[1, 2, 3].includes(2, -3):", [1, 2, 3].includes(1, -3)); // true

// entries()
var eArr = arr.entries();
var i, len, obj;
for (i = 0, len = arr.length; i < len; i++) {
    console.info("eArr.next().value:", eArr.next().value); //Ex: [0, 'abc']
}

// keys()
var kArr = arr.keys();
for (i = 0, len = arr.length; i < len; i++) {
    console.info("kArr.next():", kArr.next()); //Ex: {value: 2, done, false}
}

// values()
var vArr = arr.values();
for (i = 0, len = arr.length; i < len; i++) {
    console.info("vArr.next():", vArr.next()); //Ex: {value: "String test", done, false}
}

// [@@iterator]
var itArr = arr[Symbol.iterator]();
for (i = 0, len = arr.length; i < len; i++) {
    console.info("itArr.next():", itArr.next()); //Ex: {value: "String test", done, false}
}

// for ... of
for (var it of arr) {
    console.info("it:", it);
}

// find(), arr.find(callback(element, index, array)[, thisArg])
// - return value of in the array, if it matches the condition
// - otherwise, undefined is returned
console.info("[1, 3, 5, 7, 9].find(function(v, i, arr){ return i%3===0; }):",
    [1, 3, 5, 7, 9].find(function (v, i, arr) {
        return v % 3 === 0;
    })); // 3

// findIndex()
// - return index of in the array, if it matches the condition
// - otherwise, -1 is returned
console.info("[1, 3, 5, 7, 9].findIndex(function(v, i, arr){ return i%3===0; }):",
    [1, 3, 5, 7, 9].findIndex(function (v, i, arr) {
        return v % 3 === 0;
    })); // 1