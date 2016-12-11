var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response) {
    console.log("Request handler 'start' was called");
    exec("ls -lah",function (error,stdout,stderr) {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.write(stderr);
        response.end();
    });

}

function start_v1(response,postData){
    console.log("Requese Handler 'end' was called");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

function upload(response,postData) {
    console.log("request handeler 'upload' was called");

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Upload,you have sent this message: "+querystring.parse(postData).text);
    response.end();

}

function favicon() {
    console.log("request handeler 'favicon.ico' was called");

}


exports.start = start;
exports.upload = upload;
exports.favicon = favicon;
exports.start_v1 = start_v1;