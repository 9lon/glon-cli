var passport=require('passport');
var GoogleStrategy=require('passport-google-oauth20').Strategy;
const config=require(process.cwd()+'/config/config');
module.exports=function(){    
     passport.use(new GoogleStrategy(
        {
            clientID:config.oauth.google.clientId,
            clientSecret:config.oauth.google.clientSecret,
            callbackURL:config.oauth.google.callbackURL,
           
            passReqToCallback:true
        },
        function(req,accessToken,refreshToken,profile,done){
           console.log("GoogleStrategy");
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