/*
    Lesson 15: Writable Streams
*/
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

myReadStream.on("data", function (data) {
  console.log(data);
  myWriteStream.write(data);
});
