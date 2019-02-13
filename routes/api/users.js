const express = require('express');
const router = express.Router();
const passport = require('passport');

const SECRET_KEY = require('../../config/keys').SECRET_KEY;

const User = require('../../models/User');

// @route         GET api/users/test
// @description   Test users route
// @access        public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

// @route         GET api/users/current
// @description   Return current user
// @access        private
// passing password.authenticate('jwt) middleware makes this route protected. Here jwt specifies what strategy to use
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ id: req.user.id, name: req.user.name, email: req.user.email });
  }
);

module.exports = router;
