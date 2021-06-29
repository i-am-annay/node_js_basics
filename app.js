/*
    Lesson 6: Module patterns
*/

var stuff1 = require("./stuff1");
var stuff2 = require("./stuff2");
var stuff3 = require("./stuff3");

// For Pattern 1
console.log(stuff1.counter(["shaun", "mario", "ryu"]));
console.log(stuff1.adder(4, 5));
console.log(stuff1.pi);

// For Pattern 2
console.log(stuff2.counter(["shaun", "mario", "ryu"]));
console.log(stuff2.adder(4, 5));
console.log(stuff2.pi);

// For Pattern 3
console.log(stuff3.counter(["shaun", "mario", "ryu"]));
console.log(stuff3.adder(4, 5));
console.log(stuff3.pi);
