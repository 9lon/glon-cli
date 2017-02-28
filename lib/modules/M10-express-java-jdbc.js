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
const config = require(process.cwd() + '/config/config');

var jdbc;
module.exports = function (app) {
    
    var jdbc_function = {
        query: function (driver, sql, parameters, callback) {
            
            if (jdbc == undefined) {
                console.log("jdbc first time");
                var JDBCConnect = java.import("nylon.data.JDBCConnect");
                jdbc = new JDBCConnect();
                async.each(config.jdbc, function (conn, next) {
                    logger.info("JDBCConnect :: " + conn.name);
                    try {
                        jdbc.addConnection(conn.name, conn.driver, conn.url, conn.user, conn.password
                            , function (err, data) {
                                console.log(data);
                                next();
                            }
                        );
                    } catch (error) {
                        next();
                    }
                }, function (err) {
                    jdbc.query(driver, sql, parameters, function (err, data) {
                        callback(err, data);
                    });
                });
            } else {
                jdbc.query(driver, sql, parameters, function (err, data) {
                    callback(err, data);
                });
            }
        }
    }

    app.use(function (req, res, next) {

        req.jdbc = jdbc_function;
        next();

    });

    // callback();

}