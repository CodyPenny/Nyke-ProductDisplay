const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");
const app = express();
const PORT = 3002;
const db = require("../database-mongoose/index");

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

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname + "/../client-react/dist")));

app.use("/api", router);

app.listen(PORT, () => {
	console.log(`listening on port`.green, `${PORT}`.cyan);
});
