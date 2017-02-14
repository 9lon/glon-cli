var passport=require('passport');
var FacebookStrategy=require('passport-facebook').Strategy;
const config=require(process.cwd()+'/config/config');

module.exports=function(){    
     passport.use(new FacebookStrategy(
        {
            clientID:config.oauth.facebook.clientId,
            clientSecret:config.oauth.facebook.clientSecret,
            callbackURL:config.oauth.facebook.callbackURL,
            profileFields:['id','email','name'],
            passReqToCallback:true
        },
        function(req,accessToken,refreshToken,profile,done){
           console.log("FacebookStrategy");
           console.log(accessToken);
           console.log(refreshToken);
           console.log(profile);

           var user={
                id:1234,
                name:"somchit",
                email:"somchit.c@nexts-corp.com"
            };

            return done(null,user);

           /*var providerData=profile._json;
           providerData.accessToken=accessToken
           providerData.refreshTokenrefreshToken
           var providerUserProfile={
               firstName:profile.name.givenName,
               lastName:profile.name.familyName,
               email:profile.emails[0].value,
               username:profile.username,
               provide
           //save data
            //return done(err);
            //oauth/facebook
          //  return done(null,user);
        }*/
    }));
};