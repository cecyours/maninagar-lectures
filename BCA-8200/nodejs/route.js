const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });



    
    switch (req.url) {
        case '/':
            res.write("welcome to home page")
            break;
        case '/about':
            res.write("welcome to about page")
            break;
        case '/contact':
            res.write("welcome to contact page")
            break;
        default:
            break;
    }

    res.end()

})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');

})