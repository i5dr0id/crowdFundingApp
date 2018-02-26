var express = require('express');
var AspirantService = require('../services/aspirant-service');
var router = express.Router();
var jwt = require('jsonwebtoken');
var app = express();
var config = require('../config');
var Aspirant = require('../model/aspirant-model').Aspirant;

//
// ---------------------------------------------------------
// SET SECRET for Jwt
// ---------------------------------------------------------
// 
app.set('superSecret', config.secret);


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
// Add a new new Aspirant
// ---------------------------------------------------------
// 

router.post('/', function (req, res, next) {
    var data = req.body;
    console.log(data);
    AspirantService.addAspirant(data, function (err, aspirants) {
        if (err) {
            console.log(err)
            return res.json({
                'responseCode': '03',
                'responseMessage': 'Error adding Aspirant'
            });
        }

        if (aspirants) {
            return res.json({
                'responseCode': '00',
                'responseMessage': 'Successfully added a aspirant'
            });
        }

        return res.json({
            'responseCode': '02',
            'responseMessage': 'Aspirant exists already'
        });
    });
})


//
// ---------------------------------------------------------
// authenticate middleware
// ---------------------------------------------------------
// 

// router.post('/authenticate', function (req, res, next) {

//     var data = req.body;
//     AspirantService.authenticateUser(data, function (err, user) {
//         if (err) throw err;
//         if (!user) {
//             res.json({
//                 responseCode: "02",
//                 responseMessage: 'Authentication failed. User not found.',
//             });
//         } else if (user) {
//             // check if username matches
//             if (user.password != req.body.password) {
//                 res.json({
//                     responseCode: "03",
//                     responseMessage: 'Authentication failed. Password not found.',
//                 });
//             } else {
//                 // if user is found and password is right
//                 // create a token
//                 var token = jwt.sign({ data: user }, config.secret, {
//                     expiresIn: 1440 // expires in 24 hours
//                 });

//                 // return the information including token as JSON
//                 res.json({
//                     responseCode: "00",
//                     responseMessage: 'Authentication Successful',
//                     token: token,
//                     user:user
//                 });
//             }

//         }

//     })

// });

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
// router.use(function (req, res, next) {

//     // check header or url parameters or post parameters for token
//     var token = req.body.token || req.param('token') || req.headers['x-access-token'];

//     // decode token
//     if (token) {

//         // verifies secret and checks exp
//         jwt.verify(token, app.get('superSecret'), function (err, decoded) {
//             if (err) {
//                 return res.json({ success: false, message: 'Failed to authenticate token.' });
//             } else {
//                 // if everything is good, save to request for use in other routes
//                 req.decoded = decoded;
//                 next();
//             }
//         });

//     } else {
//         // if there is no token
//         // return an error
//         return res.status(403).send({
//             success: false,
//             message: 'No token provided.'
//         });

//     }

// });



// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------


router.get('/', function (req, res, next) {2

    AspirantService.allAspirants(function (err, aspirants) {
        if (err) {
            return res.json({
                'responseCode': '03',
                'responseMessage': 'Error fetching Aspirants'
            });
        }

        if (aspirants) {
            return res.json({
                'responseCode': '00',
                'responseMessage': 'Successfully fetched all Aspirants',
                'aspirants': aspirants
            });
        }

        return res.json({
            'responseCode': '02',
            'responseMessage': 'No Aspirant in db'
        });
    });
});

//Find Aspirant by id
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    AspirantService.findAspirant(id, function (err, aspirant) {
        if (err){
            return res.json({
                'responseCode': '03',
                'responseMessage': 'Error fetching Aspirant for user'
            });
        }
        if (aspirant) {
            return res.json({
                'responseCode': '00',
                'responseMessage': 'Successfully fetched data for aspirant',
                'aspirant': aspirant
            });
        } return res.json({
            'responseCode': '02',
            'responseMessage': 'No Aspirant in db for user'
        });
    });
});

module.exports = router;





