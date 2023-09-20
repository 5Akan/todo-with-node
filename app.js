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
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

// //createReadStream has an eventlistener to listen to when the buffer sends a chunk of data
// //Below it listens and fires the function when it receives a chunk of data
// myReadStream.on('data',function (chunk) {
//     console.log('New Chunk received')
//     console.log(chunk) 

// })

//Video 15
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// //createReadStream has an eventlistener to listen to when the buffer sends a chunk of data
// //Below it listens and fires the function when it receives a chunk of data
// myReadStream.on('data',function (chunk) {
//     console.log('New Chunk received')
//     myWriteStream.write(chunk);

// }

//Video 16 and 17
//Pipe..short of what is up
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req,res) {//A way to deal with request is using a function
//     console.log('Request was made: ' + req.url);
//     //Response Headers syntax
//     // res.writeHead(status,content-type)
//     res.writeHead(200,{'Content-Type':'text/html'})
//     var myReadStream = fs.createReadStream(__dirname + '/use.html','utf8');

//     myReadStream.pipe(res);
    
// })
// //We need to specify a port to listen to for request
// server.listen(3000,'127.0.0.1')
// console.log('Now listening to port 3000')

//Video 18
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req,res) {//A way to deal with request is using a function
//     console.log('Request was made: ' + req.url);
//     //Response Headers syntax
//     // res.writeHead(status,content-type)
//     res.writeHead(200,{'Content-Type':'application/json'})
//     var myObj ={
//         name:"Akanimoh",
//         job:'Ninja',
//         age:23
//     }
//     //res.end(string or a buffer)
//     res.end(JSON.stringify(myObj));
   
    
// })

// //We need to specify a port to listen to for request
// server.listen(3000,'127.0.0.1')
// console.log('Now listening to port 3000')

//Video 19
//Basic Routing
var http =require('http');
var fs =require('fs');

var server = http.createServer(function (req,res) {
    console.log('Listening to '+ req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.createReadStream(__dirname + '/use.html','utf8').pipe(res);

    }else if(req.url === '/contact'){
        fs.createReadStream(__dirname +'/contact.html','utf8').pipe(res);
    }else if(req.url === '/api/ninjas'){
        var ninjas = [
            {name:'Akanimoh', Age:23},
            {name:'Itoro', Age:15}
        ]
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);
    }
    
})

server.listen(3000,'127.0.0.1');
console.log('Now listening to port 3000')
