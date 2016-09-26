'use strict';

var app = require('connect')();
var http = require('http');
var swaggerTools = require('swagger-tools'); 
var jsyaml = require('js-yaml');
var fs = require('fs');
var cors = require('cors');
var mongoose = require('mongoose');     
var serverPort = process.env.PORT;

// swaggerRouter configuration
var options = {
  swaggerUi: '/swagger.json',
  controllers: './api/controllers',
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./api/swagger/swagger.json', 'utf8');

var swaggerDoc = jsyaml.safeLoad(spec); 
 

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {


  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Enable CORS   
  app.use(cors());
  
  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
  
  // Connect to the database 
  mongoose.connect(process.env.MONGODB_URI); 
  
  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });
});
