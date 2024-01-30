
const express = require('express');
const router = express.Router();
const { get404 } = require('../controllers/404Controller');

router.get('*', get404);

module.exports = router;
