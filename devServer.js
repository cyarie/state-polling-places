// server.js

// ------------------------------------------------------------
// Modules
// ------------------------------------------------------------
var express = require("express");
var app = express();
var moment = require("moment");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

// ------------------------------------------------------------
// Configuration
// ------------------------------------------------------------
var db = require("./config/db");

var port = process.env.PORT || 8001;

// connects to the MongoDB for the app
mongoose.connect(db.url);

// gets all the data from the POST parameters, and parses the JSON
app.use(bodyParser.json());

// parses the application as JSON
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request; simulates DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use("/assets", express.static(__dirname + '/assets'));

require(__dirname + '/routes')(app);

app.listen(port);

console.log("HALLO");

exports = module.exports = app;