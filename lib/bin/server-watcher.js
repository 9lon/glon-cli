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

const fs=require('fs');
const cluster = require('cluster');
var logger = require('winston');


const addWatcher=function (path){

     fs.watch(path, {encoding: 'buffer'}, (eventType, filename) => {
            logger.info(filename + " is changed  try to restart server ..");
            if(eventType=='rename'){
                  fs.stat(path +"/"+ filename, function(err, stats) {
                         if (!err) {
                            if(stats.isDirectory()){
                                addWatcher(path+"/"+filename);
                            }
                         }
                  });
            }
            Object.keys(cluster.workers).forEach((id) => {
                cluster.workers[id].process.kill();
            });

    });

    fs.readdir(path, function(err, files) { 
         files.forEach(function(filename) {
                fs.stat(path +"/"+ filename, function(err, stats) {
                    if (!err) {
                        if(stats.isDirectory()){
                            addWatcher(path+"/"+filename);
                        }
                    }
                });
        });
    });
} 

exports.addWatcher=addWatcher;