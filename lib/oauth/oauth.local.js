var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
const config=require(process.cwd()+'/config/config');
module.exports=function(){    
     passport.use(new LocalStrategy(
        function(username,password,done){
            console.log('LocalStrategy');
            var user={
                id:1234,
                name:"somchit",
                email:"somchit.c@nexts-corp.com"
            };
            //return done(err);
            return done(null,user);
        }
    ));
};