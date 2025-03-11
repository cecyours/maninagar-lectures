

const fs = require("fs");
const http = require("http");


fs.writeFileSync('text.txt', "hellow ")
const data = fs.readFileSync("text.txt", "utf-8")
console.log(data);


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js!");
})
server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
