var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require(process.cwd() + '/config/config');
module.exports = function (db) {

  passport.use(new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeader(),
      secretOrKey: config.oauth.jwt.clientSecret
    },
    function (jwt_payload, done) {
      done(null, jwt_payload);
    }));
  
};