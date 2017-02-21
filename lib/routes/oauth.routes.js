var passport = require('passport');
var URL = require('url');


module.exports = function (app,nylon_path) {
    var oauth = require('./../oauth/oauth.controller');

    app.get(['/oauth/userinfo'], passport.authenticate('jwt', { session: false }),
        oauth.userInfo
    );


    app.get('/oauth/login/:appid/:appkey', oauth.login);

    app.post('/oauth/register', oauth.register);

    //app.get('/oauth/userinfo', oauth.userInfo);
    app.get('/oauth/logined', oauth.logined);
    app.get('/oauth/js/:appid/:appkey', function(req,res,next){
            oauth.js(req,res,nylon_path);
    } );

    app.get('/oauth/logout', passport.authenticate('jwt', { session: false }), oauth.logout);

    //app.route('/oauth/signup').get(oauth.signupPage).post(oauth.signup);

    app.post('/oauth/login/', passport.authenticate('local', {
        failureRedirect: '/oauth/login',
        successRedirect: '/oauth/logined'
    }));

    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/oauth/login'
    }));


    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/oauth/login',
        successRedirect: '/oauth/logined'
    }));



    app.get('/oauth/google', passport.authenticate('google', {
        scope: [
            'profile',
            'email',
        ],
        failureRedirect: '/oauth/logined'
    }));

    app.get('/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/oauth/login',
        successRedirect: '/oauth/logined'
    }));






    return app;
}