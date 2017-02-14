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

const work_dir=process.cwd();

module.exports=function(app){
    app.set('views',work_dir+'/app/views');
    app.set('view engine','jade');

}