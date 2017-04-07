var passport = require('passport');
var sha1 = require('js-sha1');
var LocalStrategy = require('passport-local').Strategy;
var ActiveDirectory = require('activedirectory');
const config = require(process.cwd() + '/config/config');
module.exports = function (db) {
    passport.use(new LocalStrategy(
        function (username, password, done) {

            console.log('AD Strategy');

            var config_ad = {
                url: 'ldap://bkk01.ad.kmutnb.ac.th',
                baseDN: 'cn=sso,ou=Users,dc=ad,dc=kmutnb,dc=ac,dc=th',
                username: 'ssoDemoTest',
                password: 'ssoDemoTest8421!'
            }
            var ad = new ActiveDirectory(config_ad);

            //var username = 'ssoDemoTest';
           // var password = 'ssoDemoTest8421!';

            ad.authenticate(username, password, function (err, auth) {
                if (err) {
                    console.log('ERROR: ' + JSON.stringify(err));
                    return;
                }

                if (auth) {
                    console.log('Authenticated!');
                }
                else {
                    console.log('Authentication failed!');
                }
            })

            /*db.table('users').filter(function (ff) {
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
                })*/

        }
    ));
}; 