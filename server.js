// //  R'N'R   December 12, 2023

// DEPENDENCIES
const express = require('express');

//MAIN FUNCTIONALITY
const app = express();

//ROUTES
app.get('/greeting', (req, res) => {            //route 'greeting'
    res.send('Hello, stranger');
});

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;               //route with param 'name'
    res.send(`Hello, ${name}! Glad to see you!`)
});



const port = 3000;


app.listen(port, () => {
    console.log(`I am your server, listening on port ${port}`);
});




