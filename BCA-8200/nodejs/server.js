const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req);

    console.log(req.url);

    if (req.url === '/sania/hello') {
        // res.writeHead(200, { 'Content-Type': 'text/plain' });
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                console.log("Sorry , here is some error");
                return
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })

        // return any html file in res using fs
        return
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("This is my file ")
    }

})

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');

})