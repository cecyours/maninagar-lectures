const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/aryan/hello') {

        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Sorry, there was an error reading the file.");
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("This is my file");
    }
});

server.listen(8000, () => {
    console.log("server running at http://localhost:8000/");
});
