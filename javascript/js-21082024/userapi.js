async function usersApi() {
    let res = await fetch("https://reqres.in/api/users?page=2", { "method": "GET" });
    console.log(res);
    let jsonofres = await res.json();
    console.log(jsonofres);

    for (let index in jsonofres['data']) {
        console.log(jsonofres['data'][index]['first_name']);
    }

    console.log(jsonofres)

}

usersApi();