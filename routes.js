var moment = require("moment");
var States = require(__dirname + "/models/states");

module.exports = function(app) {
    app.get("/polling-places/", function(req, res) {
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
                state : req.body.state,
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
    app.route("/api/states/:state")
        .get(function(req, res) {
            States.findOne({ "state" : req.params.state }, function(err, state) {
                if (err) res.send(err);
                res.json(state);
            })
        })
        .delete(function(req, res) {
            States.remove({ state : req.params.state }, function(err, state) {
                if (err) res.send(err);

                States.find(function(err, states) {
                    if (err) res.send(err);
                    res.json(states);
                })
            })
        });
};

