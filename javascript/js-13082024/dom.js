function changeText() {
    let val = document.getElementById("input_id").value;
    document.getElementById("h1name").innerHTML = 'Vannakam da mapala';
    document.getElementById("h2name").innerHTML = 'Vannakam da mapala';
    document.getElementById("h3name").innerHTML = val;
    console.log(val)

    if (val == '') {
        console.log("Type anything")
        alert("Please type something input");
    }
}