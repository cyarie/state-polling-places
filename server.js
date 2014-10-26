// server.js

// ------------------------------------------------------------
// Modules
// ------------------------------------------------------------
var express = require("express");
var app = express();
var moment = require("moment");

// ------------------------------------------------------------
// Configuration
// ------------------------------------------------------------
var port = process.env.PORT || 8001;

app.use(express.static(__dirname + '/public'));

require(__dirname + '/routes')(app);

app.listen(port);

console.log("HALLO");

exports = module.exports = app;