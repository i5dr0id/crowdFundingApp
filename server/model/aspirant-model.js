var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserAspirantSchema = new Schema({
        video: String,
        story: String,
        vision : String,
        firstname: String,
        lastname: String,
        alias: String,
        email: String,
        gender: String,
        party: String,
        image: String,
        state: String,
        city: String,
        fund: String,
        social : [{
            type: String
        }]
    },
    {
        timestamps : {createdAt : 'created', updatedAt : 'updated'}
    });

var Aspirant = mongoose.model('Aspirant', UserAspirantSchema);

module.exports = {
    'Aspirant' : Aspirant
}