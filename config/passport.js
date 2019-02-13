const mongoose = require('mongoose');
const User = mongoose.model('users');

const SECRET_KEY = require('../config/keys').SECRET_KEY;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const User = mongoose.model('users');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id).then((user) => {
        if (user) return done(null, user);
        return done(null, false);
      });
    })
  );
};
