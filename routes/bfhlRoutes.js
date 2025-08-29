const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.post('/bfhl', bfhlController.processBfhlData);
router.get('/bfhl', bfhlController.getBfhlInfo);

module.exports = router;
