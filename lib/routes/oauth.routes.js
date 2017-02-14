var passport =require('passport');
module.exports=function(app){
    var oauth=require('./../oauth/oauth.controller');
    app.route('/oauth/login').get(oauth.login).post(passport.authenticate('local',{
        failureRedirect:'/oauth/login',
        successRedirect:'/'
    }));

    app.get('/oauth/logout',oauth.logout);
    app.route('/oauth/signup').get(oauth.signupPage).post(oauth.signup);

    app.get('/oauth/facebook',passport.authenticate('facebook',{
        failureRedirect:'/oauth/login'
    }));

     app.get('/oauth/facebook/callback',passport.authenticate('facebook',{
        failureRedirect:'/oauth/login',
        successRedirect:'/'
    }));

    app.get('/oauth/google',passport.authenticate('google',{
        scope:[
            'profile',
            'email',
        ],
        failureRedirect:'/oauth/login'
    }));

    app.get('/oauth/google/callback',passport.authenticate('google',{
        failureRedirect:'/oauth/login',
        successRedirect:'/'
    }));
}