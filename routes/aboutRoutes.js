
const express = require('express');
const router = express.Router();
const { getAbout } = require('../controllers/AboutController');

router.get('/', getAbout);

module.exports = router;
