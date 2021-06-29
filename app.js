/*
    Lesson 9: Reading and Writing Files
*/
var fs = require("fs");

/*
    Synchronous File Reading and Writing
    -readFileSync('FileName', 'Encoding')
    -writeFileSync('FileName', 'Content To Write')

    Synchronous = code blocking
    Any code will be executed only after synchronous code has finished execution
    Therefore, it blocks other code at runtime and before execution.
*/

var data = fs.readFileSync("readMe.txt", "utf-8");
console.log(data);
fs.writeFileSync("writeFile.txt", data);

/*
    Asynchronous File Reading and Writing
    -readFile('FileName', 'Encoding', 'Call Back Function')
    -writeFile('FileName', 'Content To Write', 'Call Back Function')

    Asynchronous = non blocking
    Any code will be executed only while synchronous code is in execution
    Therefore, it does not block other code at runtime
    It is faster and is more flexible
*/

fs.readFile("readMe.txt", "utf-8", function (error, data) {
  console.log(data);
  fs.writeFile("writeFile.txt", data, function (error) {});
});
