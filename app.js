const express = require ("express"),
	app = express(),
	port = 3000;

app.get("/", (req, res) => res.send("Hi there! Welcome to my assignement."));

app.get("/speak/:animal", (req, res) => {
	const animal = req.params.animal.toLowerCase(),
		sounds = {
			pig: "Oink",
			cow: "Moo",
			dog: "Woof, woof",
			cat: "Meow",
			goldfish: "..."
		},
		sound = sounds[animal];

    res.send(`The ${animal} says '${sound}'`);
});

app.get("/repeat/:word/:times", (req, res) => {
    const times = req.params.times,
    	word = req.params.word;
    let sentence = ""
    
    for (let i = 0; i < times; i++) {
        sentence += word + ' ';
    }
    
    res.send(sentence);
});

app.get("*", (req, res) => res.send("Sorry, page not found"));

app.listen(port, () => console.log("Server has started"));