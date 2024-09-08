var express = require('express');

var app = express();
app.use(express.json()); // middleware function

app.post("/register", (req, res) => {

    let { name, email, password, address } = req.body;

    if (name === "" || email == "" || password === "" || address === "") {
        res.json({
            "error": "400"
        })
        console.log("Please Try Again")
    } else {
        res.json({
            "name": name,
            "email": email,
            "password": password,
            "address": address
        })
        console.log("Welcome", name);
    }

})


app.post('/add', (addreq, addres) => {
    let { vala, valb, valc } = addreq.body;
    addres.json({
        "vala": vala,
        "valb": valb,
        "valc": vala + valb
    })
})



app.listen(8080, () => {
    console.log("Register Server is Started");
})