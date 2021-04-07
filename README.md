# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Project Environment setup
In this project we are using Node and Express environemnts. Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.
The Express app instance should be pointed to the project folder with .html, .css, and .js files.

## Project Dependencies
The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().
The body-parser package installed and included in the project.

## Local Server
Local server should be running and producing feedback to the Command Line through a working callback function.

## API Credentials
Create API credentials on OpenWeatherMap.com or use existing API key inside.

## inside server
Setup empty JS object to act as endpoint for all routes.
Require Express to run server and routes.
Here we are configuring express to use body-parser as middle-ware.
Cors for cross origin allowance.
Initialize the main project folder.
spin up the server.
Get route returns projectData.
Post route adds data to projectData.

## inside app
personal api key for open weather map api.
Converting the temperature from Kelvin on the site to degrees Celsius.
Get current date .
Get zip code.
Get user response.
Gets weather data.
Update UI.
Post data.
Get weather data and posts.
event listener to add function to existing HTML Dom element.

## create the package.json.
## create the package-lock.json.
## create folder : node_modules .
## modifying Css Styles.
## modifying Html Page.

