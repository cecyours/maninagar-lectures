//Core Modules (built in )
const fs = require('fs')
const http = require("http");


fs.writeFileSync('test1.txt', "Hello from us ")

const data = fs.readFileSync("test.txt", "utf-8")

console.log(data);


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js!");
});

server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});


//