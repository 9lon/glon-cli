var jwt = require('jsonwebtoken');
var fs = require('fs');
const config = require(process.cwd() + '/config/config');
const work_dir = process.cwd();

function getApp(appid, appkey, r, callback) {
    if (appid && appkey) {
        r.table('apps').filter({ id: appid, app_secret: appkey })
            .run()
            .then(function (data) {
                if (data.length > 0) {
                    callback(data[0]);
                } else {
                    callback({ error: "app key invalid2" });
                }
            }).catch(function (err) {
                callback({ error: "app key invalid2" });
            });
    } else {
        callback({ error: "app key invalid2" });
    }

}

exports.js = function (req, res, nylon_path) {
    var r = req.r;
    var appid = req.params.appid;
    var appkey = req.params.appkey;
    getApp(appid, appkey, r, function (data) {
        if (data.error) {
            res.send(data);
        } else {
            fs.readFile(nylon_path + '/lib/public/js/oauth.js', "utf-8", function (err, content) {
                if (err) return console.log(err);
                content = content.replace(/{OAUTH_HOST}/g, req.headers.host);
                content = content.replace(/{OAUTH_APP_CALLBACK}/g, data.allow_callback_url);
                content = content.replace(/{OAUTH_APP_LOGOUT}/g, data.allow_logout_url);

                content = content.replace(/{OAUTH_APP_ID}/g, appid);
                content = content.replace(/{OAUTH_APP_KEY}/g, appkey);
                res.end(content);
            });
        }
    });
}

exports.register = function (req, res) {
    var pid = req.body.pid;
    if (pid) {
        console.log("bef sid : " + req.sessionID);
        r.table("users").filter({ pid: pid })
            .run()
            .then(function (ou) {
                if (ou.length > 0) {
                    r.table("session")
                        .get(req.sessionID)
                        .run()
                        .then(function (ss) {
                            console.log(ss.session);
                            var s = JSON.parse(ss.session);
                            r.table("users")
                                .get(s.passport.user)
                                .run()
                                .then(function (cu) {
                                    ou[0].providers.push(cu.providers[0]);
                                    r.table("users").get(ou[0].id).update(ou[0]).run().then(function (rdd) {
                                        r.table("users").get(cu.id).delete().run().then(function (xxr) {
                                            req.login(ou[0], function (err) {
                                                console.log("after sid : " + req.sessionID);
                                                req.user.id = ou[0].id;
                                                res.redirect('/oauth/logined');
                                            });
                                        });
                                    });
                                });
                        });

                } else {
                    r.table("session")
                        .get(req.sessionID)
                        .run()
                        .then(function (ss) {
                            var s = JSON.parse(ss.session);
                            r.table("users")
                                .get(s.passport.user)
                                .do(function (dd) {
                                    return r.table('users').get(dd('id')).update({ pid: pid, register: true })

                                })
                                .run()
                                .then(function (u) {
                                    res.redirect('/oauth/logined');

                                });
                        })
                }
            });


    }

}

exports.login = function (req, res) {
    var r = req.r;
    var appid = req.params.appid;
    var appkey = req.params.appkey;
    getApp(appid, appkey, r, function (data) {
        if (data.error) {
            res.send(data);
        } else {
            var session = {
                id: req.sessionID,
                ref: data.allow_callback_url,
                appid: appid,
                appkey: appkey,
                appname: data.app_name,
                host: req.headers.host
            };

            r.table("session_ref")
                .insert(session)
                .run()
                .then(function (a) {
                    res.render('login', {
                        'title': "Login",
                        'message': "Login page"
                    });
                });
        }
    });

};

