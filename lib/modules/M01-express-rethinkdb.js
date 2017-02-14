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
const config = require(process.cwd() + '/config/config');
var db=require('rethinkdbdash')(config.database);
var RDBStore = require('./../datasource/rethinkdb-session')(session);


module.exports=function(app){
    
    var rdbStore = new RDBStore({
            connection: db,
            db: 'oauth',
            table: 'session',
            sessionTimeout: 86400000,
            flushInterval: 60000,
            debug: false
    });


    app.use(session({
            resave: false,
            saveUninitialized: true,
            key: 'sid',
            secret: 'my5uperSEC537(key)!',
            cookie: { maxAge: 860000 },
            store: rdbStore
    }));

    app.use(function (req, res, next) {
        req.r=db;
        req.logger=logger;
        next();
    });

    

}