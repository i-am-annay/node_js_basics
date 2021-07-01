/*
  Lesson 17 : Serving HTML pages
*/
var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
  console.log("Request was made at : " + request.url);
  response.writeHead(200, { "Content-Type": "text/html" }); // Content-Type = "text/html"
  var readStream = fs.createReadStream(__dirname + "/index.html", "utf-8"); // File name = 'index.html'
  readStream.pipe(response);
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");
