"use strict";

// List matching
var [a, b, , c] = ["hello", 7, true, "Deconstructing"];
console.info("a:", a);
console.info("b===7:", b === 7);
console.info("c:", c);

// Object matching
var obj = {
    x: 7,
    y: 8,
    z: 9
};

// Simple object matching
var {x, y, z} = obj;
console.info("x:", x, "y:", y, "z:", z);

// More complex object matching
obj = {
    x: {xx: 77},
    y: {yy: {yyy: 888}},
    z: 9
};

var {x:xx, y:{yy:yyy}} = obj;
console.info("xx:", xx, "yyy:", yyy);

// Parameter matching
function showName({name: x, age: y}) {
    console.info("x:", x, "y:", y);
}
showName({
    name: "Ji Wei",
    age: 33
});

// Fail soft
var [undefinedV] = [];
console.info("undefinedV:", undefinedV);

// Fail soft with default
var [undefineWithDefault = 7] = [];
console.info("undefineWithDefault:", undefineWithDefault);