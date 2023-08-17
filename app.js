//Using Require to export multiple things
// var stuff = require('./stuff');
// console.log(stuff.counter(['Akanimoh', 'Rabi', 'Itoro', 'Uwem']));
// console.log(stuff.adder(2,4));
// console.log(stuff.adder(stuff.pi,4));

//Node Event Emiiter
    //It is a core module so we dont use a path but its name to call it
    var events = require('events');

    var myEmmitter = new events.EventEmitter();

    myEmmitter.on('someEvent',function (mssg) {
        console.log(mssg);
    })
    myEmmitter.emit('someEvent', 'This event was emitted');