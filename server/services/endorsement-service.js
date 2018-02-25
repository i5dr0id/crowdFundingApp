var Endorsement = require('../model/endorsement-model').Endorsement;

var EndorsementService = {};

EndorsementService.authenticateEndorsement = function (name, next) {
    Endorsement.findOne({ fullname: name }, function (err, endorsement) {
        return next(err, endorsement);
    });
}

EndorsementService.findEndorsement = function (id, next) {

    Endorsement.findOne({ "_id": id }, function (err, endorsement) {
        return next(err, endorsement);
    });
}

EndorsementService.addEndorsement = function (data, next) {

    this.authenticateEndorsement(data.fullname, function (err, endorsement) {
        if (err) {
            console.log('Encountered error when searching if the Endorsement is in the db already');
            return next(err, null);
        }

        if (endorsement) {
            console.log('Endorsement already exists');
            return next(null, null);
        }
        else {
            /*Add user to db*/
            var newEndorsement = new Endorsement({
                fullname: data.fullname,
                user_id: data.id,
                email: data.email,
                endorsement: data.message
            });

            newEndorsement.save(function (err, endorsement) {
                return next(err, endorsement);
            })
        }
    })
}

EndorsementService.allEndorsements = function (next) {
    Endorsement.find(function (err, endorsements) {
        return next(err, endorsements);
    });
}

EndorsementService.findEndorsementsById = function (id, next) {

    Endorsement.find({ "user_id": id }, function (err, endorsement) {
        return next(err, endorsement);
    });
}

module.exports = EndorsementService;