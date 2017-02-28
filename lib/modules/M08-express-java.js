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

var java = require('java');
var logger = require('winston');
var async = require('async');
var fscan = require('./../common/fscan');

module.exports = function (app ,db, nylon_path) {
    try {
        fscan.scan(nylon_path + "/java", '.jar', true, function (err, jars) {
            if(!err){
                 async.each(jars, function (jar, next) {
                    try {
                        java.classpath.push(jar);
                        logger.info("Load Java Module :: " + jar.replace(nylon_path, ""));
                        next();
                    } catch (err) {
                        logger.error(err);
                        next();
                    }
                }, function (err) {
                    app.use(function (req, res, next) {
                        req.java = java;
                        next();
                    });

                
                });
            }else{
                 logger.error(error);
            }
           
        });

    } catch (error) {
        logger.error(error);
       
    }

}