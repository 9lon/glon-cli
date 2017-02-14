
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


var logger = require('winston');
var now = new Date();
var logger_f="L"+now.getFullYear() + now.getMonth()+ now.getDate();
const work_dir=process.cwd();
logger.configure({
    transports: [
      new (logger.transports.Console)(),
      new (logger.transports.File)({ filename: work_dir+'/loggers/'+logger_f+".log" })
    ]
});

exports.logger=logger;