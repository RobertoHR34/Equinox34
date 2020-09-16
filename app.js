const http = require('http');

const port = process.env.Port || 5000;

const server = http.createServer((request, response)=> {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('hello World\n\n');

});

server.listen(port, (err) => {
    if (err){
          return console.log ('Something went wrong', err);
    }
    console.log (`Server Listening on: ${port}`);
});
