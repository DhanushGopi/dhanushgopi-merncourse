let inputarray = [];

const arrayAppend = () => {
    console.log('click triggers');
    let inputval = document.querySelector('.getinput').value;
    console.log("Array before: " + inputarray);
    document.querySelector('.beforetext').innerHTML = inputarray;
    inputarray.push(inputval);
    console.log("Array after: " + inputarray);
    document.querySelector('.aftertext').innerHTML = inputarray;

}

document.querySelector(".getvalue").addEventListener('click', arrayAppend);

const arrayReset = () => {
    inputarray = [];
    document.querySelector('.getinput').value = '';
    document.querySelector('.beforetext').innerHTML = inputarray;
    document.querySelector('.aftertext').innerHTML = inputarray;
}

document.querySelector(".resetvalue").addEventListener('click', arrayReset);