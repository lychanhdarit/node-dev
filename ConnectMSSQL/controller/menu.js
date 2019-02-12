var db = require("../core/db.js");
var httpMsgs = require("../core/httpMsgs.js");
var util = require("util");
exports.getList= function(req,resp){
	
	db.executeSql("SELECT * FROM MenuVN",function(data,err){
		if(err){
			httpMsgs.show500(req,resp,err);
		}
		else{ 
			httpMsgs.sendJson(req,resp,data);
		} 
	});
};

exports.get = function(req,resp,idmenu){
	db.executeSql("SELECT * FROM MenuVN WHERE ID="+idmenu,function(data,err){
		if(err){
			httpMsgs.show500(req,resp,err);
		}
		else{ 
			httpMsgs.sendJson(req,resp,data);
		} 
	});
};

exports.add = function(req,resp,reqBody){
	try{
		if(!reqBody) throw new Error("Input not Valid");
		var data = JSON.parse(reqBody);
		if(data){
			
			var sql="INSERT INTO menuVN(Id,Name,Url) VALUES"; 
			sql+= util.format("(%d,'%s','%s')",data.Id,data.Name,data.Url);
			
			db.executeSql(sql,function(data,err){
				if(err){
					httpMsgs.show500(req,resp,err);
				}
				else{ 
					httpMsgs.show200(req,resp);
				} 
			});
		}
		else{
			throw new Error("Input not Valid");
		}
	}
	catch(ex){
		httpMsgs.show500(req,resp,ex);
	}
};

exports.update = function(req,resp,reqBody){
	try{
		if(!reqBody) throw new Error("Input not Valid");
		var data = JSON.parse(reqBody);
		if(data){
			
			if(!data.Id) throw new Error("Id no provided");
			var sql="UPDATE menuVN SET"; 
			var isDataProvided = true;
			if(!data.Name){
				sql+=" Name = '"+data.Name+"',";
				isDataProvided = true;
			}
			if(!data.Url){
				sql+=" Url = '"+data.Name+"',";
				isDataProvided = true;
			}
			sql = sql.slice(0,-1);//remove last coma
			sql+=" WHERE Id="+data.Id;
			db.executeSql(sql,function(data,err){
				if(err){
					httpMsgs.show500(req,resp,err);
				}
				else{ 
					httpMsgs.show200(req,resp);
				} 
			});
			
		}
		else{
			throw new Error("Input not Valid");
		}
	}
	catch(ex){
		httpMsgs.show500(req,resp,ex);
	}
};

exports.delete = function(req,resp,reqBody){
	try{
		if(!reqBody) throw new Error("Input not Valid");
		var data = JSON.parse(reqBody);
		if(data){
			
			if(!data.Id) throw new Error("Id no provided");
			var sql="DELETE menuVN  WHERE Id="+data.Id;
			db.executeSql(sql,function(data,err){
				if(err){
					httpMsgs.show500(req,resp,err);
				}
				else{ 
					httpMsgs.show200(req,resp);
				} 
			});
			
		}
		else{
			throw new Error("Input not Valid");
		}
	}
	catch(ex){
		httpMsgs.show500(req,resp,ex);
	}
};