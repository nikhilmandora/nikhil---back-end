const express = require("express");
const app = express();

const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const database = async()=>{
    await client.connect();
    const db = await client.db("test_database_temp");

    return db;
}

const insertData = async()=>{
    const db = await database();

    const adminCollection = await db.collection("users");

    const response = await adminCollection.insertOne({
        name:"userName1",
        password:"user@123"
    });
    console.log(response);
};

// insertData();

const readData = async()=>{
    try{
        const db = await database();
        const collection = await db.collection("admins");

        const response = await collection.find().toArray();
        console.log(response);

    } catch(error) {
        console.log(error);
    }
};

// readData();





app.use(express.json());

app.listen(4000 , ()=>{
    console.log("Server is running on Port 4000");
});