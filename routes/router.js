const express = require('express');
const router = express.Router();
const BuyerController = require('../controller/routes');

router.post('/', BuyerController.createBuyer);
router.get('/', BuyerController.getBuyers);

module.exports = router;