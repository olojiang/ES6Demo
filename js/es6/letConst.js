"use strict";

// Javascript ES5.1-- only have the function level of block
// Let introduce the block level
function funA() {
    /*
     * let
     */
    // Function level x, in this case let is the same as var
    let x;
    {
        x = 3;
    }
    {
        console.info("x:", x);
    }
    
    {
        // Block level y,
        let y = 7;
    }
    {
        // following y is not define, it will report error
        //console.info("y:", y);
    }
    
    // Duplicate, following will throw error, because you can not let same variable in same context again
    //let x = 7;
    
    // But you can assign new value to it
    x = 7;
    console.info("x2:", x);
    
    /*
     * const
     */
    const con1 = -7;
    console.info("con1:", con1);
    {
        // const also has scope, so it will not interact with first con1
        const con1 = 7;
        console.info("con1:", con1);
        
        // Following will render error, because const can not be re-assign
        //con1 = 99;
    }
    {
        // const also has scope, so it will not interact with first con1
        const con1 = 77;
        console.info("con1:", con1);
    }
}

funA();