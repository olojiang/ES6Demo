"use strict";

var prototypeObj = {
    funcA: function () {
        console.info("prototypeObj.funcA()");
    }
};

var attr1 = "Shorthand for the attribute definition";

var method1 = function () {
    console.info("method1()");
};

var obj = {
    /* expose this __proto__ object for setting */
    __proto__: prototypeObj,
    
    /* shorthand for attr1: attr1 */
    attr1,
    
    /* shorthand for method1: method1 */
    method1,
    
    /* method2 for the obj */
    method2() {
        console.info("method2()");
    },
    
    /* Dynamic computed attribute name */
    [9 * 8]: 99
};

/*
 * Call
 */
obj.funcA();
console.info("obj.attr1:", obj.attr1);
obj.method1();
obj.method2();
console.info("obj[7]:", obj[72]);