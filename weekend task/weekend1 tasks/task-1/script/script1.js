/*Login Form*/

function showLogin() {
    document.querySelector('.loginbtn').classList.remove("unactivebtn");
    document.querySelector('.loginbtn').classList.add("activebtn");
    document.querySelector('.registerbtn').classList.add("unactivebtn");
    document.querySelector('.registerbtn').classList.remove("activebtn");
    document.querySelector('.contactbtn').classList.add("unactivebtn");
    document.querySelector('.contactbtn').classList.remove("activebtn");
    document.querySelector(".loginform").classList.remove("formhide");
    document.querySelector(".contactform").classList.add("formhide");
    document.querySelector(".registerform").classList.add("formhide");
};

document.querySelector(".loginbtn").addEventListener('click', showLogin);

function showRegister() {
    document.querySelector('.registerbtn').classList.remove("unactivebtn");
    document.querySelector('.registerbtn').classList.add("activebtn");
    document.querySelector('.loginbtn').classList.add("unactivebtn");
    document.querySelector('.loginbtn').classList.remove("activebtn");
    document.querySelector('.contactbtn').classList.add("unactivebtn");
    document.querySelector('.contactbtn').classList.remove("activebtn");
    document.querySelector(".registerform").classList.remove("formhide");
    document.querySelector(".contactform").classList.add("formhide");
    document.querySelector(".loginform").classList.add("formhide");
};

document.querySelector(".registerbtn").addEventListener('click', showRegister);

function showContact() {
    document.querySelector('.registerbtn').classList.add("unactivebtn");
    document.querySelector('.registerbtn').classList.remove("activebtn");
    document.querySelector('.loginbtn').classList.add("unactivebtn");
    document.querySelector('.loginbtn').classList.remove("activebtn");
    document.querySelector('.contactbtn').classList.remove("unactivebtn");
    document.querySelector('.contactbtn').classList.add("activebtn");
    document.querySelector(".registerform").classList.add("formhide");
    document.querySelector(".contactform").classList.remove("formhide");
    document.querySelector(".loginform").classList.add("formhide");
};

document.querySelector(".contactbtn").addEventListener('click', showContact);


/* pages nav*/

/*const showSketchEight = () => {*/
function showSketchEight() {
    document.querySelector('.sketch9').classList.remove("activesketch");
    document.querySelector('.sketch8').classList.add("activesketch");
};

document.querySelector('.nextbtn9').addEventListener('click', showSketchEight);

