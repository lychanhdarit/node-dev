var http = require('http');
http.createServer(
	function(request,response){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<html>');
		response.write('<head>');
		response.write('<title>Hello world </title>');
		response.write('</head>');
		response.write('<body> <h1>Hello world<h1> </body>');
		response.write('</html>');
		 var param = request.url;
		response.write("Day la URL: "+param);
		response.end();
	}

).listen(8000);