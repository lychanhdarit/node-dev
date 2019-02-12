var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(8000);

app.get("/",function(req,res){
	//res.send("Trang chủ");
	res.sendFile(__dirname+"/index.html");
});
app.get("/lien-he",function(req,res){
	res.sendFile(__dirname+"/contact.html");
});

app.get("/tinh-tong/:so1/:so2",function(req,res){
	var n = req.params.so1;
	var m = req.params.so2;
	n = parseInt(n);
	m = parseInt(m);
	res.send("Tổng: "+(m+n));
	//res.sendFile(__dirname+"/index.html");
});