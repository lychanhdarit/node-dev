var http =require("http");
var fs = require("fs");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"application/json"});
	var obj={
		ho:"pham",
		ten:"khoa",
		namsinh:1990
	};
	res.end(JSON.stringify(obj));
}).listen(8000);