var arrno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


//es6 filter and map won't affect the src file

//es6 filter is only applicable for the array object.
var evenno = arrno.filter((eachval) => { return eachval % 2 == 0 });
console.log("The even numbers are " + evenno);

//es6 map is used to traverse the every value in the ds and it can be maniplulated.

var multbytwo = arrno.map((eachval) => eachval * 2);
console.log(multbytwo);

//Find the even numbers then mult by 2

//chainig of an method.
var multevenno = arrno.filter((eachval) => { return eachval % 2 == 0 }).map((eachval) => eachval * 2);
console.log(multevenno);

//var arrname = ["dhanush", "Dharshan", "Thivya", "sanjay"];
//var findd = arrname.map((eachname) => arrname[eachname].startswith(d));
//console.log(findd);