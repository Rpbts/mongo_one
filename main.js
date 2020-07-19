const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "recipe_db",
    mongoose = require("mongoose");





MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts")
        .find()
        .toArray((error, data) => {
            if (error) throw error;
            console.log(data);
        });
    db.collection("contacts")
        .insert({
            name: "Freddie Mercury",
            email: "fred@queen.com"
        }, (error, db) => {
            if (error) throw error;
            console.log(db); 2
        });
});

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);

const db = mongoose.connection;
console.log(`db = ${db}`);
db.once("open", () => {
    console.log("the event has been fired!");
});

const subscriberSchema = mongoose.Schema({
    name : String,
    email : String,
    zipCode: Number
});