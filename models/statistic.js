const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StatisticSchema = new Schema({
        month: {type: String, required: true},
        count: {type: Number, required: true}
    },
    {timestamps: true});


// Export the model
module.exports = mongoose.model('Statistic', StatisticSchema);