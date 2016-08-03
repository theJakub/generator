var express = require("express");

var app = express();

var PORT = process.env.PORT || 8000;

var bodyParser = require("body-parser");

var session = require('express-session');

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.use(express.static("public"));

app.use(function(req, res, next) {
	res.status(404);
	res.send("Address not found");
});

app.listen(PORT, function() {
	console.log("server started on " + PORT);
});