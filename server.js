var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Wolrd Yang")
    response.end();
    console.log("...");
}).listen(8888)