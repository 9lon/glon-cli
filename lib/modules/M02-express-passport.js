/*!
    @Product nylon-cli
    @title nylon-cli
    @version 1.0
    @author somchit chanudom
    @email somchit.c@nexts-corp.com
    @homepage http://www.nexts-corp.com
    @licenses http://www.nexts-corp.com/product/license
    @Copyright (c) 2016-2017
*/

var passport = require('passport');

module.exports=function(app){
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(
        function(user,done){
            console.log('serializeUser');
            done(null,user.id);
        }
    );

    passport.deserializeUser(
        function(id,done){
            //query user information
            console.log('deserializeUser');
             var user={
                id:1234,
                name:"somchit",
                email:"somchit.c@nexts-corp.com"
            };

            return done(null,user);
        }
    );

    require('./../oauth/oauth.local')();
    require('./../oauth/oauth.facebook')();
    require('./../oauth/oauth.google')();

  

}