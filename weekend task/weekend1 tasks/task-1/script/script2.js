/* pages nav*/

/*const showSketchEight = () => {*/

/*Sketch Nine State*/
const backSketchTwo = () => {
    document.querySelector('.sketch9').classList.remove("activesketch");
    document.querySelector('.sketch2').classList.add("activesketch");
};

document.querySelector('.prevbtn9').addEventListener('click', backSketchTwo);

function showSketchEight() {
    document.querySelector('.sketch9').classList.remove("activesketch");
    document.querySelector('.sketch8').classList.add("activesketch");
};
document.querySelector('.nextbtn9').addEventListener('click', showSketchEight);


/*Sketch Eight State*/

const backSketchNine = () => {
    document.querySelector('.sketch8').classList.remove("activesketch");
    document.querySelector('.sketch9').classList.add("activesketch");
};

document.querySelector('.prevbtn8').addEventListener('click', backSketchNine);

function showSketchSeven() {
    document.querySelector('.sketch8').classList.remove("activesketch");
    document.querySelector('.sketch7').classList.add("activesketch");
};
document.querySelector('.nextbtn8').addEventListener('click', showSketchSeven);

/*Sketch Seven State*/

const backSketchEight = () => {
    document.querySelector('.sketch7').classList.remove("activesketch");
    document.querySelector('.sketch8').classList.add("activesketch");
};

document.querySelector('.prevbtn7').addEventListener('click', backSketchEight);

function showSketchSix() {
    document.querySelector('.sketch7').classList.remove("activesketch");
    document.querySelector('.sketch6').classList.add("activesketch");
};
document.querySelector('.nextbtn7').addEventListener('click', showSketchSix);


/*Sketch Six State*/

const backSketchSeven = () => {
    document.querySelector('.sketch6').classList.remove("activesketch");
    document.querySelector('.sketch7').classList.add("activesketch");
};

document.querySelector('.prevbtn6').addEventListener('click', backSketchSeven);

function showSketchFive() {
    document.querySelector('.sketch6').classList.remove("activesketch");
    document.querySelector('.sketch5').classList.add("activesketch");
};
document.querySelector('.nextbtn6').addEventListener('click', showSketchFive);

/*Sketch Five State*/

const backSketchSix = () => {
    document.querySelector('.sketch5').classList.remove("activesketch");
    document.querySelector('.sketch6').classList.add("activesketch");
};

document.querySelector('.prevbtn5').addEventListener('click', backSketchSix);

function showSketchFour() {
    document.querySelector('.sketch5').classList.remove("activesketch");
    document.querySelector('.sketch4').classList.add("activesketch");
};
document.querySelector('.nextbtn5').addEventListener('click', showSketchFour);

/*Sketch Four State*/

const backSketchFive = () => {
    document.querySelector('.sketch4').classList.remove("activesketch");
    document.querySelector('.sketch5').classList.add("activesketch");
};

document.querySelector('.prevbtn4').addEventListener('click', backSketchFive);

function showSketchThree() {
    document.querySelector('.sketch4').classList.remove("activesketch");
    document.querySelector('.sketch3').classList.add("activesketch");
};
document.querySelector('.nextbtn4').addEventListener('click', showSketchThree);

/*Sketch Three State*/

const backSketchFour = () => {
    document.querySelector('.sketch3').classList.remove("activesketch");
    document.querySelector('.sketch4').classList.add("activesketch");
};

document.querySelector('.prevbtn3').addEventListener('click', backSketchFour);

function showSketchTwo() {
    document.querySelector('.sketch3').classList.remove("activesketch");
    document.querySelector('.sketch2').classList.add("activesketch");
};
document.querySelector('.nextbtn4').addEventListener('click', showSketchTwo);

/*Sketch two State*/

const backSketchThree = () => {
    document.querySelector('.sketch2').classList.remove("activesketch");
    document.querySelector('.sketch3').classList.add("activesketch");
};

document.querySelector('.prevbtn2').addEventListener('click', backSketchThree);

function showSketchNine() {
    document.querySelector('.sketch2').classList.remove("activesketch");
    document.querySelector('.sketch9').classList.add("activesketch");
};
document.querySelector('.nextbtn2').addEventListener('click', showSketchNine);


/*Copy url*/

const copyUrl = () => {
    console.log("click trigger");
    const url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(() => {
            alert("URL Copied Successfully!");
        })
        .catch(() => {
            alert("URL Not Copied!");
        });
}
document.querySelector('.sketchshare9').addEventListener('click', copyUrl);
document.querySelector('.sketchshare8').addEventListener('click', copyUrl);
document.querySelector('.sketchshare7').addEventListener('click', copyUrl);
document.querySelector('.sketchshare6').addEventListener('click', copyUrl);
document.querySelector('.sketchshare5').addEventListener('click', copyUrl);
document.querySelector('.sketchshare4').addEventListener('click', copyUrl);
document.querySelector('.sketchshare3').addEventListener('click', copyUrl);
document.querySelector('.sketchshare2').addEventListener('click', copyUrl);