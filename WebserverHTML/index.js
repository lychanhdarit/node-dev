var http =require("http");
var fs = require("fs");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	//var data = fs.readFileSync(__dirname+"/index.html","utf-8");
	//res.end(data);
	
	fs.createReadStream(__dirname+"/index.html").pipe(res);
}).listen(8000);