var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EndorsementSchema = new Schema({
        fullname : String,
        user_id : String,
        email : String,
        endorsement: String
    },
    {
        timestamps : {createdAt : 'created', updatedAt : 'updated'}
    });

var Endorsement = mongoose.model('Endorsement', EndorsementSchema);

module.exports = {
    'Endorsement' : Endorsement
}