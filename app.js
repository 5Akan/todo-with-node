// //Video 12
// //Creating a server 
// var http = require('http');

// var server = http.createServer(function (req,res) {//A way to deal with request is using a function
//     console.log('Request was made: ' + req.url);
//     //Response Headers syntax
//     // res.writeHead(status,content-type)
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     //Now we end the response and send it to the browser
//     res.end('Hey People');
    
// })
// //We need to specify a port to listen to for request
// server.listen(3000,'127.0.0.1')
// console.log('Now listening to port 3000')

//Video 14
var http = require('http');
var fs = require('fs');