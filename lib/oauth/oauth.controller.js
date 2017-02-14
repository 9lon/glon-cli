exports.login=function(req,res){
    
    res.render('login',{
        'title':"Login",
        'message':"Login page"
    });
};

exports.logout=function(req,res){
    req.logout();
    res.redirect('/');
};

exports.signupPage=function(req,res){
     res.render('Signup',{
        'title':"Signup",
        'message':"Signup Page"
    });
};

exports.signup=function(req,res){
    
};