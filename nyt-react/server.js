//server dependencies
let express = require("express");
const path = require("path");
let bodyParser = require("body-parser");
let logger = require("morgan");
let mongoose = require("mongoose");

//article schema
let Article = require("./src/models/Article");

//get express
let app = express();
//setup a port
let PORT = process.env.PORT || 3000;

//initiate morgan for logging
app.use(logger("dev"));
//JSON in the request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err,){
	console.log("Mongoose Error: ", err);
});

db.once("open", function(){
	console.log("Mongoose connection is a success");
});

//setting up routes
app.get("/api", function(req, res){
	Article.find({}).sort([["date", "descending"]])
		.exec()
		.then((result)=>{
			res.json(result);
		})
		.catch((error)=>{
			res.json(error);
		});
});

app.post("/api", function(req, res){
	Article.create({
		title: "Headline",
		date: "04-19-2018",
		url: "URL"
	})
	.then((result)=>{
		console.log(result);
		res.json(result);
	})
	.catch((error)=>{
		console.log(error);
	});
});

app.get("/api/saved", function(req, res){
	Article.find({
		saved: true
	}).sort([["date", "descending"]])
	.exec()
	.then((result)=>{
		res.json(result);
	})
	.catch((error)=>{
		res.json(error);
	});
});

app.post("/api/saved", function(req, res){
	Article.findOneAndUpdate({title: "Headline 2"}, {saved: true}, {new: true})
	.exec()
	.then((result)=>{
		console.log(result);
		res.json(result);
	})
	.catch((error)=>{
		console.log(error);
		res.json(error);
	});
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res){
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function(){
	console.log("Listening on PORT: " + PORT);
});