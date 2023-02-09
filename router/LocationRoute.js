const LocationController = require('../controller/Location_Controller')
const router = require('express').Router()
const verify = require('../Jwt/Verfiy')


// create now address
router.post('/location/create/', verify, LocationController.CreateNew)

// find on old address
router.get('/location/find/', verify, LocationController.FindOldAddress)

// searching address
router.get('/location/searching/', LocationController.SearchingAddress)




module.exports = router



