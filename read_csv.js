var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var encoding = require("encoding");
var fscan = require('./lib/common/fscan');
var inputFile = 'C:\\Users\\Accounting\\Downloads\\fwdonline\\utf8\\';
var r = require('rethinkdbdash')({
    max: 10,
    servers: [
        { host: 'rdb.codeunbug.com', port: 28015 }
    ],
    db: 'lms'
});
//var q_list = [];
var sum=0;
function readcsv(f, m, s) {
    //console.log(f);
    //console.log(m);
    //console.log(s);
    var parser = parse({ delimiter: ',' }, function (err, data) {
        var q_list = [];
        async.eachSeries(data, function (line, callback) {
            //  if(line.length>3){}
            var data = {
                "answer": 1,
                "choice": [

                ],
                "tag": [
                    m, s
                ],
                "topic": line[0],

            };
            var c = {
                "checked": true,
                "choice": line[1],
                "image_id": ""
            };
            data.choice.push(c);
             var chk1 = line[1].replace(" ", "");
             var chk2="";
            for (var i = 2; i < line.length; i++) {
                var c2 = {
                    "checked": false,
                    "choice": line[i],
                    "image_id": ""
                };
               
                chk2 = line[i].replace(" ", "");
                if (chk1 != chk2 && chk2!="") {
                    data.choice.push(c2);
                }

            }
            if(line[0].replace(" ", "")!="" && chk1!="" && chk2!=""){
                q_list.push(data);
            }
            
            // do something with the line
            //doSomething(line).then(function() {
            // when processing finishes invoke the callback to move to the next one
            //console.log(line[0]);
            callback();
            // });
        }, function (errr) {
            // console.log(JSON.stringify(q_list));

          //  fs.writeFile(inputFile + s + ".json", JSON.stringify(q_list), function (err) {

           // });
           r.db("lms").table("question").insert(q_list).run().then(function(e){
               sum=sum+e.inserted
               console.log(s,">> complete : ",e.inserted, " error : ", e.errors , " total : " , sum);
           });
        });
    });

    fs.createReadStream(f).pipe(parser);

}


fscan.scan(inputFile, ".csv", false, function (err, csvs) {
    async.each(csvs, function (csv, next) {
        var c = "*";
        for (var i = 0; i < csv.length; i++) {
            // if(csv[i])
            try {
                var x = parseInt(csv.charAt(i));
                // console.log(x);
                if (isNaN(x)) {
                    c = c + csv[i];
                } else {
                    break;
                }
                //break;
            } catch (e) {

            }

        }

        readcsv(inputFile + csv, c, csv.replace(".csv", ""))
        //  console.log(csv);
        // var s=fs.createReadStream(csv);

        //  s.on('close', function () {
        //the one did not get called
        //console.error('end');
        //  next();
        //  });
        //  s.pipe(parser);
        // next();
    });
});
