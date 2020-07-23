const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "recipe_db";

/*
MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts")
        .find()
        .toArray((error, data) => {
            if (error) throw error;
            console.log(data);
        });

    db.collection("contacts").insert({
        name: "rodney crowell",
        email: "rodnet@crowell.net"
    }, (error, db) => {
        if (error) throw error;
        console.log(`inserted record: ` + db);
    });

});
*/

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);

const db = mongoose.connection;