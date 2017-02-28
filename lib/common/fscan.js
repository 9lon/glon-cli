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

var fs=require('fs');
var async = require('async');

var scan = function(dir, suffix,fullpath, callback) {


  fs.readdir(dir, function(err, files) {
    var returnFiles = [];
    async.each(files, function(file, next) {
      var filePath = dir + '/' + file;
      fs.stat(filePath, function(err, stat) {
        if (err) {
           next();
        }
        if (stat.isDirectory()) {
          scan(filePath, suffix,fullpath, function(err, results) {
            if (err) {
               
               next();
            }
            returnFiles = returnFiles.concat(results);
            next();
          })
        }
        else if (stat.isFile()) {
          if (file.indexOf(suffix, file.length - suffix.length) !== -1) {
            if(fullpath){
              returnFiles.push(filePath);
            }else{
              returnFiles.push(file);
            }
          }
          next();
        }
      });
    }, function(err) {
      callback(err, returnFiles);
    });
  });
};

exports.scan=scan;