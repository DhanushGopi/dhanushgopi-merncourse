var express = require("express");

var app = express();

app.get("/dhanushgopiget", (req, resp) => {
    resp.json(
        {
            "msg": "Dhansuhgopi"
        }
    )
    console.log(dhanushgopiget.msg);
}); //get method two parameters will be there ("/url", arrowfunction)
// inside the arrow function we need two parameter as (resquest,response)

app.post("/dhanushgopipost", (req, resp) => {
    resp.json(
        {
            "msg": "Dhansuhgopi Post"
        }
    )

    console.log(dhanushgopipost.msg);
});





app.post("/login", (req, resp) => {
    //let email = req['query']['email'];
    //let pswd = req['query']['password'];
    // using the JS Destructing

    let { email, password } = req['query'];
    // email and password is the query params

    if (email == 'dhanush1509@gmail.com') {
        resp.json(
            {
                "instatus": "True",
                "status": "Logged In",
                "email": email,
                "password": password

            }
        )
        console.log("Welcome", email);

    }
    else {
        console.log("Try Again stranger");
        {
            resp.json({
                "instatus": "False",
                "status": "Logged Out",
                "email": email,
                "password": pswd
            })

        }
    }
    //email[(length.email - 10)]

});


app.listen(8080, () => {
    console.log("Server Started");
}) // 8080 is the port number