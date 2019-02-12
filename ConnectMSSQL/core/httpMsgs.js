var settings = require("../setting.js");

exports.show500 = function(req,resp,err){
	if(settings.httpMsgsFomat === "HTML")
	{
		resp.writeHead(500,"Internal Error occurred",{"Content-Type":"text/html"});
		resp.write("<html><head><title>500</title><head><body>500:Internal Error.Details: "+err+"</body></html>");	
	}
	if(settings.httpMsgsFomat === "JSON")
	{
		resp.writeHead(500,{"Content-Type":"application/json"});
		resp.write(JSON.stringify({data:"Error Occurred: "+err}));
	}
	resp.end();
}

exports.sendJson = function(req,resp,data){
	
	resp.writeHead(200,{"Content-Type":"application/json"});
	if(data){
		resp.write(JSON.stringify(data));
	}
	
	resp.end();
}

exports.show405 = function(req,resp){
	if(settings.httpMsgsFomat === "HTML")
	{
		resp.writeHead(405,"Method not support",{"Content-Type":"text/html"});
		resp.write("<html><head><title>405</title><head><body>405: Method not supported </body></html>");	
	}
	if(settings.httpMsgsFomat === "JSON")
	{
		resp.writeHead(405,{"Content-Type":"application/json"});
		resp.write(JSON.stringify({data:"Method not supported"}));
	}
	resp.end();
}

exports.show404 = function(req,resp){
	if(settings.httpMsgsFomat === "HTML")
	{
		resp.writeHead(404,"Resource not found",{"Content-Type":"text/html"});
		resp.write("<html><head><title>404</title><head><body>405: Resource not found</body></html>");	
	}
	if(settings.httpMsgsFomat === "JSON")
	{
		resp.writeHead(404,{"Content-Type":"application/json"});
		resp.write(JSON.stringify({data:"Resource not found "}));
	}
	resp.end();
}

exports.show413 = function(req,resp){
	if(settings.httpMsgsFomat === "HTML")
	{
		resp.writeHead(413,"Request Entity Too Large",{"Content-Type":"text/html"});
		resp.write("<html><head><title>413</title><head><body>413: Request Entity Too Large</body></html>");	
	}
	if(settings.httpMsgsFomat === "JSON")
	{
		resp.writeHead(413,{"Content-Type":"application/json"});
		resp.write(JSON.stringify({data:"Request Entity Too Large "}));
	}
	resp.end();
}

exports.show200 = function(req,resp){
	resp.writeHead(200,{"Content-Type":"application/json"});
	resp.end();
}
exports.showHome = function(req,resp){
	if(settings.httpMsgsFomat === "HTML")
	{
		resp.writeHead(200,"Home Page",{"Content-Type":"text/html"});
		resp.write("<html><head><title>Home Page</title><head><body>Valid endpoint</body></html>");	
	}
	if(settings.httpMsgsFomat === "JSON")
	{
		resp.writeHead(200,{"Content-Type":"application/json"});
		resp.write(JSON.stringify([
		{
			url:"/menus",
			operation:"GET",
			description:"To List menu data"
		}
		]));
	}
	resp.end();
}