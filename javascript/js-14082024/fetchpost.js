async function getApi() {
    let datahs = {
        "name": "Dhanush Gopi",
        "job": "UX Designer",
        "passval": document.querySelector("#inputval").value,
    };
    //let res = await fetch("https://reqres.in/api/users", { "method": "POST", body: JSON.stringify(datahs)});
    // JSON.stringify() is used to convert the json to string
    // header used to send the data has the json without abstraction.
    let res = await fetch("https://reqres.in/api/users", { //url and method is defined by the api developer.
        "method": "POST", body: JSON.stringify(datahs), // url and method we can't change and need to be used the same.
        headers: { "content-type": "application/json" }
    });
    console.log(res);
    let jsonofres = await res.json();
    console.log(jsonofres);

}

document.querySelector(".getApi").addEventListener("click", getApi);
