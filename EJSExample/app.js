const express = require("express"),
	app = express(),
	port = 3000;

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/subpage/:thing", (req, res) => {
	let thing = req.params.thing;

	res.render("subpage.ejs", {thingVar: thing})
});

app.listen(port, () => console.log("Server has started"));