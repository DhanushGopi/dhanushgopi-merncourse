let arrname = ['amen', 'bhemaa', 'Ceman', 'cesar', 1, 4, 5, 6];
console.log(arrname);

//arrname[8] = "dhanush";
//arrname[2] = "gopi";


//document.querySelector(".arrayval").innerHTML = arrname[10];
// will get the output as the undefined.
// document.querySelector(".arrayval").innerHTML = arrname[10].toUpperCase();
// will get the output as the typeerror. because we trying to perform an operation in the undefined value.

for (let i in arrname) {
    // document.querySelector(".arrayval").innerHTML = arrname[i];
    // console.log(arrname[i]);

    if (arrname[i].startsWith('c')) {
        console.log(arrname[i]);
    }
}


// anomoyous fuction are used to pass an function in the parameter of an function