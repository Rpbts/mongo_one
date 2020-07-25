const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "recipe_db";
    mongoose = require("mongoose");

const Subscriber = require("./models/subscriber.js");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("The Mongoose Connection has been Opened Succesfulky");
}
);

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

var myQuery = Subscriber.findOne({ name: "randy" }).where("email", /randy/);
myQuery.exec((error, data) => {
    if (data) console.log(`data.name: `+ data.name);
}
);

