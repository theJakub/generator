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

'//Express is a library that we installed by running npm install express --save in the terminal. It is located in the node_modules folder. Express makes our job of writing a node server much easier by providing shortcuts for many of the tasks that would otherwise take a lot of code to complete. typeof(express) == "function".' + '\n' +

"var app = express();" + '\n' +

'//We call the express function to create a new "Express App" This "app" will handle every request that comes in to our server we are going to configure this app to handle the requests the way that we want.' + '\n' +

"var PORT = process.env.PORT || 8000;" + '\n' +

'//process.env.PORT is an environment (system) variable which allows an external application like Heroku to set the port for our server. Or, we use the default port of 8000. Remember! Ports below 1024 are reserved for administrator use only.' + '\n' +

"var bodyParser = require('body-parser');" + '\n' +

'//Require (but do not yet use) the body-parser middleware (installed using "npm install --save body-parser"). This will take any POST request body, parse it, and give it to us as an object called req.body, after the request has passed through that middleware.' + '\n' +

"var session = require('express-session');" + '\n' +

'//This does the same thing as above except that it handles our session data - it adds an object called req.session, which is unique to each user and persists for that user across requests.' + '\n' +

'var mongoose = require("mongoose");' + '\n' +

'//mongoose is our database interperater. It allows node to talk to the Mongodb databse.' + '\n' +

'mongoose.connect("mongodb://localhost");' + '\n' +

'//this mongoose.connect line tells the server where it will find the mongo database. in this case it is served locally' + '\n' +

"app.use(bodyParser.urlencoded({extended: false }));" + '\n' +

'//bodyParser.urlencoded() returns a function(req, res, next) which is used as this layer of middleware. We pass an options object in as the first parameter to configure the way that the bodyparser middleware function works. This handles form submit data.' + '\n' +

"app.use(bodyParser.json());" + '\n' +

'//Same, parse application/json (json AJAX requests).' + '\n' +

"app.use(express.static('public'));" + '\n' +

'//Serve all files and folders in "public" as-is.' + '\n' +

"app.use(function(req, res, next) {" + '\n' +
"	res.status(404);" + '\n' +
"	res.send('Address not found');" + '\n' +
"});" + '\n' +

'//If no other route matches, send a 404 error (file not found).' + '\n' +

"app.listen(PORT, function() {" + '\n' +
"	console.log('server started on ' + PORT);" + '\n' +
"});" + '\n' +

'//Start the server!';

function generateMBP(){
	shell.exec("cd ~/Desktop; mkdir newWebpageByMBP; cd newWebpageByMBP/; touch server.js; echo " + '"' + server + '"' + " >> server.js");
	shell.exec("cd ~/Desktop/newWebpageByMBP/; mkdir public/; cd public/; touch index.html; touch style.css; touch javascript.js; echo " + '"' + html + '"' + " >> index.html");
	shell.exec("cd ~/Desktop/newWebpageByMBP/; touch .gitignore; echo node_modules >> .gitignore");
	shell.exec("cd ~/Desktop/newWebpageByMBP/; npm init; npm install express --save; npm install --save body-parser");
}

generateMBP();
