var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Hello</h1>`);
}).listen(8080, function(){
    console.log("Listening to port 8080");
}).on('error', function(err){
    console.error("Error: ", err.message);
});