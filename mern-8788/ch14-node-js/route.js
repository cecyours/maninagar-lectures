const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain'});

    switch (req.url) {
        case '/':
            res.write("Welcome to home page")
            break;
        case '/about':
            res.write("Welcome to about page")
            break;
        case '/contact':
            res.write("Welcome to contact page")
            break;
        case '/user':
            res.write("Welcome to user page")
            break;
    
        default:
            break;
    }
    res.end();
})

server.listen(3000, () => {
    console.log("server running at http://localhost:3000/");
})