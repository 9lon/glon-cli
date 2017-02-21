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
const config = require(process.cwd() + '/config/config');


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
            logger.error(err);
            next(err);
        }

    }, function (err) {
        callback(err, app);
    });





}

module.exports = function (callback, app, db, nylon_path) {
    app = require('./../routes/oauth.routes')(app,nylon_path);
    fscan.scan(work_dir + route_dir, ".routes.js", true, function (err, routes) {
        loadRouter(app, routes, function (err, app) {

            if (config.h2.enable) {
                if (config.h2.pusher == "auto" || config.h2.pusher == "on") {
                    require('./../routes/pusher.routes')(app);
                }
            }

            app.use(express.static(work_dir + '/public'));

            app.use('/nylon', express.static(nylon_path + '/lib/public'));

            app.use(function (req, res, next) {
                var ref = req.headers["referer"];
                var url = URL.parse(req.url, true).pathname;
                if (url.indexOf('api') < 0 && url.indexOf('.') < 0) {
                    res.status(200);
                    if (config.h2.enable) {
                        if (config.h2.pusher == "auto") {
                            res.pusher(false, function (err) {
                                fs.readFile(work_dir + '/public/index.html', function (err, content) {
                                    res.end(content);
                                });

                            });
                        } else {
                            res.sendFile(work_dir + '/public/index.html', 200);
                        }
                    } else {
                        res.sendFile(work_dir + '/public/index.html', 200);
                    }
                } else {
                    if (ref) {
                        next();
                    } else {
                        if (url.indexOf('api') < 0) {
                            if (config.h2.enable) {
                                if (config.h2.pusher == "auto") {
                                    res.pusher(false, function (err) {
                                        fs.readFile(work_dir + '/public/index.html', function (err, content) {
                                            res.end(content);
                                        });

                                    });
                                } else {
                                    res.sendFile(work_dir + '/public/index.html', 200);
                                }
                            } else {
                                res.sendFile(work_dir + '/public/index.html', 200);
                            }
                        } else {
                            next();
                        }
                    }

                }
            });
            callback();
        });
    });
}