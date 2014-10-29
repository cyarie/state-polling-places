var moment = require("moment");
var States = require(__dirname + "/models/states");

module.exports = function(app) {
    app.route("/")
        .get(function(req, res) {
            res.sendFile(__dirname + "/assets/views/index.html")
        });

    app.route("/api/states")
        .get(function(req, res) {
            States.find(function(err, states) {
                if (err) res.send(err);
                res.json(states);
            })
        });
};

