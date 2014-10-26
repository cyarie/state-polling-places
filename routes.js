var moment = require("moment");

module.exports = function(app) {
    app.get("*", function(req, res) { res.send("<a href='http://iwillvote.com'>I Will Vote</a>")})
};

