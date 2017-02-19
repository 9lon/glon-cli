var passport=require('passport');
//var GoogleStrategy=require('passport-google-oauth20').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var   ExtractJwt = require('passport-jwt').ExtractJwt;
const config=require(process.cwd()+'/config/config');
module.exports=function(){    

 /*    r.db("oauth").table("apps")
  .merge(function(apps_merge){
    return {
      connections:apps_merge('connections')
      .map(function(con_map){
        return r.db('oauth').table('providers').get(con_map)
      })
    }
  })*/
       
     passport.use(new JwtStrategy(
        {
           jwtFromRequest : ExtractJwt.fromAuthHeader(),
           secretOrKey : config.oauth.jwt.clientSecret
        },
        function(jwt_payload, done){
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