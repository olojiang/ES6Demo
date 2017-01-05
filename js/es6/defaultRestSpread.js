"use strict";

/*
 * Defalt: Function default parameter value
 */
function add7(x, y = 7) {
    return x + y;
}

console.info("add7(9):", add7(9));

/*
 * Rest: variant parameter => as array
 */
function print(...items) {
    items.forEach(function (item, index) {
        console.info("index:", index, "item:", item);
    });
}

print("1", true, "Hello", "Rest");

/*
 * Spread: array => several parameter
 */
function print3(x, y, z) {
    console.info("x:", x, "y:", y, "z:", z);
}

print3(...["Hello", "Spread", "Babel"]);