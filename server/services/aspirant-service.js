var Aspirant = require('../model/aspirant-model').Aspirant;

var AspirantService = {};

AspirantService.authenticateAspirant = function (aspirant_story, next) {
    Aspirant.findOne({ story: aspirant_story }, function (err, aspirant) {
        return next(err, aspirant);
    });
}

AspirantService.findAspirant = function (id, next) {

    Aspirant.findOne({ "_id": id }, function (err, aspirant) {
        return next(err, aspirant);
    });

}

AspirantService.addAspirant = function (data, next) {

    this.authenticateAspirant(data.story, function (err, aspirant) {
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
                position: data.position,
                user_id: data.id,
                story: data.story,
                social: data.social,
                vision : data.vision,
                video: data.video,
                image: data.image,
                email: data.email,
                firstname: data.firstname,
                lastname: data.lastname,
                gender: data.gender,
                social: data.social,
                alias: data.alias,
                party: data.party,
                state: data.state,
                city:data.city,
                fund: data.fund
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