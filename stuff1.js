var counter = function (arr) {
  return "There are " + arr.length + " elements in the array";
};

var adder = function (a, b) {
  return `The sum of the 2 numbers are ${a + b}`;
};

var pi = 3.1416;

// Pattern 1 for Exporting
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
