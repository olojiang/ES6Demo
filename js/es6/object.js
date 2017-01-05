"use strict";

/*
 * ES6 Object
 */

// assign(), Object.assign(target, ...sources)
var obj = {a: 1, b: true};
var obj2 = {c: 'test'};
var obj3 = {d: 'go for it'};
var copy1 = Object.assign({}, obj);
console.info("copy1:", copy1);
var copy2 = Object.assign({a: 8}, obj);
console.info("copy2:", copy2);
var merged = Object.assign(obj, obj2, obj3);
console.info("merged:", merged);

// getOwnPropertySymbols(), Object.getOwnPropertySymbols(obj)
var objSymbol = {};
var sym1 = Symbol('a');
var sym2 = Symbol.for('b');
objSymbol[sym1] = 'sym1';
objSymbol[sym2] = 'sym2';
var syms = Object.getOwnPropertySymbols(objSymbol);
console.info("syms:", syms);
console.info("syms.length:", syms.length);
console.info("syms[1]:", syms[1]);

// is(), Object.is(value1, value2);
// compare if 2 values are the same
console.info("Object.is('for', 'for'):", Object.is('for', 'for')); // true
console.info("Object.is(window, window):", Object.is(window, window)); // true

console.info("Object.is(Symbol('a'), Symbol('a')):", Object.is(Symbol('a'), Symbol('a'))); // false
console.info("Object.is([], []):", Object.is([], [])); // false, different memory

// getNotifier(), Object.getNotifier(obj)
// ? don't understand when should use it, also it has the relationship with observe()
var obj5 = {h: 1, i: true};
Object.getNotifier(obj5);

// observe(), Object.observe(obj, callback(changes)[, acceptList])
Object.observe(obj5, function (changes) {
    console.table(changes); // console.table(), chrome works
    // you can detect for the changes and do other things
});

obj5.newAttr = '999';
obj5.h = 7;
delete obj5.i;
Object.defineProperty(obj5, 'i', {value: 'i_new', writable: false});
Object.setPrototypeOf(obj5, {
    funcA: function () {
        console.info("funcA()");
    }
});
Object.seal(obj5);
//obj5.xx = 'xx'; // it will not change the object, after seal(), it's wrong and exception is thrown
console.info("obj5:", obj5);
obj5.funcA();

// setPrototypeOf(), Object.setPrototypeOf(obj, prototype);
var obj6 = {};
var prototype6 = {
    funcPrototype: function () {
        console.info("funcPrototype()");
    }
};
Object.setPrototypeOf(obj6, prototype6);
obj6.funcPrototype();