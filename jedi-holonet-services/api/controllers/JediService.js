'use strict';

var fs = require('fs');
var swaggerMongoose = require('swagger-mongoose');
var spec = fs.readFileSync('./api/swagger/swagger.json', 'utf8');
var Jedi = swaggerMongoose.compile(spec).models.Jedi;  

exports.createJedi = function(args, res, next) {

    res.setHeader('Content-Type', 'application/json');
     
    
	// Add a Jedi character
    Jedi.create({ 
    	holonet_id: (args.jedi.value.first_name.charAt(0) + 
    			args.jedi.value.last_name.replace(/[^0-9a-z]/gi, '')).toLowerCase(),
        first_name : args.jedi.value.first_name,
        last_name: args.jedi.value.last_name,
        living: args.jedi.value.living, 
        lightsaber: args.jedi.value.lightsaber,
        date_of_birth: args.jedi.value.date_of_birth,
        status: args.jedi.value.status 
    }, function(err, todo) {
        if (err)
            res.end(err);

        // get and return all the todos after you create another
        Jedi.find(function(err, jedi) {
            if (err)
                res.end(err) 
            res.end(JSON.stringify(jedi));

        });
    });
  
}

exports.deleteJedi = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
   res.setHeader('Content-Type', 'application/json');
    
   // Find the Jedi first 
   Jedi.findOne({ 'holonet_id': args.holonet_id.value },   function (err, jedi) {
	  if (err)
	  {
	  	res.end(err);
	  }
	  else
	  {
		  Jedi.remove({
		       holonet_id : args.holonet_id.value
		   }, function(err, deletionResult) {
		       
			  if (err)
			  {
				  res.end(err);
			  }
			  else
			  {
				  res.end(JSON.stringify(jedi));
			  }
		   });
	  }
	});
     
}

exports.findJedi = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
 	Jedi.findOne({ 'holonet_id': args.holonet_id.value },   function (err, jedi) {
	  if (err)
		  {
		  	res.end(err);
		  }
	  else
		  {
          res.end(JSON.stringify(jedi));
		  }
	})
}

exports.listJedi = function(args, res, next) {

	var $loc_filters = {};

	if(args.first_name.value)
		$loc_filters.first_name = args.first_name.value ;
	if(args.last_name.value)
		$loc_filters.last_name = args.last_name.value ;
	if(args.holonet_id.value)
		$loc_filters.holonet_id = args.holonet_id.value ;
	if(args.living.value != undefined)
		$loc_filters.living = args.living.value ;
	if(args.status.value)
		$loc_filters.status = args.status.value ;
	if(args.lightsaber_color.value)
		$loc_filters['lightsaber.color'] = args.lightsaber_color.value ;
	if(args.lightsaber_style.value)
		$loc_filters['lightsaber.style'] = args.lightsaber_style.value ;
		 
	
	// use mongoose to get all todos in the database
    Jedi.find(  $loc_filters , function(err, jedi) {

    	// Filter by arguments? 
    	
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
        {
        	res.end(err)
        }
        else
        {
            res.end(JSON.stringify(jedi)); // return all jedi in JSON format
        } 
    });
}

