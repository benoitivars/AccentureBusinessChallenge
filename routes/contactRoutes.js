
const express = require('express');
const router = express.Router();
const { getContact } = require('../controllers/ContactController');

router.get('/', getContact);

module.exports = router;
