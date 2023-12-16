// //  R'N'R   December 12, 2023

// DEPENDENCIES
const express = require("express")

const port = 3000;

//MAIN FUNCTIONALITY
const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!');
  });


app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;               //route with param 'name'
    res.send(`Hello, ${name}! Glad to see you!`)
});


app.get('/tip:total/:tipPercentage', (req, res) => {        //tip calculator route with 2 params
    const total = parseFloat(req.params.total);
    const tipPercentage = parceFloat(req.params.tipPercentage);
    res.send();
});


app.listen(port, () => {
    console.log(`Im alive on port ${port}`);
});