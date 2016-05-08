var mongoose = require('mongoose');
//mongoose.connect('mongodb://zohaibjabbar:Zohaib66@ds013290.mlab.com:13290/customers_db');
Schema = mongoose.Schema;
var customerSchema = new Schema({
name: String,
address: String,
age: { type: Number, min: 0, max: 120 },
email: String,
updated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('customer', customerSchema);