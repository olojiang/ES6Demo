"use strict";

/*
 * Relect
 * - It's not a constructor function, can not new
 * - It's global Object, like Math
 */

// Reflect.apply(target, thisArgument, argumentsList)
// - target.apply(thisArgument, argumentList)
console.info("Reflect.apply(Math.ceil, null, [3.5234]):", Reflect.apply(Math.ceil, null, [3.5234]));

// Reflect.construct(target, argumentsList[, newTarget])
// new Object()
var Parent = function (name, phone) {
    this.name = name;
    this.phone = phone;
};
Parent.prototype.toString = function () {
    return this.name + ", PHONE: " + this.phone;
};
Parent.prototype.getAge = function () {
    return this.age;
};
var parent = Reflect.construct(Parent, ['Yun Jia Li', 23451234]);
console.info("parent.toString(): ", parent.toString());

// Reflect.defineProperty(target, propertyKey, attributes)
if (Reflect.defineProperty(parent, 'age', {value: 32})) {
    console.info("Define property successful");
    console.info("parent.getAge():", parent.getAge());
} else {
    console.info("Define property failed");
}

// Reflect.deleteProperty(target, propertyKey)
var a = {x: 3};
console.info("a:", a);
console.info("Reflect.deleteProperty(x, 'a'):", Reflect.deleteProperty(a, 'x')); // true
console.info("a:", a);
console.info("Reflect.deleteProperty(parent, 'age'):", Reflect.deleteProperty(parent, 'age')); // false, Can not delete, because enumerable, writable, configurable === false
console.info("parent:", parent);
console.info("parent.age:", parent.age);
//delete parent.age; // failed, because writable and configurable === false
console.info("parent.getAge():", parent.getAge());

// Reflect.set(target, propertyKey, value[, receiver])
// - defineProperty, is readonly by default
// - set, is writable by default
console.info("Reflect.set(parent, 'age2', {value: 'newAge', writable: true}):", Reflect.set(parent, 'age2', {
    value: 'newAge',
    writable: true
}));

// Reflect.has(target, propertyKey)
console.info("Reflect.has(parent, 'age'):", Reflect.has(parent, 'age'));

// Reflect.get(target, propertyKey[, receiver])
console.info("Reflect.get(parent, 'age'):", Reflect.get(parent, 'age'));

// Reflect.getOwnPropertyDescriptor(target, propertyKey)
console.info("Reflect.getOwnPropertyDescriptor(parent, 'age'):", Reflect.getOwnPropertyDescriptor(parent, 'age'));
console.info("Reflect.getOwnPropertyDescriptor(parent, 'age2'):", Reflect.getOwnPropertyDescriptor(parent, 'age2'));

// Reflect.preventExtensions(target)
// Reflect.isExtensible(target)
console.info("Reflect.isExtensible(parent):", Reflect.isExtensible(parent));
console.info("Reflect.preventExtensions(parent):", Reflect.preventExtensions(parent));
console.info("Reflect.isExtensible(parent):", Reflect.isExtensible(parent));

// Reflect.enumerate(target)
var value = null;
for (var attr in parent) {
    if (!parent.hasOwnProperty(attr)) {
        continue;
    }
    value = parent[attr];
    console.info("attr:", attr, "value:", value);
}

// Reflect.ownKeys(target)
// - even age is not enumerable, it's contained in below list
console.info("Reflect.ownKeys(parent):", Reflect.ownKeys(parent));

// Reflect.setPrototypeOf(target, prototype)
var itemNew = {};
console.info("Reflect.setPrototypeOf(itemNew, {setName: function(){console.info('setName()');}):", Reflect.setPrototypeOf(itemNew, {
    setName: function () {
        console.info('setName()');
    }
}));

// Reflect.getPrototypeOf(target)
console.info("Reflect.getPrototypeOf(itemNew):", Reflect.getPrototypeOf(itemNew));
console.info("Reflect.getPrototypeOf(parent):", Reflect.getPrototypeOf(parent));
console.info("Reflect.getPrototypeOf(parent).toString:", Reflect.getPrototypeOf(parent).toString);