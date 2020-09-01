let http = require('http');
let fs = require('fs');
//step 1: get express library
let express=require('express');

//step2: create an express app
let app= express();
app.use(express.static('author'));
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./author/listAuthor.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};
 
http.createServer(handleRequest).listen(8000);