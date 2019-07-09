const express = require("express"),
	app = express(),
	port = 3000;
//tell Express to render files from "public" directory
app.use(express.static("public"));

//tell Express what is the type of files it serves
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/subpage/:thing", (req, res) => {
	let thing = req.params.thing;

	res.render("subpage", {thingVar: thing});
});

app.get("/posts", (req, res) => {
	let posts = [
		{title: "Post 1", author: "Suzy"},
		{title: "Post 2", author: "Rick"},
		{title: "Post 3", author: "Pamela"}
	];

	res.render("posts", {posts: posts});
});

app.listen(port, () => console.log("Server has started"));