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



//var morgan=require('morgan');
//var compression=require('compression');
//var bodyParser=require('body-parser');
//var sass=require('node-sass-middleware');
//var fs=require('fs');
//var session = require('express-session');
//var RDBStore = require('./rethinkdb-session')(session);
//var passport = require('passport');

//var cheerio = require('cheerio');
//var URL = require('url');
//var path =require('path');
//const global_dir="/app/global";

var express = require('express');
var async = require('async');
var logger = require('winston');
var fscan = require('./../common/fscan');
const work_dir = process.cwd();


module.exports = function (nylon_path) {
    logger.info("nylon Server run at env : " + process.env.NODE_ENV);
    var app = express();

    /** load express module */

    console.log("work_dir::" + work_dir);
    fscan.scan(nylon_path + "/lib/modules", ".js", false, function (err, modelues) {
        //  for (var i = 0; i < modelues.length; i++) {
        //   console.log("Load Module :: " + modelues[i]);
        //   require("./../modules/" + modelues[i])(app, nylon_path);
        // }

        async.each(modelues, function (modelue, next) {
            logger.info("Load Module :: " + modelue);
            try {
                require(nylon_path + "/lib/modules/" + modelue)(app, nylon_path);
                next();
            } catch (err) {
                logger.error(err);
                next(err);
            }
        }, function (err) {
            //  logger.error(err);
            //callback(err, jdbc);
        });

    });

    return app;
}
    //console.log(validate_model);



    //var rdbStore = new RDBStore({
         //   connection: db,
         //   db: 'oauth',
          //  table: 'session',
           // sessionTimeout: 86400000,
          //  flushInterval: 60000,
           // debug: false
    //});


    //app.use(session({
     //       resave: false,
      //      saveUninitialized: true,
        //    key: 'sid',
        //    secret: 'my5uperSEC537(key)!',
        //    cookie: { maxAge: 860000 },
          //  store: rdbStore
   // }));

    //app.use(passport.initialize());
   // app.use(passport.session());

    //if (process.env.NODE_ENV === 'development') {
      //  app.use(morgan('dev'));
   // }else{
       //  app.use(compression());
    //}



    //app.use(bodyParser.urlencoded({ extended: true }));
   // app.use(bodyParser.json());


   /* var globals = fs.readdirSync(work_dir+global_dir);
    for (var i in globals){
        if(globals[i].endsWith(".js")){
            var r = global_dir + '/' + routes[i];
            var gfun=require(work_dir+r);
            console.log("nylon global :: "+r);
        }
    }*/

    //app.use(function(req,res,next){
      //   logger.info("client req "+req.url);

     //    req._r=db;
       //  req._config=config;
      //   req._validator=validator;
      //   req._jvm=jvm;
        // req._logger=logger;
       //  next();

    //});

   // app.set('views',work_dir+'/app/views');
    //app.set('view engine','jade');


  //  app.use(sass({
      //  src:work_dir+'/sass',
      //  dest:work_dir+'/public/css',
       // outputStyle:'compressed',
       // prefix:'/css'
    //}));


     /*app.get('/index.html',function(req,res,next){
         if(req.url.indexOf('index.html')>0 || req.url=="/"){
            
            var url = URL.parse(req.url, true).pathname ;
            if(url=="/")
                url="/index.html";

           // spiderman(url,req,res,true).then(function(req_html){
            //    res.end(req_html);
          //  });
            
            var urls=url.split("/");
            var base='./public';
            var file=urls[urls.length-1];
            for(var i=0;i<urls.length-1;i++){
                if(urls[i]){
                    base=base+"/" +urls[i];
                }
            }
            //console.log(base);
            
            var req_file=path.resolve(path.resolve(base+"/"+file));    
            console.log(req_file);

            fs.readFile(req_file, 'utf8',function(err,req_html){
                      let $ = cheerio.load(req_html);
                      $('link,script').each(function(i, elem) {
                           var link=$(this).attr('href');
                           if(link!==undefined){
                                var push = res.push(link,{
                                status: 200, // optional
                                method: 'GET', // optional
                                response: {
                                    'content-type': 'text/html'
                                }
                            });

                            var fnx=path.resolve(base+"/"+link);
                           // fs.createReadStream(fnx).pipe(push);   
                            fs.readFile(fnx, function(error, content) {
                                    if (error) {
                                        push.end();
                                    }
                                    else{
                                        push.end(content);
                                    }
                            });                         

                           }else{
                               link=$(this).attr('src');
                               if(link!==undefined){
                                var push = res.push(link,{
                                    status: 200, // optional
                                    method: 'GET', // optional
                                    response: {
                                        'content-type': 'application/javascript'
                                    }
                                });
                                var fnx=path.resolve(base+"/"+link);
                                 fs.readFile(fnx, function(error, content) {
                                    if (error) {
                                        push.end();
                                    }
                                    else{
                                        push.end(content);
                                    }
                            });   
                               }
                           }

                      });

                      res.end(req_html);
            });



         }else{
            next();
         }



     });*/

   // return app;
