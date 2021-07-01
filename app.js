/*
  Lesson 16 : Pipes
*/
var fs = require("fs");
var http = require("http");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// pipe('write stream')     - Can be called on a 'Read Stream Object' and takes 'Write Stream Object'
myReadStream.pipe(myWriteStream);

// Using pipes to write to a client.
var server = http.createServer(function (request, response) {
  console.log("Request was made at : " + request.url);
  response.writeHead(200, { "Content-Type": "text/plain" });
  var readStream = fs.createReadStream(__dirname + "/readMe.txt", "utf-8");
  readStream.pipe(response);
});

server.listen(3000, "127.0.0.1");
console.log("Listenging to port 3000");

// Reading-Writing Data in streams is better for performance.
