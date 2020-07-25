const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (
    (req, res, next) => {
        Subscriber.find({}, (error, subscribers) => {
            if (error) throw error;
            req.data = subscribers;
            next();
        });
    }
);