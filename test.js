var shell = require("shelljs");

var words = "a string of words";

shell.exec("cd ~/Desktop; mkdir manBearPig; cd manBearPig/; touch test.txt; echo " + '"' + words + '"' + " >> test.txt");

