const express = require ("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hi there! Welcome to my assignement."));

app.get("/speak/:animal", (req, res) => {
    if (req.params.animal === 'pig') {
        res.send("The pig says Oink");
    } else if (req.params.animal === 'cow') {
        res.send("The cow says Moo");
    } else if (req.params.animal === 'dog') {
        res.send("The dog says 'Woof woof'");
    }
});

app.get("/repeat/:word/:times", (req, res) => {
    const times = req.params.times;
    const word = req.params.word;
    let sentence = ""
    
    for (let i = 0; i < times; i++) {
        sentence += word + ' ';
    }
    
    res.send(sentence);
});

app.get("*", (req, res) => res.send("Sorry, page not found"));


app.listen(port, () => console.log("Server has started"));