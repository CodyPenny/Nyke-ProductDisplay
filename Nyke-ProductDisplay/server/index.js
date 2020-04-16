const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");
const app = express();
const morgan = require('morgan');

// const db = require("../database-mongoose/index");

var colors = require("colors");
colors.setTheme({
	silly: "rainbow",
	input: "grey",
	verbose: "cyan",
	prompt: "grey",
	info: "green",
	data: "grey",
	help: "cyan",
	warn: "yellow",
	debug: "blue",
	error: "red"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname + "/../client-react/dist")));

if(process.env.NODE_ENV === 'production') {
	app.get('/', function (req, res) {
		 res.sendFile(path.join(__dirname, 'dist', 'index.html'));
	});
  }


app.use("/api", router);
// app.use("api", (req,res) => {
// 	res.send('test')
// })

module.exports = app;


