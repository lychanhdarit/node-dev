var http = require("http");
var menudata = require("../controller/menu.js");
var settings = require("../setting.js");
var httpMsgs = require("./httpMsgs.js");
http.createServer(function(req,resp){
	
	switch(req.method){
		case "GET":
		if(req.url==="/"){
				httpMsgs.showHome(req,resp);
			}
			else if(req.url==="/menus"){
				menudata.getList(req,resp);
			}
			else{
				var idMenuPatt = "[0-9]+";
				var patt = new RegExp("/menus/"+idMenuPatt);
				if(patt.test(req.url)){
					patt = new RegExp(idMenuPatt);
					var idMenu = patt.exec(req.url);
					menudata.get(req,resp,idMenu);
				}
				else{
					httpMsgs.show404(req,resp);
				}
			}
			break;
		case "POST":
			if(req.url==="/menus"){
				var reqBody ='';
				req.on("data",function(data){
					reqBody+=data;
					if(reqBody.length>1e7)//10M
					{
						httpMsgs.show413(req,resp);
					}
				});
				req.on("end",function(){
					menudata.add(req,resp,reqBody);
				});
			}
			else{
				httpMsgs.show404(req,resp);
			}
			break;
		case "PUT":
			if(req.url==="/menus"){
				var reqBody ='';
				req.on("data",function(data){
					reqBody+=data;
					if(reqBody.length>1e7)//10M
					{
						httpMsgs.show413(req,resp);
					}
				});
				req.on("end",function(){
					menudata.update(req,resp,reqBody);
				});
			}
			else{
				httpMsgs.show404(req,resp);
			}
			break;
		case "DELETE":
			if(req.url==="/menus"){
				var reqBody ='';
				req.on("data",function(data){
					reqBody+=data;
					if(reqBody.length>1e7)//10M
					{
						httpMsgs.show413(req,resp);
					}
				});
				req.on("end",function(){
					menudata.delete(req,resp,reqBody);
				});
			}
			else{
				httpMsgs.show404(req,resp);
			}
			break;
		default:
			httpMsgs.show405(req,resp);
			break;
	}
	
}).listen(settings.webPort,function(){
	console.log("Dang chay voi port: "+ settings.webPort);
});