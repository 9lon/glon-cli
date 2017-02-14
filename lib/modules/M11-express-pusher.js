var fs = require('fs');
var async = require('async');
const work_dir = process.cwd();

module.exports = function (app) {

    app.use(function (req, res, next_func) {
        res.pusher = function (list, callback) {

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
                                    accept: '*//*'
                                },
                                response: {
                                    'content-type': contentType
                                }
                            },
                            function (err, stream) {
                                 if (err) next(err);
                                // console.log(content);
                                stream.end(content);
                                next();
                            }
                        );
                    });
                } catch (err) {
                    next(err);
                }
            }, function (err) {
                callback(err);
            });
        };
        next_func();
    });
}