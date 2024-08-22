/*
Key and Value
Key Should be Unique
*/

let person = {
    "name": "Dhanush",
    "mobile": 122334,
    "address": "sample",
    "email": "g.dhanushgopi1509@gmail.com"
};
console.log(person[2]); // we can't access through the indexing
console.log(person["email"]);

let indexarrayPerson = [{
    "name": "Dhanush",
    "mobile": 122334,
    "address": "sample",
    "email": "g.dhanushgopi1509@gmail.com"
},
{
    "name": "Madhu",
    "mobile": 1234322334,
    "address": "mitasample",
    "email": "mitafied@gmail.com"
}, {
    "name": "Muthu",
    "mobile": 123499322334,
    "address": "muthusample",
    "email": "muthu@gmail.com"
}

];

console.log(indexarrayPerson[1]);
console.log(indexarrayPerson[1].email);

for (let i = 0; i < indexarrayPerson.length; i++) {
    console.log(indexarrayPerson[i].name);
}