// Load express
const express = require('express');
const path = require('path');


// require the Student "database"
const todoDb = require('./data/student-db');


// Create our express app
const app = express();

//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Mount middleware (app.use)

//Mount routes
app.get('/', function(req, res) {
    res.send('<h1>Hello Express</h1>');
  });
// Define a "root" route directly on app

app.get('/', function (req, res) {
    //never begin the name of the template with a forward slash
  res.render('home');
});

app.get('/students', function(req, res) {
    res.render('students/index', {
      students: studentDb.getAll()
    });
  });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});