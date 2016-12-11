function start() {
    console.log("Request handler 'start' was called");

}

function upload() {
    console.log("request handeler 'upload' was called");

}

function favicon() {
    console.log("request handeler 'favicon.ico' was called");

}


exports.start = start;
exports.upload = upload;
exports.favicon = favicon;