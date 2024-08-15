async function getApi() {
    // let res = await fetch("https://reqres.in/api/users"); // by default the http method will set to GET
    let res = await fetch("https://reqres.in/api/users", { "method": "GET" }); // we need to mention the http method
    console.log(res);
    let jsonofres = await res.json();
    console.log(jsonofres);
}

document.querySelector(".getApi").addEventListener("click", getApi);

//http request methods
// GET - retriving a single or multiple resources
// POST - creating a new resources
// PATCH - upating an existing resource
// PUT - Updating or creating an new resource
// DELETE - Destroying a resource

// HTTPS response code
// 2xx Success
// 200 - Success /OK
// 203 - No Content
// 403 - Forbidden
// 404 - Not Found
// link : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// Strictly read about the HTTPS Response Code.


// To intergate an API
//    step1 - API URL
//    step2 - Select the Method of action
//    step3 - Data need to get.
