const express = require('express');
const router = express.Router();
const redJson = require('../controllers/RedJsonControl');


router.get('/', redJson.sendWelcome);

router.get('/products', redJson.redJson);

module.exports = router;