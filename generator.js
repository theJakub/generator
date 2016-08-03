var express = require("express");

var app = express();

var bodyParser = require("body-parser");

var open = require("open");

var fs = require("fs");

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

//starting html with explanation of code and filename input
var html = ""; 

//html to be written into the client file
var clientHTML = "";

//js for the server.js
var server = "";

open(html, function(err){ // this will open the clients browser and display out html text.
	if(err){
		console.log('this didnt work');
	}
});

app.get("/create/:fileName", function(req, res){
	fs.mkdir('~/desktop/' + req.params.fileName, function(err){
		if(err){
			console.log("error");
			return;
		} 
		console.log("directory " + req.params.fileName + " created");
	});
	fs.mkdir('~/desktop/' + req.params.fileName + '/public', function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("public folder created");
	});
	fs.writeFile("~/desktop/" + req.params.fileName + "/public/index.html", clientHTML, function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("index.html created");
	});
	fs.writeFile("~/desktop/" + req.params.fileName + "/public/style.css", "", function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("style.css created");
	});
	fs.writeFile("~/desktop/" + req.params.fileName + "/public/javascript.js", "", function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("javascript.js created");
	});
	fs.writeFile("~/desktop/" + req.params.fileName + "/server.js", server, function(err){
		if(err){
			console.log("error");
			return;
		}
		console.log("server.js created");
	});

});

app.use(function(req, res, next){
	res.status(404);
	res.send("you messed up");
});

app.listen(8000, function(){
	console.log("Listening on port 8000");
});