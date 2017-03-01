var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require(process.cwd() + '/config/config');

module.exports = function (db) {
    passport.use(new GoogleStrategy(
        {
            clientID: config.oauth.google.clientId,
            clientSecret: config.oauth.google.clientSecret,
            callbackURL: config.oauth.google.callbackURL,
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {
            console.log("GoogleStrategy");
            var user = {
                name: profile.displayName,
                email: profile.emails[0].value,
                photo: profile.photos[0].value,
                gender: profile.gender,
                status: false,
                register: false,
                role: "USER",
                providers: [{
                    id: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    photo: profile.photos[0].value,
                    gender: profile.gender,
                    provider: profile.provider,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }]
            };

            db.table('users').filter(function (ff) {
                return ff('providers').contains(function (cc) {
                    return cc('id').eq(user.providers[0].id)
                        .and(cc('provider').eq(user.providers[0].provider))
                })
            }).run()
                .then(function (data) {
                    if (data.length > 0) {
                        console.log(data[0].id);
                        var u = data[0];
                        for (var i = 0; i < u.providers.length; i++) {
                            if ((u.providers[i].provider == user.providers[0].provider) && (u.providers[i].id == user.providers[0].id)) {
                                u.providers[i] = user.providers[0];
                                break;
                            }
                        }
                        db.table('users').get(u.id).update(u).run().then(function (data) {
                            //console.log(u.id);
                            u.register=true;
                            return done(null, u);
                        });
                    } else {

                        //return done(null);
                        db.table('users')
                            .insert(user)
                            .run()
                            .then(function (result) {
                                user.id = result.generated_keys[0];
                                console.log(user.id);
                                return done(null, user);
                            })
                            .catch(function (err) {
                                return done(err);
                            })

                    }
                }).catch(function (err) {
                    return done(err);
                });

            // return done(null, user);

        }));
};