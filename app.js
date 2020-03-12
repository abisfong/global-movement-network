// jshint esversion:6
// Require statements
const express = require('express');
const bodyParser = require('body-parser');

// App intiation
const app = express();

// Set view engine to EJS
// Add body parser
// Serve public public files
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// Hompage
app.get('/', function(req, res){
  res.render('homepage', {navbarLinkColor: 'link-vanilla-grey'});
});

// About Us page
app.get('/about', function(req, res){
  res.render('about', {
    page: 'about-sidebar-links',
    navbarLinkColor: 'link-scuffed-light-grey'
  });
});

// Contact page
app.get('/contact', function(req, res){
  res.render('contact', {navbarLinkColor: 'link-scuffed-light-grey'});
});

// Login page
app.get('/login', function(req, res){
  res.render('login');
});

// Registration page
app.get('/register', function(req, res){
  res.render('register');
});

// Registration page
app.get('/events', function(req, res){

  var newEvent = function(title, month, day, year, time, desc){
    return {
      title: title,
      month: month,
      day: day,
      year: year,
      time: time,
      desc: desc
    };
  };

  var events = [
    newEvent('Event 1', 'January', '26', '2020', '1pm-2pm', 'Event 1 desc'),
    newEvent('Event 2', 'February', '23', '2020', '2:30pm-3pm', 'Event 2 desc'),
    newEvent('Event 3', 'March', '12', '2020', '4:30-5:30pm', 'Event 3 desc'),
    newEvent('Event 4', 'April', '2', '2020', '6pm-8pm', 'Event 3 desc'),
    newEvent('Event 5', 'May', '6', '2020', '3pm-7pm', 'Event 4 desc'),
    newEvent('Event 6', 'June', '18', '2020', '6am-8am', 'Event 5 desc'),
    newEvent('Event 7', 'December', '5', '2019', '2:30pm-3pm', 'Event 6 desc'),
    newEvent('Event 8', 'March', '12', '2020', '10am-1pm', 'Event 7 desc'),
    newEvent('Event 9', 'January', '1', '2020', '12pm-8pm', 'Event 8 desc')
  ];

  res.render('events', {
    events: events,
    page: 'events-sidebar-links',
    navbarLinkColor: 'link-scuffed-light-grey'
  });
});

// Start listener
app.listen(3000, function(){
  console.log('GMN local server started:\n  Listening on port 3000');
});

































// EOF
