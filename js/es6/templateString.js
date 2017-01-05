"use strict";

var basicString = `Hello template string`;
console.info("basicString:", basicString);

// String.raw(), it's used with template string
var rawString = String.raw`In ES${2 + 3} "\n" is a line feed`;
console.info("rawString:", rawString);

// Insert variable
var name = "Ji Wei";
var age = 33;
var variableString = `${name} & ${age} is here`;
console.info("variableString:", variableString);

// Multiple line string
var multipleLineString = `${name} & ${age} is here,
    to play with the
    template string`;

console.info("multipleLineString:", multipleLineString);
