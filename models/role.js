const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoleSchema = new Schema({
        name: {type: String, required: true}
    },
    {timestamps: true});


// Export the model
module.exports = mongoose.model('Role', RoleSchema);