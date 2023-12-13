// //  R'N'R   December 12, 2023

// DEPENDENCIES
const express = require('express');

//MAIN FUNCTIONALITY
const app = express();

//ROUTES
app.get('/greeting', (req, res) => {
    res.send('Hello, stranger');
});



const port = 3000;



app.listen(port, () => {
    console.log(`I am your server, listening on port ${port}`);
});




