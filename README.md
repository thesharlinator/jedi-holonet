Jedi Holonet 
===================

This project is my personal playground to develop a sample Swagger API with NodeJS and MongoDB, a client AngularJS GUI, and deploy all the components of the applications with Docker Compose. 
 
The API can list, add, edit and remove Jedi from the Jedi Temple internal database (my sample data of choice ;) )

The GUI simply queries the API to retrieve the number of Jedi in the Temple and display it. 

> **Note**
> This is just for fun and is not intended to be a guide. Feel free to use it to build upo


How to Install
------------------

- Install **Docker**  & **Docker Compose** at https://www.docker.com/
- Clone the repository into the folder of your choice
- From within the project folder, launch: 

	```
	docker-compose up -d
	```
				
- Go to:
	- The AngularJS graphical user interface will be deployed at: http://localhost/  
	- The NodeJS / Swagger API is available at http://localhost:3000/ 
	- The Swagger UI of your API will be up at http://localhost:3000/docs 

How to use/test the API
----------

1. Head over to Swagger UI http://localhost:3000/docs 
2. You should see the list of available endpoints 
3. Test them out at your leisure! 