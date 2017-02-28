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

const fs = require('fs');
var logger = require('winston');
var async = require('async');
const Ajv = require('ajv');
var fscan = require('./../common/fscan');
var ajv = Ajv({ allErrors: true });
const work_dir = process.cwd();
var loadSchema = function (models, callback) {

    async.each(models, function (model, next) {
        logger.info("Load Data Model :: " + model.replace(work_dir, ""));
        try {
            fs.readFile(model, 'utf8', function (err, data) {
                if (err) {
                    logger.error(err);
                    next();
                } else {
                    obj = JSON.parse(data);
                    ajv.addSchema(obj, obj.name);
                    next();
                }

            });
        }
        catch (err) {
            logger.error(err);
            next();
        }

    }, function (err) {
        callback(err);
    });
}
module.exports = function (app) {
    fscan.scan(work_dir + "/app/models", ".model.json", true, function (err, models) {
        loadSchema(models, function (err) {
            logger.info("Load Data Mode is ok");
        });
    });


    app.use(function (req, res, next) {
        req.ajv = ajv;
        next();
    });


}