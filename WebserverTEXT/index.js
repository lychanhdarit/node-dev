var http =require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("Đa Ric");
}).listen(8000);
