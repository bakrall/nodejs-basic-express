let express = require("express"),
	app = express(),
	port = 3000,
	bodyParser = require("body-parser"),
	friends = ["Tony", "Liz", "Mary"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home"));

app.get("/friends", (req, res) => {
	res.render("friends", {friends: friends});
});

app.post("/addfriend", (req, res) => {
	let newFriend = req.body.newfriend;

	friends.push(newFriend);
	res.redirect("/friends");
})

app.listen(port, () => console.log("Server has started"));
