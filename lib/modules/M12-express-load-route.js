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

const work_dir = process.cwd();
const route_dir = "/app/routes";
var fs = require('fs');
var express = require('express');
var URL = require('url');
var logger = require('winston');
var async = require('async');
var fscan = require('./../common/fscan');
/*
function loadRouter(path, prefix, app) {
    return new Promise((resolve, reject) => {

        fs.readdir(path, function (err, files) {
            files.forEach(function (filename) {
                if (filename !== ".") {
                    fs.stat(path + "/" + filename, function (err, stats) {
                        if (!err) {
                            if (stats.isDirectory()) {
                                var prefixx = prefix + "/" + filename;
                                resolve(loadRouter(path + "/" + filename, prefixx, app));
                            } else {
                                if (filename.endsWith(".routes.js")) {
                                    // path.dirname(require.main.filename);

                                    var rname = filename.replace(".routes.js", "");
                                    var router = express.Router();
                                    require(path + "/" + filename)(router);
                                    app.use(prefix + "/" + rname, router);
                                    // logger.info(prefix+"/"+rname);
                                    logger.info("nylon start route :: " + prefix + "/" + rname + " >> " + filename);
                                    resolve('end of load routes');
                                } else {
                                    resolve('end of load routes');
                                }
                            }
                        }
                        else {
                            resolve('end of load routes');
                        }
                    });
                } else {
                    resolve('end of load routes');
                }
            });

        });

    });
}*/

var loadRouter = function (app, routes, callback) {
    async.each(routes, function (route, next) {
        //   logger.info("nylon start route :: " + route);
        try {
            var rname = route.replace(".routes.js", "");
            rname = rname.replace(work_dir, "");
            rname = rname.replace(route_dir, "");

            var router = express.Router();
            require(route)(router);
            app.use("/api" + rname, router);
            // logger.info(prefix+"/"+rname);
            logger.info("nylon start route ::  /api" + rname + " >> " + route_dir + rname + ".routes.js");
            next();
        }
        catch (err) {
            next(err);
        }

    }, function (err) {
        callback(err, app);
    });





}

module.exports = function (app) {

    fscan.scan(work_dir + route_dir, ".routes.js", true, function (err, routes) {
           loadRouter(app, routes, function (err, app) {
            
           require('./../routes/oauth.routes')(app);
           require('./../routes/pusher.routes')(app);

            app.use(express.static(work_dir + '/public'));
            
           
            
            app.use(function (req, res, next) {
                var ref = req.headers["referer"];
                var url = URL.parse(req.url, true).pathname;
                if (url.indexOf('api') < 0 && url.indexOf('.') < 0) {
                    res.status(200);
                    res.sendFile(work_dir + '/public/index.html', 200);
                } else {
                    if (ref) {
                        next();
                    } else {
                        if (url.indexOf('api') < 0) {
                            res.sendFile(work_dir + '/public/index.html', 200);
                        } else {
                            next();
                        }

                    }

                }
            });
        });
    });

    /*loadRouter(work_dir + route_dir, "/api", app).then(function (x) {
        logger.info(x);
        app.use(express.static(work_dir + '/public'));
        app.use(function (req, res, next) {
            var ref = req.headers["referer"];
            var url = URL.parse(req.url, true).pathname;
            if (url.indexOf('api') < 0 && url.indexOf('.') < 0) {
                res.status(200);
                res.sendFile(work_dir + '/public/index.html', 200);
            } else {
                if (ref) {
                    next();
                } else {
                    if (url.indexOf('api') < 0) {
                        res.sendFile(work_dir + '/public/index.html', 200);
                    } else {
                        next();
                    }

                }

            }
        });
    });*/
}