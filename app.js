//Using Require to export multiple things
// var stuff = require('./stuff');
// console.log(stuff.counter(['Akanimoh', 'Rabi', 'Itoro', 'Uwem']));
// console.log(stuff.adder(2,4));
// console.log(stuff.adder(stuff.pi,4));

//Node Event Emitter
    //It is a core module so we dont use a path but its name to call it
    // var events = require('events');

    // var emmitter = new events.EventEmitter();

    // emmitter.on('someEvent', function (mssg) {
    //     console.log(mssg)
    // })

    // emmitter.emit('someEvent','Emmited an Event')
    // var events = require('events');
    // var util = require('util');// Used for inheriting things

    // var Person = function(name) {
    //     this.name = name;
    // }

    // util.inherits(Person,events.EventEmitter);

    // var Akan = new Person('Akan');
    // var Rabi = new Person('Rabi');
    // var Uwem = new Person('Uwem');

    // var People = [Akan, Rabi, Uwem];

    // People.forEach(function (person) {
    //     person.on("talk",function (num) {
    //         console.log(`${person.name} said ${num}`)
    //     })
       
    // })

    // Akan.emit("talk", 9)

//Reading and Writing Files

//Synchronous method, ie executing one after the other

// var fs = require('fs');
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);
// fs.writeFileSync('writeMe.txt',readMe);

//Asynchronous method
var fs = require('fs');
var readMe = fs.readFile('readMe.txt', 'utf8', function(err,data){
    fs.writeFile('writeMe.txt',data,function(err,data){
        
    } );
});
