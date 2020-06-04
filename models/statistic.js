const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StatisticSchema = new Schema({
        date: {type: String, required: true},
        mean: {type: Number, required: true},
        source:{type:String}
    },
    {timestamps: true});


// Export the model
module.exports = mongoose.model('Statistic', StatisticSchema);