var Aspirant = require('../model/aspirant-model').Aspirant;

var AspirantService = {};

AspirantService.authenticateAspirant = function (aspirant_story, next) {
    Aspirant.findOne({ aspirant_story: aspirant_story }, function (err, aspirant) {
        return next(err, aspirant);
    });
}

AspirantService.findAspirant = function (id, next) {

    Aspirant.findOne({ "_id": id }, function (err, aspirant) {
        return next(err, aspirant);
    });

}

AspirantService.addAspirant = function (data, next) {

    this.authenticateAspirant(data.aspirant_story, function (err, aspirant) {
        if (err) {
            console.log('Encountered error when searching if Aspirant is in the db already');
            return next(err, null);
        }

        if(aspirant) {
            console.log('Aspirant already exists');
            return next(null, null);
        }
        else {
            /*Add Aspirant to db*/
            var newAspirant = new Aspirant({
                aspirant_story: data.story,
                aspirant_endorsements: data.endorsements,
                aspirant_social_link: data.options,
                aspirant_mission_statement : data.mission
                aspirant_manifesto_video: data.video
            });

            newAspirant.save(function (err, aspirant) {
                return next(err, aspirant);
            })
        }
    })
}

AspirantService.allAspirants = function (next) {
    Aspirant.find(function (err, aspirants) {
        return next(err, aspirants);
    });
}



module.exports = AspirantService;