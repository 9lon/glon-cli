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

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const cluster = require('cluster');
const http = require('http');
const http2 = require('spdy');
const fs = require('fs');
const application = require('./server-app');
var logger = require('./server-logger');
const watcher = require('./server-watcher');
const manifest = require('./../core/manifest');
const config = require(process.cwd() + '/config/config');
const work_dir = process.cwd();
logger = logger.logger;

exports.serve = function (nylon_path, port) {
    if (cluster.isMaster) {

        cluster.fork();
        cluster.on('exit', (worker, code, signal) => {
            cluster.fork();
            logger.info('worker ' + worker.process.pid + ' died');
        });

        watcher.addWatcher(process.cwd() + '/app');
        watcher.addWatcher(process.cwd() + '/config');
        watcher.addWatcher(process.cwd() + '/ssl');
        watcher.addWatcher(nylon_path + '/java');
        watcher.addWatcher(nylon_path + '/lib');

    } else {

        var app = application(nylon_path);
        var server = null;

        var options = {
            key: fs.readFileSync(work_dir + "/ssl/server.key"),
            cert: fs.readFileSync(work_dir + "/ssl/server.crt"),
            spdy: {
                protocols: ['h2', 'spdy/3.1', 'spdy/3', 'spdy/2', 'http/1.1', 'http/1.0'],
                plain: false,
                'x-forwarded-for': true,
                connection: {
                    windowSize: 1024 * 1024,
                    autoSpdy31: false
                }
            }
        };
       
       
        server = http2.createServer(options, app);
       //server = http.createServer( app);


        server.listen(port, function (error) {
            if (error) {
                logger.error(error);
            } else {
                logger.info('Nylon server listening on port ' + port + ' pid ' + process.pid);
            }
        });

        process.on('uncaughtException', function (err) {
            logger.error(err);
            process.exit(1);
        });

        module.exports = app;
    }
}