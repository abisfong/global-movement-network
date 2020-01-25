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
  res.render('homepage');
});

// Start listener
app.listen(3000, function(){
  console.log('GMN local server started:\n  Listening on port 3000');
});

































// EOF
