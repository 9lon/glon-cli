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

var bodyParser=require('body-parser');

module.exports=function(app){
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
}