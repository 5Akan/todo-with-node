//Video 23
//GET Request - app.get('route',fn)
// var express = require('express');

// var app = express();

// app.get('/',function (req,res) {
//     res.send('Our Home Page')
// })

// app.get('/contact',function (req,res) {
//     res.send('Our Contact Page')
// })

// app.get('/profile/:id', function (req,res) {
//     res.send('The requested to see a profile with an id of ' + req.params.id)
// })
// app.listen(3000);

//Video 24
//Were using template engines
var express = require('express');

var app = express();

app.set('view engine', 'ejs')

app.get('/',function (req,res) {
    res.render('partials/use')
})

app.get('/contact',function (req,res) {
    res.render('partials/contact')
})

app.get('/profile/:id', function (req,res) {
    // Video 26
    var data = {name:'Akan', age:23, hobbies:['anime','dance','movies']}
    res.render('partials/profile',{id:req.params.id,data:data});
})
app.listen(3000);
// Video 27