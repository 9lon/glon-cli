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

module.exports = function (app, nylon_path) {
    try {


        fscan.scan(nylon_path + "/java", '.jar', true, function (err, jars) {
            for (var i = 0; i < jars.length; i++) {
                java.classpath.push(jars[i]);
                logger.info("Load Java Module :: " + jars[i].replace(nylon_path,""));
            }
        });

        app.use(function (req, res, next) {
            req.java = java;
            next();
        });

    } catch (error) {
        logger.error(error);
    }

}