//}

/*

var spiderman_list=[];
var spiderman=function(url,req,res,check){
      var urls=url.split("/");
        var basex='./public';
        var base='';
        var file=urls[urls.length-1];
        for(var i=0;i<urls.length-1;i++){
            if(urls[i]){
                base=base+"/" +urls[i];
            }
        }
        basex=basex+base;
        var req_file=path.resolve(path.resolve(basex+"/"+file));    
        console.log(req_file);

       if(spiderman_list.indexOf(req_file) >= 0) {
           // spiderman_list[]=url;.
             return new Promise((resolve, reject) => {
                 resolve('xxx');
             });
       }else{

        spiderman_list.push(req_file);
        //console.log(spiderman_list);
       return new Promise((resolve, reject) => {

      

        fs.readFile(req_file, 'utf8',function(err,req_html){
            let $ = cheerio.load(req_html);
            $('link,script,img').each(function(i, elem) {
                    var link=$(this).attr('href');
                    if(link!==undefined){
                        if(link.indexOf(".html")>=0){
                             //  spiderman(base+"/"+link,req,res,false).then(function(){
                                    pushFile(basex,link,res)
                                    //.then(function(){
                                           resolve(req_html);
                                      //  });
                             //   });
                        }else{
                                pushFile(basex,link,res)
                                //.then(function(){
                                    resolve(req_html);
                               // });
                                
                        }

                    }else{
                            link=$(this).attr('src');
                            if(link!==undefined){
                                if(link.indexOf(".html")>=0){
                                   // spiderman(base+"/"+link,req,res,false).then(function(){
                                        pushFile(basex,link,res);//.then(function(){
                                            resolve(req_html);
                                        //});;
                                   // });
                                }else{
                                    pushFile(basex,link,res);//.then(function(){
                                        resolve(req_html);
                                    //})
                                    
                                }
                            }
                    }
            });
           // if(check){
              //  res.end(req_html);
           // }else{
                  //  var push = res.push(url,{
                             //       status: 200, // optional
                                //    method: 'GET'
                  //  });
                    //push.end(req_html);
           // }
        })

       });

       }
}*/

//var pushFile=function(base,link,res){
  //   return new Promise((resolve, reject) => {

      //      var push = res.push(link,{
           //                             status: 200, // optional
           //                             method: 'GET'
        //    });
          //  var fnx=path.resolve(base+"/"+link);
          //  fs.createReadStream(fnx).pipe(push);  
            // resolve("xxx"); 
                //fs.readFile(fnx, 'utf8', function(error, content) {
                //        if (error) {
                        // push.end();
                   //     }
                    //    else{
                         //   push.end(content,function(err){
                             //   console.log(link);
                                // resolve("xxx");
                           // });
                       // }
          //  }); 
           //   resolve("xxx");


    // });
//}
