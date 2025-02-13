const http = require('http');
const fs = require('fs');
const path = require('path')

console.log("Starting server...")

http.createServer((req, res) => {
    
    if (req.url == "/index.html" || req.url == "/") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err){
                res.writeHead(404, "Error")
                res.write("<h1>404 Error, file not found</h1>")
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data);
                res.end();
            }
        });
    } else if (req.url == "/resources/style/style.css") {
        fs.readFile(path.join(__dirname, "resources", "style", "style.css"), (err, data) => {
            if (err){
                res.writeHead(404, "Error")
                res.write("<h1>404 Error, file not found</h1>")
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.write(data);
                res.end();
            }
        });
    } else if (req.url == "/resources/img/logo.png") {
        fs.readFile(path.join(__dirname, "resources", "img", "logo.png"), (err, data) => {
            if (err){
                res.writeHead(404, "Error")
                res.write("<h1>404 Error, file not found</h1>")
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "image/png"});
                res.write(data);
                res.end();
            }
        });
    } else if (req.url == "/resources/js/main.js") {
        fs.readFile(path.join(__dirname, "resources", "js", "main.js"), (err, data) => {
            if (err){
                res.writeHead(404, "Error")
                res.write("<h1>404 Error, file not found</h1>")
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/javascript"});
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404, "Error")
        res.write("<h1>404 Error, file not in directory</h1>")
        res.end(); 
    }

}).listen(8080);

console.log("Server running on http://localhost:8080...")
