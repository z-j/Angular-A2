var mongoose = require('mongoose');
//mongoose.connect('mongodb://zohaibjabbar:Zohaib66@ds013290.mlab.com:13290/customers_db');
Schema = mongoose.Schema;
var activitySchema = new Schema({
username: String,
date: String,
type: String,
calories: Number,
duration: Number,
outdoor: {},
gym: {},
updated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('activity', activitySchema);