exports.logined = function (req, res) {
    var r = req.r;
    console.log("logined sid : " + req.sessionID);
    r.table("session")
        .get(req.sessionID)
        .run()
        .then(function (ss) {
            var s = JSON.parse(ss.session);
            r.table("users")
                .get(s.passport.user)
                .pluck("id", "name", "email", "photo", "gender", "role", "status", "register")
                .merge((users_merge) => {
                    return {
                        apps: r.table('user_apps')
                            .getAll(users_merge('id'), { index: 'uid' })
                            .eqJoin('app_id', r.table('apps')).pluck("left", { right: ['app_name'] }).zip()
                            .coerceTo('array')
                    }
                })
                .run()
                .then(function (u) {
                    var session = {
                        id: u.id,
                        name: u.name,
                        photo: u.photo,
                        email: u.email,
                        gender: u.gender,
                        role: u.role,
                        status: u.status,
                        apps: u.apps,
                        register: u.register
                    };

                    var cert = fs.readFileSync(work_dir + '/ssl/server.key');  // get private key
                    var token = jwt.sign(session, cert, { expiresIn: 300 });
                    if (!u.register) {
                        res.render("register", {});
                        return;
                    }

                    r.table("session_ref")
                        .get(req.sessionID)
                        .run()
                        .then(function (data) {
                            r.table("session_ref")
                                .get(req.sessionID)
                                .delete()
                                .run()
                                .then(function (d) {

                                    if (!u.status) {
                                        res.render("appUser", {
                                            message: "สถานะของคุณถูกปิดใช้งาน",
                                            userName: session.name,
                                            userStatus: session.status,
                                            userRole: session.role,
                                            appName: "-",
                                            appStatus: "-",
                                            appRole: "-",
                                            link: config.host + "/my-app?token=" + token,
                                            messageLink: "กรุณาติดต่อผู้ดูแลระบบ"
                                        })

                                    } else {
                                        if (u.role != "ADMIN") {
                                            var checkapp = false;
                                            var check_app_status = false;
                                            var app_name = "";
                                            var app_role = "";
                                            for (var i = 0; i < u.apps.length; i++) {
                                                if (data.appid == u.apps[i].app_id) {
                                                    checkapp = true;
                                                    app_name = u.apps[i].app_name;
                                                    app_role = u.apps[i].role;
                                                    if (u.apps[i].status) {
                                                        check_app_status = true;
                                                    }
                                                    break;
                                                }
                                            }
                                            if (checkapp) {
                                                if (check_app_status) {
                                                    res.redirect(data.ref + "?token=" + token);
                                                } else {
                                                    ;
                                                    res.render("appUser", {
                                                        message: "สถานะการใช้งานของคุณระบบ " + app_name + " ไม่เปิดใช้งาน",
                                                        userName: session.name,
                                                        userStatus: session.status,
                                                        userRole: session.role,
                                                        appName: app_name,
                                                        appStatus: check_app_status,
                                                        appRole: app_role,
                                                        link: config.host + "/my-app?token=" + token,
                                                        messageLink: "ไปยังหน้าระบบที่ใช้งานได้ของคุณ"
                                                    })
                                                }
                                            } else {

                                                res.render("appUser", {
                                                    message: "คุณยังไม่ได้ลงทะเบียนใช้งาน ระบบ " + data.appname,
                                                    userName: session.name,
                                                    userStatus: session.status,
                                                    userRole: session.role,
                                                    appName: data.appname,
                                                    appStatus: "-",
                                                    appRole: "-",
                                                    link: config.host + "/my-app?token=" + token,
                                                    messageLink: "ไปยังหน้าลงทะเบียนระบบ"
                                                })


                                            }
                                        } else {
                                            res.redirect(data.ref + "?token=" + token);
                                        }

                                    }
                                });

                        });

                });

        });

}



exports.logout = function (req, res) {

    var session = {
        id: req.user.id,
        name: req.user.name,
        photo: req.user.photo,
        email: req.user.email,
        gender: req.user.gender,
        role: req.user.role,
        status: req.user.status,
        apps: req.user.apps
    };
    var cert = fs.readFileSync(work_dir + '/ssl/server.key');  // get private key
    var token = jwt.sign(session, cert, { expiresIn: 300 });
    // var token = jwt.sign(session, config.oauth.jwt.clientSecret, { expiresIn: -1 });

    var data = {
        jwt: token
    }
    res.json(data);

};


exports.userInfo = function (req, res) {
    if (req.user) {
        var session = {
            id: req.user.id,
            name: req.user.name,
            photo: req.user.photo,
            email: req.user.email,
            gender: req.user.gender,
            role: req.user.role,
            status: req.user.status,
            apps: req.user.apps
        };
        var cert = fs.readFileSync(work_dir + '/ssl/server.key');  // get private key
        var token = jwt.sign(session, cert, { expiresIn: 300 });
        // var token = jwt.sign(session, config.oauth.jwt.clientSecret, { expiresIn: config.oauth.jwt.timeout });

        var data = {
            jwt: token,
            user: req.user
        }
        res.json(data);
    }
    else {
        res.json({ error: "xxxxxxxxxxx" });
    }

}