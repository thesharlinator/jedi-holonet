Jedi Holonet 
===================

This project is my personal playground to try my hands at a few frameworks. It comprises of: a sample Swagger API with NodeJS, a MongoDB database, a very simple client GUI with AngularJS and Bootstrap, and Docker containers to deploy all those components with Docker Compose. 
 
For now, the API can list, add, edit and remove Jedi from the Jedi Temple internal database (my sample data of choice... ;) )

The GUI simply queries the API to retrieve the number of Jedi in the Temple and display it. 

> **Note**
> This is just for fun and is not intended to be a guide. Feel free to use it to build your own fun stuff, but it's a work in progress! Many thanks to this page https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular and the Swagger UI documentation. 

How to Install
------------------

- Install **Docker**  & **Docker Compose** (https://www.docker.com/)
- Clone the repository into the folder of your choice
- From within the project folder, launch: 

	```
	docker-compose up -d
	```
				
- Go to:
	- The graphical user interface will be deployed at: http://localhost/  
	- The NodeJS / Swagger API is available at http://localhost:3000/ 
	- The Swagger UI of your API will be up at http://localhost:3000/docs 
	
	
> The Docker Compose file uses mounted volumes; you might run into some issues on Windows. I've tested it only on Ubuntu 12.04 and Mac OS X (El Capitan). 

How to use the API (Swagger UI)
----------

1. Head over to the Swagger UI http://localhost:3000/docs 
2. You should see the list of available endpoints 
3. Have fun!
