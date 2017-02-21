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

var sass=require('node-sass-middleware');
const work_dir=process.cwd();

module.exports=function(app){
     app.use(sass({
        src:work_dir+'/sass',
        dest:work_dir+'/public/css',
        outputStyle:'compressed',
        prefix:'/css'
    }));

    

}