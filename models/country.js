const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CountrySchema = new Schema({
    name: {type: String, required: true, max: 100},
    code: {type: String, required: true, max: 100}
}, {timestamps: true});


// Export the model
module.exports = mongoose.model('Country', CountrySchema);