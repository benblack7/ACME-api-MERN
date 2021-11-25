const express = require('express');
const router = express.Router();
const BuyerController = require('../controller/routes');

router.get('/test', (req, res) => res.send("testing success"))
router.post('/buyers', BuyerController.createBuyer);
router.get('/buyers', BuyerController.getBuyers);

module.exports = router;