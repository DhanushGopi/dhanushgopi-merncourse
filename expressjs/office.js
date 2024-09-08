const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://dhanushgopi:DhanushGopi@danzucluster.jc7ng.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'office';

async function insertDetails() {

    let empdetails = {
        "name": "Dhanush",
        "age": "21",
        "isalive": "TRUE"
    }

    await client.connect();
    console.log("The Office is Connected");
    const db = client.db(dbName);
    const collection = await db.collection('employee');
    console.log(collection);
    await collection.insertOne(empdetails);
    console.log("one data is Inserted");

}

insertDetails();