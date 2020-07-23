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
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("The Mongoose Connection has been Opened Succesfulky");
}
);

const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

var subscriber1 = new Subscriber({
    name: "Lyle Lovett",
    email: "lyle@lovett.org"
});

subscriber1.save((error, savedDocument) => {
    if (error) throw error;
    console.log(savedDocument);
});

Subscriber.create(
    {
        name: "shawn",
        email: "scolvin@comcast.net"
    },
    function (error, savedDocument) {
        if (error) throw (error);
        console.log(savedDocument);
    }
);