var server = require("./server2");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/favicon.ico"] = requestHandlers.favicon.ico;
handle["/start_v1"] = requestHandlers.start_v1;

server.start(router.route,handle);
