/*
    Lesson 8: Custom Events    
*/
var events = require("events");
var util = require("util");

// event.EventEmitter()             - Initializes an object to assign custom events on
var myEvent1 = new events.EventEmitter();
var myEvent2 = new events.EventEmitter();

// on('custom event name', function)- Assigns the object with a custom event and a function that is invoked when the event is emmited
myEvent1.on("myCustomEvent", function (message) {
  console.log(message);
});

// emit('event name', argument)     - Emits the event, takes an optional argument based on the callback function.
myEvent1.emit("myCustomEvent", "This is a custom event");

// on('custom event name', function)- Assigns the object with a custom event and a function that is invoked when the event is emmited
myEvent2.on("myCustomEvent", function () {
  console.log("This is another custom event");
});

// emit('event name')               - Emits the event, takes an optional argument based on the callback function.
myEvent2.emit("myCustomEvent");

var Person = function (name) {
  this.name = name;
};

// inherit('object name', 'functionality')
util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var maria = new Person("Maria");
var steve = new Person("Steve");

var people = [james, maria, steve];

people.forEach(function (person) {
  person.on("speak", function (message) {
    console.log(person.name + " said: " + message);
  });
});

james.emit("speak", "hey guys...");
maria.emit("speak", "Yoooo...!");
steve.emit("speak", "Ola amigos!");
