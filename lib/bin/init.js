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

var fs = require('fs-extra')

exports.create= function(path){
    console.log("init project");
    var dirs=["app","config","public","sass","ssl","loggers"];
    dirs.map(function(dir){
        console.log(dir);
        fs.exists(process.cwd()+'/'+dir, function(exists) { 
            if (exists) { 
                    var date=new Date().getTime();
                    fs.rename(process.cwd()+'/'+dir, process.cwd()+'/'+dir+"_"+date, function (err) {
                        fs.copy(path+'/'+dir, process.cwd()+'/'+dir, function (err) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log("success!");
                            }
                        });
                    
                    });
            } else{
                      fs.copy(path+'/'+dir, process.cwd()+'/'+dir, function (err) {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log("success!");
                            }
                        });
            }
        }); 
    });
}