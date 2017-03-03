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
var passport = require('passport');


var loadRouter = function (app, nylon_path, prefix, wd, rd, routes, callback) {
    async.each(routes, function (route, next) {
        try {
            var rname = route.replace(".routes.js", "");
            rname = rname.replace(wd, "");
            rname = rname.replace(rd, "");
            var router = express.Router();
            require(route)(router, nylon_path);
            if (prefix == "/api") {
                app.use(prefix + rname, router);
            }else{
                  app.use(prefix + rname, router);
            }

            logger.info("nylon start route ::  " + prefix + rname + " >> " + rd + rname + ".routes.js");
            next();
        }
        catch (err) {
            logger.error(err);
            next();
        }
    }, function (err) {
        callback(err, app);
    });





}

module.exports = function (app, db, nylon_path) {
    // app = require('./../routes/oauth.routes')(app, nylon_path);
    //app = require('./../routes/pusher.routes')(app);

    fscan.scan(nylon_path + "/lib/app/routes", ".routes.js", true, function (err, routes_root) {
        loadRouter(app, nylon_path, "", nylon_path, "/lib/app/routes", routes_root, function (err, app) {

            fscan.scan(work_dir + route_dir, ".routes.js", true, function (err, routes) {
                loadRouter(app, nylon_path, "/api", work_dir, route_dir, routes, function (err, app) {

                    app.use(express.static(work_dir + '/public'));
                    app.use('/nylon', express.static(nylon_path + '/lib/public'));
                    app.use(function (req, res, next) {
                        var ref = req.headers["referer"];
                        console.log(ref);
                        var url = URL.parse(req.url, true).pathname;
                        if (url.indexOf('api') < 0 && url.indexOf('.') < 0) {
                            res.status(200);
                            res.sendFile(work_dir + '/public/index.html', 200);
                        } else {
                            if (ref) {
                                next();
                            } else {
                                res.sendFile(work_dir + '/public/index.html', 200);
                            }

                        }
                    });
                });
            });

        });
    });


}