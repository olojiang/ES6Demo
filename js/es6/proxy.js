/*
 * The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
 *
 * var p = new Proxy(target, handler);
 * target
 * - A target object (can be any sort of objects, including a native array, a function or even another proxy) or function to wrap with Proxy.
 * handler
 * - An object whose properties are functions which define the behavior of the proxy when an operation is performed on it.
 */

"use strict";

// handler is object
// handler's property is function

/*
 * Object handler, change before get
 * - get()
 */
var handler = {
    get: function (target, prop) {
        return prop in target ? target[prop] : `Hello ${prop}`;
    }
};

var p = new Proxy({}, handler);

p.a = 'My proxy';
console.info("p.a:", p.a);
console.info("p.noneExistAttribute:", p.noneExistAttribute);

/*
 * Object handler, validate
 * - set()
 */
var validate = {
    set: function (target, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not a number');
            }
            if (value > 200 || value < 0) {
                throw new RangeError('The age value is invalid');
            }
        }
        
        // default behavior
        target[prop] = value;
        
        return true;
    }
};

var pp_target = {};
let pp = new Proxy({}, validate);
pp.xxx = 'xxx';
console.info("pp.xxx:", pp.xxx);

pp.age = 7;
console.info("pp.age:", pp.age);

try {
    pp.age = 'abc';
} catch (e) {
    console.error(e);
}


try {
    pp.age = 300;
} catch (e) {
    console.error(e);
}