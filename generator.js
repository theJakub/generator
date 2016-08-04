var express = require("express");

var app = express();

var bodyParser = require("body-parser");

var open = require("open");

var fs = require("fs");

var shell = require("shelljs");

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

//html to be written into the client file
var clientHTML = "<!DOCTYPE html>" + '\n' +
"<html>" + '\n' +
"<head>" + '\n' +
"	<title></title>" + '\n' +
'	<meta charset="utf-8">' + '\n' +
'	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">' + '\n' +
'	<link rel="stylesheet" type="text/css" href="style.css">' + '\n' +
'		<script' + '\n' +
'		src="https://code.jquery.com/jquery-3.1.0.min.js"' + '\n' +
'		integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="' + '\n' +
'		crossorigin="anonymous"' + '\n' +
'	></script>' + '\n' +
'</head>' + '\n' +
'<body>' + '\n' +





'<script src="javascript.js"></script>' + '\n' +

'</body>' + '\n' +
'</html>"';

//js for the server.js
var server = "var express = require('express');" + '\n' +

"var app = express();" + '\n' +

"var PORT = process.env.PORT || 8000;" + '\n' +

"var bodyParser = require('body-parser');" + '\n' +

"var session = require('express-session');" + '\n' +

"app.use(bodyParser.urlencoded({extended: false }));" + '\n' +
"app.use(bodyParser.json());" + '\n' +


"app.use(express.static('public'));" + '\n' +

"app.use(function(req, res, next) {" + '\n' +
"	res.status(404);" + '\n' +
"	res.send('Address not found');" + '\n' +
"});" + '\n' +

"app.listen(PORT, function() {" + '\n' +
"	console.log('server started on ' + PORT);" + '\n' +
"});";

function generateMBP(){
	fs.mkdirSync('~/desktop/newWebpageByMBP', function(err){
		if(err){
			console.log("error");
			return;
		} 
		console.log("directory newWebpageByMBP created");
	});
	fs.mkdirSync('~/desktop/newWebpageByMBP/public', function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("public folder created");
	});
	fs.writeFile("~/desktop/newWebpageByMBP/public/index.html", clientHTML, function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("index.html created");
	});
	fs.writeFile("~/desktop/newWebpageByMBP/public/style.css", "", function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("style.css created");
	});
	fs.writeFile("~/desktop/newWebpageByMBP/public/javascript.js", "", function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("javascript.js created");
	});
	fs.writeFile("~/desktop/newWebpageByMBP/server.js", server, function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("server.js created");
	});
	shell.exec("cd ~/desktop/newWebpageByMBP");
	shell.exec("npm i");
	shell.exec("^c");
}

generateMBP();

app.use(function(req, res, next){
	res.status(404);
	res.send("you messed up");
});

app.listen(8000, function(){
	console.log("Listening on port 8000");
});