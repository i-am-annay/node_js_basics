/*
  Lesson 18 : Serving JSON data
*/

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
  console.log("Request was made at : " + request.url);
  response.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29,
  };
  // end()  - Takes string or buffer in argument
  response.end(JSON.stringify(myObj)); // Converting Object into JSON - String
});

server.listen(3000, "127.0.0.1");
console.log("listening to port 3000");
