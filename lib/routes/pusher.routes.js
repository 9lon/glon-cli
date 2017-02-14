
var fs = require('fs');
const work_dir = process.cwd();
module.exports=function(app){
     app.get('/pusher',function(req,res,next){
        fs.readFile(work_dir+ '/public/pusher.json',function(err,content){
           if(err) content="[]";
           var  pusher_list =  JSON.parse(content);
           res.pusher(pusher_list,function(err){
                res.end("Hello");    
           });
        });
        
     });
}