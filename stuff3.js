var counter = function (arr) {
  return "There are " + arr.length + " elements in the array";
};

var adder = function (a, b) {
  return `The sum of the 2 numbers are ${a + b}`;
};

var pi = 3.1416;

// Pattern 3 for exporting
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
