function addCalc() {
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let calc = Number(a) + Number(b);
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
    let calc = Number(a) * Number(b);
    document.getElementById("calcans").innerHTML = calc;
}

function divCalc() {
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;
    let calc = Number(a) / Number(b);
    document.getElementById("calcans").innerHTML = calc;
}