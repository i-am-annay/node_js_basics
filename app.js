/*
    Lesson 10 : Creating and Removing Files and Directories
*/
var fs = require("fs");

// unlink('file')               - Deletes File Asynchronously
fs.unlink("writeMe.txt", function (error) {
  if (error) {
    console.log("There was an error: " + error.message);
  } else {
    console.log("file Deleted");
  }
});

// mkdirSync('directoryname')   - Creates Directory Synchronously
// rmdirSync('directoryname')   - Deletes Directory Synchronously
fs.mkdirSync("stuff");
setTimeout(function () {
  fs.rmdirSync("stuff");
}, 5000);

// mkdir('directoryname', 'call back')   - Creates Directory Asynchronously
// rmdir('directoryname', 'call back')   - Deletes Directory Asynchronously
fs.mkdir("stuff", function () {
  fs.readFile("./readMe.txt", "utf-8", function (error, data) {
    fs.writeFile("./stuff/writeMe.txt", data, function (error) {});
  });
});

setTimeout(function () {
  fs.unlink("./stuff/writeMe.txt", function () {
    fs.rmdir("./stuff", function () {});
  });
}, 5000);
