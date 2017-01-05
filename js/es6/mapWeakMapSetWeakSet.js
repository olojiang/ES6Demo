"use strict";

/*
 * Set
 * - http://www.sitepoint.com/preparing-ecmascript-6-set-weakset/
 */
var s = new Set();
s.add('I').add('Have').add('a').add('Dream').add('I').add('Dream');
console.info("s.size===4:", s.size === 4);
console.info("s.has('a'):", s.has('a'));

/*
 * WeakSet
 * - can not add string, number boolean, because it accept instance of Object
 * - No size attribute for the WeakSet
 */
var ws = new WeakSet();
//ws.add(3); // Can not do this, because 3 is not an object

// Add no reference object
ws.add({data: 777});
ws.add({data: 33});
console.info("ws.has({data: 777}):", ws.has({data: 777})); // false, as no other reference
console.info("ws.has({data: 33}):", ws.has({data: 33})); // false, as no other reference

// Add reference object
var d777 = {data: 777};

// add()
ws.add(d777);

// has()
console.info("ws.has({data: 777}) - same key value:", ws.has({data: 777})); // false, because the name and value is the same but different object
console.info("ws.has(d777) - has object:", ws.has(d777)); // true, it's same object
console.info("d777:", d777);

// delete()
ws.delete(d777);
console.info("ws.has(d777) - after delete:", ws.has(d777));

ws.add(d777);
console.info("ws.has(d777) - add again:", ws.has(d777));
d777 = undefined;
console.info("ws.has(d777) - object is undefined:", ws.has(d777)); // This is how it's "Weak"

/*
 * Map
 * - It can has any object as key, which is the difference for the normal object
 */
var m = new Map();
m.set('key', true);
m.set(true, 77);
console.info("m.get(true):", m.get(true));
console.info("m.size:", m.size);
m.clear();
console.info("m.size - after clear():", m.size);

/*
 * WeakMap
 * - it can not has none-object type as key, such as string, number, boolean
 */
var wm = new WeakMap();
var objKey = {s: 1};
wm.set(objKey, {name: "olojiang"});
console.info("wm.has(objKey):", wm.has(objKey));

// set()
var obj = {name: "olojiang"};
wm.set(objKey, obj);

// has()
console.info("wm.has(objKey) - has other reference:", wm.has(objKey));

// get()
console.info("wm.get(objKey):", wm.get(objKey));

// delete()
wm.delete(objKey);
console.info("wm.has(objKey) - after delete:", wm.has(objKey));

// add again
wm.set(objKey, obj);
console.info("wm.has(objKey) - add again:", wm.has(objKey));
objKey = undefined;
console.info("wm.has(objKey) - key is undefined:", wm.has(objKey));