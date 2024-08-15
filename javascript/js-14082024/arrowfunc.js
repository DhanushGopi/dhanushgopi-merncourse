
// function we used here is an arrow fuction and we defined as an anomoyous function
document.querySelector("#inputbtn").addEventListener("click", () => {
    let val = document.querySelector("#inputval").value;
    console.log(val)
})


//document.querySelector("#dropdown").addEventListener("change", () => {
//let val = document.querySelector("#dropdown").value;
//console.log(val);
//})

// if the triggering and value on the same element. we can use the function parameter to pass and do the both at same time

//document.querySelector("#dropdown").addEventListener("change", (e) => {
//    console.log(e.target.value);
//})


document.querySelector("#dropdown").addEventListener("change", () => {
    let val = document.querySelector("#dropdown").value;
    document.querySelector("#showrollno").innerHTML = "Your Roll Number is " + val;
    console.log(val);
})