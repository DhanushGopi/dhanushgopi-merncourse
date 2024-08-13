changeToRed = () => {
    document.querySelector(".headshow").classList.add('red');
    document.querySelector(".headshow").classList.remove('blue');
}


changeToBlue = () => {
    document.querySelector(".headshow").classList.add('blue');
    document.querySelector(".headshow").classList.remove('red');
}

document.querySelector(".red-btn").addEventListener('click', changeToRed);
document.querySelector(".blue-btn").addEventListener('click', changeToBlue);

