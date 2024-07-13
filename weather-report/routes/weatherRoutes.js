const express = require('express');
const weatherController = require('../controllers/weatherController'); 

const router = express.Router();

router.get('/:email/weather/:date', weatherController.getUserWeatherData);

module.exports = router;
