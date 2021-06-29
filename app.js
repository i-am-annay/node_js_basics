/*
    Lesson 4: The Global Object

    Global Object is similar to Window object in java script.
    
*/

/*

    Demonstrating How Some properties of global object works in Node.js

*/

// console          - For Logging messages to the console
console.log("This is a message");

// setTimeOut - For running a function after a preferred time
setTimeout(function () {
  console.log("3 Seconds Have passed");
}, 3000);

// setInterval      - For running a function repeatedly after a certain time interval
// clearInterval    - For removing/clearing the interval after execution
var time = 0;
var timer = setInterval(function () {
  time += 2;
  console.log(time + "seconds have passed");
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);

// __dirname        - For getting the current working directory
// __filename       - For getting the current working file

console.log(__dirname);
console.log(__filename);

// Documentation: https://nodejs.org/api/globals.html
