var express = require('express');
var EndorsementService = require('../services/endorsement-service');
var router = express.Router();
var jwt = require('jsonwebtoken');
var app = express();



//
// ---------------------------------------------------------
// SET SECRET for Jwt
// ---------------------------------------------------------
// 



//
// ---------------------------------------------------------
// Enable Cors in User route
// ---------------------------------------------------------
// 

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//
// ---------------------------------------------------------
// Add a new new Endorsement
// ---------------------------------------------------------
// 

router.post('/', function (req, res, next) {
    var data = req.body;
    console.log(data);
    EndorsementService.addEndorsement(data, function (err, endorsement) {
        if (err) {
            return res.json({
                'responseCode': '03',
                'responseMessage': 'Error adding Endorsement'
            });
        }

        if (endorsement) {
            return res.json({
                'responseCode': '00',
                'responseMessage': 'Successfully added a Endorsement'
            });
        }

        return res.json({
            'responseCode': '02',
            'responseMessage': 'Endorsement exists already'
        });
    });
})


// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------


router.get('/', function (req, res, next) {

    EndorsementService.allEndorsements(function (err, endorsements) {
        if (err) {
            return res.json({
                'responseCode': '03',
                'responseMessage': 'Error fetching Endorsements'
            });
        }

        if (endorsements) {
            return res.json({
                'responseCode': '00',
                'responseMessage': 'Successfully fetched all Endorsements',
                'endorsements': endorsements
            });
        }

        return res.json({
            'responseCode': '02',
            'responseMessage': 'No Endorsement in db'
        });
    });
});

//Find Endorsement by id
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    EndorsementService.findEndorsement(id, function (err, endorsement) {
        if (err) {
            return res.json({
                'responseCode': '03',
                'responseMessage': 'Error fetching Endorsement for user'
            });
        }
        if (endorsement) {
            return res.json({
                'responseCode': '00',
                'responseMessage': 'Successfully fetched Endorsement for user',
                'endorsement': endorsement
            });
        } return res.json({
            'responseCode': '02',
            'responseMessage': 'No Endorsement in db for user'
        });
    });
});

router.get('/all/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    EndorsementService.findEndorsementsById(id, function (err, endorsement) {
        if (err) {
            console.log(err)
            return res.json({
                'responseCode': '03',
                'responseMessage': 'Error fetching Endorsement for user'
            });
        }
        if (endorsement) {
            return res.json({
                'responseCode': '00',
                'responseMessage': 'Successfully fetched Endorsement for user',
                'endorsement': endorsement
            });
        } return res.json({
            'responseCode': '02',
            'responseMessage': 'No Endorsement in db for user'
        });
    });
});

module.exports = router;





