"use strict";

class Parent {
    /*
     * Constructor
     */
    constructor(name) {
        console.info("Parent Constructor");
        this.name = name;
    }
    
    parentFunction() {
        console.info("parentFunction() " + this.name);
    }
    
    toString() {
        console.info("this.name:", this.name);
    }
    
    static doStatic() {
        console.info("doStatic()");
    }
}

/*
 * extends the same as JAVA
 */
class Child extends Parent {
    constructor(name, age) {
        console.info("Child Constructor");
        
        // super(), the same as java
        super(name);
        
        this.age = age;
    }
    
    // @Override method in parent
    toString() {
        // super.xxx, refer the parent function or field
        super.toString();
        console.info("this.age:", this.age);
    }
}

// Static
Parent.doStatic();

var child = new Child("Ji Wei", 33);
child.parentFunction();
child.toString();