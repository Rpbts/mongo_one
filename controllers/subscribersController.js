const Subscriber = require("../models/subscriber");
const subscriber = require("../models/subscriber");

// exports.getAllSubscribers = (
//     (req, res, next) => {
//         Subscriber.find({}, (error, subscribers) => {
//             if (error) throw error;
//             req.data = subscribers;
//             next();
//         });
//     }
// );

exports.getAllSubscribers = (req, res) => {

    Subscriber.find({})
        .exec()
        .then((subscribers) => {
            res.render(("Subscribers"), {
                subscribers: subscribers
            });
        })
        .catch((error) => {
            console.log(error.message);
            return [];
        })
        .then(() => {
            console.log("promise has been kept!");
        });
};

exports.getSubscriptionPage = (res, req) => {
    res.render("contact");
};


exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });

    newSubscriber.save()
        .then(
            () => {
                res.render("thanks");
            })
        .catch(error => {
            res.send(error);
        })


};