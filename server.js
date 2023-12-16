// //  R'N'R   December 12, 2023

// DEPENDENCIES
<<<<<<< HEAD
const express = require("express")

const port = 3000;

//MAIN FUNCTIONALITY
const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

=======
const express = require('express');

//MAIN FUNCTIONALITY
const app = express();

//ROUTES
app.get('/greeting', (req, res) => {            //route 'greeting'
    res.send('Hello, stranger');
});
>>>>>>> main

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;               //route with param 'name'
    res.send(`Hello, ${name}! Glad to see you!`)
});


<<<<<<< HEAD
app.get('/tip:total/:tipPercentage', (req, res) => {        //tip calculator route with 2 params
    const total = parseFloat(req.params.total);
    const tipPercentage = parceFloat(req.params.tipPercentage);
    res.send();
});


app.listen(port, () => {
    console.log(`Im alive on port ${port}`);
});
=======

const port = 3000;


app.listen(port, () => {
    console.log(`I am your server, listening on port ${port}`);
});




>>>>>>> main
