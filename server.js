// //  R'N'R   December 12, 2023

// DEPENDENCIES
const express = require("express")

const port = 3000;

//Magic 8 ball responces
const magic8Responses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
  ];

//MAIN FUNCTIONALITY
const app = express()


//ROUTES
app.get('/greeting', (req, res) => {            //route 'greeting'
    res.send('Hello, stranger');
});


app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;               //route with param 'name'
    res.send(`Hello, ${name}! Glad to see you!`)
});


//tip calculator route with 2 params
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    const tipAmount = total*(tipPercentage / 100);
    res.send(`The tip amount is: ${tipAmount}`);
});



app.listen(port, () => {
    console.log(`Im alive on port ${port}`);
});