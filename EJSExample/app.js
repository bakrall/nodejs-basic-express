const express = require("express"),
	app = express(),
	port = 3000;

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/subpage/:thing", (req, res) => {
	let thing = req.params.thing;

	res.render("subpage.ejs", {thingVar: thing});
});

app.get("/posts", (req, res) => {
	let posts = [
		{title: "Post 1", author: "Suzy"},
		{title: "Post 2", author: "Rick"},
		{title: "Post 3", author: "Pamela"}
	];

	res.render("posts.ejs", {posts: posts});
});

app.listen(port, () => console.log("Server has started"));