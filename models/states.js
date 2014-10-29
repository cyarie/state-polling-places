// app/models/states.js

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StateSchema = new Schema({
    stateName: String,
    stateAbbr: String,
    description: String
});

module.exports = mongoose.model("States", StateSchema);