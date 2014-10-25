var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){
	var url = request.url;
	try{
		var fileName = url.substring(1);
		var file = fs.readFileSync(fileName);
		response.end(file);
	}
	catch(er){
		var error = fs.readFileSync("error.html");
		response.end(error);
	}
	

});
server.listen(8080);
console.log("Your Web Server is running in port 8080");
