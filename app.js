// Require Libraries
const express = require('express');

// App Setup
const app = express();

const Tenor = require("tenorjs").client({
  // Replace with your own key
  "Key": "2HD1XTJIRK85", // https://tenor.com/developer/keyregistration
  "Filter": "high", // "off", "low", "medium", "high", not case sensitive
  "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
//get all route
app.get('/', (req, res) => {
  console.log(req.query) // => "{ term: hey" }
     // Handle the home page when we haven't queried yet
     term = ""
     if (req.query.term) {
         term = req.query.term
     }
     // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
     Tenor.Search.Query(term, "10")
         .then(response => {
             // store the gifs we get back from the search
             const gifs = response;
             // pass the gifs as an object into the home page
             res.render('home', { gifs })
         }).catch(console.error);
  });

  //get one route
app.get('/:username', (req, res) => {
    // Here you would look up the user from the database
    // Then render the template to display the users's info
  })

  app.get('/greetings/:name', (req, res) => {
    // grab the name from the path provided
    const name = req.params.name;
    // render the greetings view, passing along the name
    res.render('greetings', { name });
  })

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});