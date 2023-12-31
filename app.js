var express = require('express');
var todoController = require('./controllers/todocontroller');

var app = express();

//set up template engines

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
//The above isnt route specific ,ie  all routes are mapped to it
//express.static() is a function built into express to serve up static files

//Fire Controllers
//By passing app into the funtion below it is available
//to us in todocontroller.js
todoController(app);


//Listen to port
app.listen(3000);
console.log('Listening to port 3000')

