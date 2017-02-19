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

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const cluster = require('cluster');
const http = require('http');
const http2 = require('spdy');
const fs = require('fs');
const application = require('./server-app');
var logger = require('./server-logger');
const watcher = require('./server-watcher');
const manifest = require('./../core/manifest');
const config = require(process.cwd() + '/config/config');
const work_dir = process.cwd();

logger = logger.logger;



//const validator=require('./validator');
//const rethinkdb=require('./rethinkdb');
//const express =require('./express');
//const express_route =require('./express-load-route');

//const passport =require('./passport');
//const java = require('./java');
//const iReport = require('./iReport');
//const socket = require('./socket');
//const jdbc = require('./jdbc');
//const http2 =require('spdy');
//const fs =require('fs');
//var logger = require('winston');
//const work_dir=process.cwd();
//var URL = require('url');
///var pathx =require('path');
//var cheerio = require('cheerio');

//var now = new Date();
//var logger_f="L"+now.getFullYear() + now.getMonth()+ now.getDate();

//logger.configure({
//  transports: [
//  new (logger.transports.Console)(),
//new (logger.transports.File)({ filename: work_dir+'/loggers/'+logger_f+".log" })
//]
//});



exports.serve = function (nylon_path) {
    if (cluster.isMaster) {

        for (var i = 0; i < config.server.cluster; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            cluster.fork();
            logger.info('worker ' + worker.process.pid + ' died');
        });

        watcher.addWatcher(process.cwd() + '/app');
        watcher.addWatcher(process.cwd() + '/config');
        watcher.addWatcher(process.cwd() + '/ssl');

        watcher.addWatcher(nylon_path + '/java');
        watcher.addWatcher(nylon_path + '/lib');



    } else {
        // var fs_package = require('fs');
        //var manifest = JSON.parse(fs.readFileSync(process.cwd()+'/public/manifest.json', 'utf8'));

        // validator.loadSchema(process.cwd()+'/app/models');
        //java.loadJava(path+"/java");



        //   var db  = rethinkdb(config);
        // var app = express(db,config,validator.ajv,manifest);
        // jdbc.loadJDBC(java.jvm);
        //require('./java')(app,path+"/java");
        //require('./express-load-route')(app);
        //require('./iReport')(app);
        //require('./oauth/oauth.routes')(app);
        //   require('./jdbc-express')(app);

        // var server =http.createServer(app); 

        var app = application(nylon_path);



        var server = null;
        if (config.h2.enable) {
            var options = {
                key: fs.readFileSync(work_dir + config.h2.ssl.key),
                cert: fs.readFileSync(work_dir + config.h2.ssl.cert),
                spdy: {
                    protocols: ['h2', 'spdy/3.1', 'spdy/3', 'spdy/2', 'http/1.1', 'http/1.0'],
                    plain: false,
                    'x-forwarded-for': true,
                    connection: {
                        windowSize: 1024 * 1024,
                        autoSpdy31: false
                    }
                }
            };
            server = http2.createServer(options, app);
        }else{
            server =http.createServer(app); 
        }

     //   var server = http2.createServer(options, app);

        server.listen(config.server.port, function (error) {
            if (error) {
                logger.error(error);
            } else {
                logger.info('Nylon server listening on port ' + config.server.port + ' pid ' + process.pid);
            }
        });


        process.on('uncaughtException', function (err) {
            logger.error(err);
            process.exit(1);
        });

        module.exports = app;
    }
}

    // var server= http2.createServer(options, app);

     /*var server = http2.createServer(options,function(req, res) {
            var headers = {}
            var body;
            var status = 200;

            if(req.url.indexOf('.html')>0 || req.url=="/"){
            
            var url = URL.parse(req.url, true).pathname ;
            if(url=="/")
                url="/index.html";
            
            var urls=url.split("/");
            var base='./public';
            var file=urls[urls.length-1];
            for(var i=0;i<urls.length-1;i++){
                if(urls[i]){
                    base=base+"/" +urls[i];
                }
            }
            //console.log(base);
            
            var req_file=pathx.resolve(pathx.resolve(base+"/"+file));    
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
                                    push.on('error', function() {
            });
                            var fnx=pathx.resolve(base+"/"+link);
                            fs.createReadStream(fnx).pipe(push);                            

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
                                   push.on('error', function() {
            });
                                var fnx=pathx.resolve(base+"/"+link);
                                fs.createReadStream(fnx).pipe(push);
                               }
                           }

                      });
                      res.writeHead(200, { 'content-type': 'text/html'});
                      res.end(req_html);
            });

            //headers['Content-Length'] = body.length;

            //response.writeHead(status, headers);

           // response.end(body);
        }else {
            res.sendFile(req.url);
        }
     });*/

       // http2.createServer(options, function(req, res) {
        //    res.writeHead(200);
        ///    res.end('Hello world over HTTP/2');
      ///  }).listen(3000);


       // var oauth=passport(db,config);

        // spdy.createServer(options, app);


   //// }
//}
