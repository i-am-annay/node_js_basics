// Declaring Function using Function Expression
var counter = function (arr) {
  return "There are " + arr.length + " items in the array";
};

/*
  We have to explicitly export the function in order to require it
  Without this export the require will fail!
*/
module.exports = counter;
