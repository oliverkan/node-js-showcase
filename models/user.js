const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
        userName: {type: String, required: true, max: 64},
        name: {type: String, required: true, max: 100},
        lastName: {type: String, required: true, max: 100},
        email: {type: String, required: true, trim: true},
        birthDate: {type: Date},
        nationality: {type: mongoose.Schema.Types.ObjectId, ref: 'Country'},
        password: {type: String, required: true},
        image: {data: Buffer, type: String},
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    },
    {timestamps: true});


// Export the model
module.exports = mongoose.model('User', UserSchema);