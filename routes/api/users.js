const express = require('express');
const router = express.Router();
const passport = require('passport');

const SECRET_KEY = require('../../config/keys').SECRET_KEY;

const User = require('../../models/User');

// @route         GET api/users/test
// @description   Test users route
// @access        public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

module.exports = router;
