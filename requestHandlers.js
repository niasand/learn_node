var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called");
    exec("ls -lah",function (error,stdout,stderr) {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.write(stderr);
        response.end();
    });

}

function upload(response) {
    console.log("request handeler 'upload' was called");

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Upload");
    response.end();

}

function favicon() {
    console.log("request handeler 'favicon.ico' was called");

}


exports.start = start;
exports.upload = upload;
exports.favicon = favicon;