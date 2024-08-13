// Registering a Function : addCalc 
// Calling a Function : addCalc()
//querySeletor is used to perform the elements based on any selector (class and id)
//getElementById is used to perform the elements only for the ID selector
document.getElementById("add").addEventListener("click", addCalc); //We are registering the function.
//document.getElementById("sub").addEventListener("click", subCalc);
document.querySelector("#sub").addEventListener("click", subCalc);
document.querySelector(".sub").addEventListener("click", subCalc);
document.getElementById("mult").addEventListener("click", multCalc);
document.getElementById("div").addEventListener("click", divCalc);

function addCalc() {
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let calc = Number(a) + Number(b); // in most case the + operator used has concating. that's why implicit conversion has been performed.
    document.getElementById("calcans").innerHTML = calc;
}

function subCalc() {
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let calc = a - b;
    document.getElementById("calcans").innerHTML = calc;
}

function multCalc() {
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let calc = a * b;
    document.getElementById("calcans").innerHTML = calc;
}

function divCalc() {
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let calc = a / b;
    document.getElementById("calcans").innerHTML = calc;
}