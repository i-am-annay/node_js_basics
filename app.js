/*
    Lesson 12: Creating A Server
*/

var http = require("http");

//createSerever         - Creates a Server, takes a function as argument which takes in request and the response
var server = http.createServer(function (request, response) {
  console.log("Request was made: " + request.url); // Logs after every refresh / request
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hi people!");
});

//listen('portNumber', 'ip of localhost')   - Serves as a listener
server.listen(3000, "127.0.0.1");
console.log("Listening to port 30000");
