// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes
//get all route
app.get('/', (req, res) => {
    res.send('Hello Squirrel');
  });

  //get one route
app.get('/:username', (req, res) => {
    // Here you would look up the user from the database
    // Then render the template to display the users's info
  })

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});