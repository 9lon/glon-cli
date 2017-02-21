var fs = require('fs');
var async = require('async');
var URL = require('url');
const work_dir = process.cwd();
var push_list = [];

const config = require(process.cwd() + '/config/config');

module.exports = function (app) {
    if (config.h2) {
        if (config.h2.pusher == "auto") {

            fs.readFile(work_dir + '/public/pusher.cache.json', function (err, content) {
                if (err) content = "[]";
                push_list = JSON.parse(content);
            });
        } else if (config.h2.pusher == "on") {
            fs.readFile(work_dir + '/public/pusher.json', function (err, content) {
                if (err) content = "[]";
                push_list = JSON.parse(content);
            });
        }
    }

    app.use(function (req, res, next_func) {
        if (config.h2.enable) {
            if (config.h2.pusher == "auto" || config.h2.pusher == "on") {

                var url = URL.parse(req.url, true).pathname;

                if (url.indexOf('/service-worker.js') == 0 ||
                    url.indexOf('/manifest.json') == 0 ||
                    url.indexOf('/bower_components/') == 0 ||
                    url.indexOf('/css/') == 0 ||
                    url.indexOf('/images/') == 0||
                    url.indexOf('/js/') == 0){
                    // ||
                   // url.indexOf('/src/') == 0 ||
                   // url.indexOf('/js/') == 0) {
                    if (!push_list.includes(url)) {
                        push_list.push(url);
                        fs.writeFile(work_dir + "/public/pusher.cache.json", JSON.stringify(push_list), function (err) {

                        });
                    }

                }

                res.pusher = function (list, callback) {
                    if (list == false) {
                        list = push_list;
                    }
                    async.each(list, function (push_file, next) {
                        try {
                            //  console.log(push_file);
                            var contentType;
                            if (push_file.indexOf('.html' > 0)) {
                                contentType = "text/html";
                            } else if (push_file.indexOf('.js' > 0)) {
                                contentType = "application/javascript";
                            }
                            else if (push_file.indexOf('.json' > 0)) {
                                contentType = "application/json";
                            }
                            else if (push_file.indexOf('.css' > 0)) {
                                contentType = "text/css";
                            }
                            else if (push_file.indexOf('.xml' > 0)) {
                                contentType = "application/xml";
                            }
                            else if (push_file.indexOf('.git' > 0)) {
                                contentType = "image/gif";
                            }
                            else if (push_file.indexOf('.jpg' > 0)) {
                                contentType = "image/jpeg";
                            }
                            else if (push_file.indexOf('.png' > 0)) {
                                contentType = "image/png";
                            }
                            else {
                                contentType = "application/octet-stream";
                            }

                            fs.readFile(work_dir + '/public' + push_file, function (err, content) {
                                if (err) next();
                                res.push(push_file,
                                    {
                                        status: 200,
                                        method: 'GET',
                                        request: {
                                            accept: '*/*'
                                        },
                                        response: {
                                            'content-type': contentType
                                        }
                                    },
                                    function (err, stream) {
                                        if (err) next();
                                        // console.log(content);
                                        stream.end(content);
                                        next();
                                    }
                                );
                            });
                        } catch (err) {
                            next();
                        }
                    }, function (err) {
                        callback(err);
                    });
                };

            }
        }

        next_func();
    });

}