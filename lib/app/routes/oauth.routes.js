var passport = require('passport');
var URL = require('url');


module.exports = function (app,nylon_path) {
    var oauth = require('../controllers/oauth.controller');

    app.get(['/userinfo'], passport.authenticate('jwt', { session: false }),
        oauth.userInfo
    );


    app.get('/login/:appid/:appkey', oauth.login);

    app.post('/register', oauth.register);

    //app.get('/oauth/userinfo', oauth.userInfo);
    app.get('/logined', oauth.logined);
    app.get('/js/:appid/:appkey', function(req,res,next){
            oauth.js(req,res,nylon_path);
    } );

    app.get('/logout', passport.authenticate('jwt', { session: false }), oauth.logout);

    //app.route('/oauth/signup').get(oauth.signupPage).post(oauth.signup);

    app.post('/login/', passport.authenticate('local', {
        failureRedirect: '/oauth/login',
        successRedirect: '/oauth/logined'
    }));

    app.get('/facebook', passport.authenticate('facebook', {
        failureRedirect: '/oauth/login'
    }));


    app.get('/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/oauth/login',
        successRedirect: '/oauth/logined'
    }));



    app.get('/google', passport.authenticate('google', {
        scope: [
            'profile',
            'email',
        ],
        failureRedirect: '/oauth/logined'
    }));

    app.get('/google/callback', passport.authenticate('google', {
        failureRedirect: '/oauth/login',
        successRedirect: '/oauth/logined'
    }));


    return app;
}