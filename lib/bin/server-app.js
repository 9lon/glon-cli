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


var express = require('express');
var async = require('async');
var logger = require('winston');
var fscan = require('./../common/fscan');
const work_dir = process.cwd();
const config = require(process.cwd() + '/config/config');
var db = require('rethinkdbdash')(config.database);


module.exports = function (nylon_path) {
    logger.info("nylon Server run at env : " + process.env.NODE_ENV);
    var app = express();

    /** load express module */

    console.log("work_dir::" + work_dir);
    fscan.scan(nylon_path + "/lib/modules", ".js", false, function (err, modelues) {

        async.each(modelues, function (modelue, next) {
            
            try {
                require(nylon_path + "/lib/modules/" + modelue)(function(){
                    logger.info("Load Module   :: " + modelue +" Complete!");
                    next();
                },app,db, nylon_path);
            } catch (err) {
                logger.error(err);
                next(err);
            }
        }, function (err) {

        });

    });

    return app;
}