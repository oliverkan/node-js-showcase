const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    birthDate: { type: Date, required:true },
    nationality:  { type: mongoose.Schema.Types.ObjectId, ref: 'Country' }
});


// Export the model
module.exports = mongoose.model('User', UserSchema);