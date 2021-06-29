/*
    Lesson 6 : Modules and require()

*/

// require('filename')      - Requires all the functionality from the specified file
var counter = require("./count"); // Conventionally, the variable name is similar to the exported functionality

console.log(counter(["shaun", "ryu", "mario"]));
