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

var morgan=require('morgan');
var compression=require('compression');

module.exports=function(app){
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }else{
         app.use(compression());
    }

}