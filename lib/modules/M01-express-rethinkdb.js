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

var session = require('express-session');
var logger = require('winston');
var fs = require('fs');
var RDBStore = require('./../datasource/rethinkdb-session')(session);
const config = require(process.cwd() + '/config/config');


module.exports = function (app, db) {
    var cert = fs.readFileSync(process.cwd() + '/ssl/server.key');  // get private key
    var dbId = config.appId.replace(/-/g, "");
   // console.log(cert.toString());

    var rdbStore = new RDBStore({
        connection: db,
        db: dbId,
        table: 'session',
        sessionTimeout: 5 * 60 * 1000,
        flushInterval: 5 * 61 * 1000,
        debug: false
    });



    app.use(session({
        resave: false,
        saveUninitialized: true,
        key: 'sid',
        secret: cert.toString(),
        cookie: { maxAge: 5 * 60 * 1000 },
        store: rdbStore
    }));



    app.use(function (req, res, next) {
        req.r = db;
        req.logger = logger;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Custom-Header, X-Requested-With, Content-Type, Accept, X-APP-ID, X-APP-KEY, Authorization");
        next();
    });

    //callback();

}