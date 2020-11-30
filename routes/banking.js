const { authenticate } = require('../middleware');
const { Banking } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/bank/:id', authenticate, Banking.readOne);
