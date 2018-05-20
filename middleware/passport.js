const JwtStrategy = require("passport-jwt").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models").User;

module.exports = function(passport) {
  var opts = {};
  console.log("middleware passport, jwt", opts);
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = CONFIG.jwt_encryption;
  passport.use(
    new JwtStrategy(opts, async function(jwt_payload, done) {
      let err, user;
      [err, user] = await to(User.findById(jwt_payload.user_id));

      if (err) return done(err, false);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  );
  passport.use(
    new BearerStrategy(function(token, done) {
      done(null, token);
    })
  );
};
