var passport = require('passport');
var sha1 = require('js-sha1');
var LocalStrategy = require('passport-local').Strategy;
const config = require(process.cwd() + '/config/config');
module.exports = function (db) {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            console.log('LocalStrategy');

            db.table('users').filter(function (ff) {
                return ff('providers').contains(function (cc) {
                    return cc('id').eq(username)
                        .and(cc('provider').eq('local'))
                        .and(cc('password').eq(sha1(password)))
                }).and(ff('status').eq(true))
            })
                .run()
                .then(function (users) {
                    if (users.length > 0) {
                        console.log(users[0].id);
                        return done(null, users[0]);
                    } else {
                        return done(null);
                    }

                }).catch(function (err) {
                    return done(err);
                })

        }
    ));
}; 