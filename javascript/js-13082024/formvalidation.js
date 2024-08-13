showValue = () => {
    var inputval = document.querySelector("#inputval").value;
    console.log(inputval);
    typeof (inputval)
    if (inputval == '' || inputval == '  ') {
        document.querySelector("#inputval").classList.add('errorred')
    } else {
        document.querySelector("#inputval").classList.add('noterrorred')
        document.querySelector(".showval").innerHTML = inputval;
    }
}

document.querySelector("#valsubmit").addEventListener("click", showValue);