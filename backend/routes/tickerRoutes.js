const express = require('express');
const { getTickers } = require('../controller/tickerController')

const router = express.Router();

router.get('/tickers', getTickers);

module.exports = router;
