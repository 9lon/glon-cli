
var fs = require('fs');
const config = require(process.cwd() + '/config/config');

const work_dir = process.cwd();
module.exports = function (app) {
    if (config.h2.enable) {
        if (config.h2.pusher == "auto") {
            app.get('/', function (req, res, next) {
                res.pusher(false, function (err) {
                    fs.readFile(work_dir + '/public/index.html', function (err, content) {
                        res.end(content);
                    });
                });
            });

            app.get('/index.html', function (req, res, next) {
                res.pusher(false, function (err) {
                    fs.readFile(work_dir + '/public/index.html', function (err, content) {
                        res.end(content);
                    });

                });
            });
        } else if (config.h2.pusher == "on") {
            app.get('/pusher', function (req, res, next) {
                res.pusher(false, function (err) {
                    res.end("");
                });
            });
        }
    }
}