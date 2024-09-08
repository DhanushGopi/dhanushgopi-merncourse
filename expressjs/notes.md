### Express JS
express js is used to develop the API (Server Side)

>npm init
Command to install the express.

>npm install express

To perform any Express Project. We need to import the express into the js file.

> var express = require("express");
 
Express Developed in the concept of functions.

Express JS and Node JS are the middle layer

Express JS is used to catch the request and processing with the database for the response.

Each time we need to start the server to check the updated version of the Rest Api

to over come this use this command,
> node --watch main.js

### JS Destructuring

let user = {
    "email" : "gmail.com",
    "pass": "pswd"
}

let {email,pass} = user;


### req.body it can be only used in the POST Method and not in GET Method.