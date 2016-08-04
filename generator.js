var shell = require("shelljs");

//html to be written into the client file
var html = "<!DOCTYPE html>" + '\n' +
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

'Express is a library that we installed by running npm install express --save in the terminal. It is located in the node_modules folder. Express makes our job of writing a node server much easier by providing shortcuts for many of the tasks that would otherwise take a lot of code to complete. typeof(express) == "function".' + '\n' +

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
	shell.exec("cd ~/Desktop; mkdir newWebpageByMBP; cd newWebpageByMBP/; touch server.js; echo " + '"' + server + '"' + " >> server.js");
	shell.exec("cd ~/Desktop/newWebpageByMBP/; mkdir public/; cd public/; touch index.html; touch style.css; touch javascript.js; echo " + '"' + html + '"' + " >> index.html");
	shell.exec("cd ~/Desktop/newWebpageByMBP/; touch .gitignore; echo node_modules >> .gitignore");
	shell.exec("cd ~/Desktop/newWebpageByMBP/; npm init; npm install express --save; npm install --save body-parser");
}

generateMBP();
