//Video 23
//GET Request - app.get('route',fn)
var express = require('express');

var app = express();

app.get('/',function (req,res) {
    res.send('Our Home Page')
})

app.get('/contact',function (req,res) {
    res.send('Our Contact Page')
})

app.get('/profile/:id', function (req,res) {
    res.send('The requested to see a profile with an id of ' + req.params.id)
})
app.listen(3000);
