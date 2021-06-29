/*
    Lesson 5: Function Expressions
*/

// Normal Functions
function greeting() {
  console.log("Hi, there!");
}
greeting();

// Function Expression
var message = function () {
  console.log("This is a message");
};
message();

// Normal Function call within a  function
function printGreeting() {
  greeting();
}
printGreeting();

// Node specific call within a function
var printMessage = function (text) {
  text();
};
printMessage(message);
