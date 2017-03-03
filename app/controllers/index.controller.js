const sha1 = require('js-sha1');
exports.render = function (req, res) {
    res.render('index', {
        'title': "Hello",
        'message': "Hello First Viwer"
    });

}
exports.db = function (req, res) {
    var r = req.r;
    var x = function (data) {
        res.json(data);
    }
   // console.log("xxx");
    //try {
        r.db("oauth")
            .table("users")
            .run()
            .then(function (data) {
                x(data);
            });
   // } catch (f) {
       // console.log(f);
      //  next();
    //}

    //  ฝฝ ฝฝฝฝ.finally(function (data) {
    //       res.json(data);
    //   }).catch(function (err) {
    //   res.send(err);
    //  })


}

exports.jdbc = function (req, res) {
    req.jdbc.query("mysql", "SELECT *  FROM  vet_ages", [], function (err, data) {
        res.send(data);
    });
}

exports.report = function (req, res) {
    var datas = [
        {
            name: "somchit",
            surname: "chanudom",
            address: "5/424",
            subject: [{
                name: "test",
                title: "xxxx"
            }],
            exports: [
                "a", "b", "c"
            ]
        },
        {
            name: "somchit",
            surname: "chanudom",
            address: "5/424",
            subject: [{
                name: "test",
                title: "xxxx"
            }]
            ,
            exports: [
                "a", "b", "c"
            ]
        }, {
            name: "somchit",
            surname: "chanudom",
            address: "5/424",
            subject: [{
                name: "test",
                title: "xxxx"
            }]
            ,
            exports: [
                "a", "b", "c"
            ]
        }
    ];
    var parameters = {
        department: "it"
    };
    var type = req.param("type");
    req.logger.info(type);
    res.ireport("report1.jasper", type, datas, parameters);
}

exports.userinfo = function (req, res) {
    if (!req.user) {
        res.send("Not Login");
    } else {
        res.json(req.user);
    }
}

exports.ajv = function (req, res) {

    var u = {
        id: 1333
    };

    var valid = req.ajv.validate('user', u);
    if (!valid) req.logger.info(req.ajv.errorsText());

    res.send(req.ajv.errorsText());
}


exports.pusher = function (req, res) {
    req.logger.info("pusher");
    res.pusher([
        "/bower_components/polymer/polymer.html",
        "/bower_components/polymer/polymer-mini.html",
        "/bower_components/polymer/polymer-micro.html",
        "/images/icon/app-icon-32.png",
        "/bower_components/gl-font/fonts/csChatThai/CSChatThaiUI.ttf"

    ], function (err) {
        console.log(err);
        res.end("");
    })
};

 exports.sha1= function(req, res) {
        var password = req.query.password;
        var data = sha1(password);
        res.send(data);
    }