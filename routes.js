var moment = require("moment");

module.exports = function(app) {
    app.get("/polling-places", function(req, res) {
        res.sendFile(__dirname + "/assets/views/index.html")
    })
};

