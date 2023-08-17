//Using Require to export multiple things
var stuff = require('./stuff');
console.log(stuff.counter(['Akanimoh', 'Rabi', 'Itoro', 'Uwem']));
console.log(stuff.adder(2,4));
console.log(stuff.adder(stuff.pi,4));