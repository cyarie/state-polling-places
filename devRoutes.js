var moment = require("moment");
var States = require(__dirname + "/models/states");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/assets/views/index.html")
    });

    app.route("/api/states")
        .get(function(req, res) {
            States.find(function(err, states) {
                if (err) res.send(err);
                res.json(states);
            })
        })
        .post(function(req, res) {
            States.create({
                stateName : req.body.stateName,
                stateAbbr : req.body.stateAbbr,
                description : req.body.description,
                done : false
            }, function(err, state) {
                if (err) res.send(err);

                States.find(function(err, states) {
                    if (err) res.send(err);
                    res.json(states);
                    console.log("STATE CREATED");
                })
            })
        });

    app.route("/api/states/:state_id")
        .delete(function(req, res) {
            States.remove({
                _id: req.params.state_id
            }, function(err, state) {
                if (err) res.send(err);
                console.log(err);

                States.find(function(err, states) {
                    if (err) res.send(err);

                    States.find(function(err, states) {
                        if (err) res.send(err);
                        res.json(states);
                    })
                })
            })
        });
};