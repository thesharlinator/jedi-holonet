/**
 * http://usejsdoc.org/
 */

var express  = require('express');
var app      = express();                // create our app w/ express 
var http = require('http');
var path = require('path');
 var serverPort = process.env.PORT;

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
  

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html')); // load the single view file (angular will handle the page changes on the front-end)    
});


// Start the server
http.createServer(app).listen(serverPort, function () {
  console.log('Your app is listening on port %d (http://localhost:%d)', serverPort, serverPort); 
}); 