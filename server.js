var path = require('path');
var fs = require('fs');

var staticDir = path.join(__dirname, '/public');
var port = process.env.PORT || 3000;
var http = require('http')

var cssf = fs.readFileSync(staticDir + '/style.css', 'utf-8');
var indexfile = fs.readFileSync(staticDir + '/index.html', 'utf-8')
var notFoundFilename = fs.readFileSync(staticDir + '/404.html', 'utf-8')
function badresp(response){
	response.writeHead(404, {"Content-Type": "text/html"})
	response.write(notFoundFilename);
	response.end();
}
var ore = fs.readFileSync(staticDir + '/oregon.html', 'utf-8');
var hood = fs.readFileSync(staticDir + '/hood.html', 'utf-8');
var bach = fs.readFileSync(staticDir + '/bachelor.html', 'utf-8');
var ash = fs.readFileSync(staticDir + '/ashland.html', 'utf-8');
var about = fs.readFileSync(staticDir+ '/about.html', 'utf-8');
function OnRequest(request, response){
	console.log("Starting Request...")

	if(request.url == '/' || request.url =='/index.html'){
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(indexfile);
	}
	else if(request.url == '/style.css'){
		response.statusCode = 200;
		response.writeHead(200, {"Content-Type": "text/css"});
		response.write(cssf);
	}
		else if(request.url == '/oregon'){
		response.statusCode = 200;
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(ore);
	}
	else if(request.url == '/hood'){
		response.statusCode = 200;
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(hood);
	}
	else if(request.url == '/bachelor'){
		response.statusCode = 200;
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(bach);
	}
	else if(request.url == '/ashland'){
		response.statusCode = 200;
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(ash);
	}
	else if(request.url == '/about'){
		response.statusCode = 200;
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(about);
	}
	else{
		badresp(response);
	}
	response.end();
}
http.createServer(OnRequest).listen(port);
console.log("Server is now running... ");
