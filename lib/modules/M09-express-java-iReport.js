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
var stream = require('stream');
const java = require('java');

module.exports=function(callback,app){
    app.use(function(req,res,next){
         res.ireport=function(reportName,type,datas,parameters){
            var iReport=java.import("nylon.report.iReport");
            reportName=work_dir+"/app/reports/"+reportName;
            var rp=new iReport();
            if(parameters){
                parameters["SUBREPORT_DIR"]=work_dir+"/app/reports/";
                //parameters["REPORT_LOCALE"]="th-TH";
               // parameters["REPORT_TIME_ZONE"]="asia/bangkok";
                
            }else{
                parameters={
                    "SUBREPORT_DIR":work_dir+"/app/reports/"
                    //"REPORT_TIME_ZONE":"asia/bangkok",
                   // "REPORT_LOCALE":"th-TH"
                };
            }


            rp.export(reportName,type,JSON.stringify(datas),JSON.stringify(parameters),
                function(err,buff){
                    var buffer= Buffer.from(buff, "hex");
                    res.responseFile(buffer,type);
                }
            );
        }

        res.responseFile=function(buffer,type){
               var bufferStream = new stream.PassThrough();
               bufferStream.end( buffer );
               this.setHeader('Content-Length', buffer.length);
               var fname=req._guid();
               if(type=="pdf"){
                   this.setHeader('Content-Type', 'application/pdf');
               }else if(type=='excel'){
                   this.setHeader('Content-Type', 'application/octet-stream');
                   this.setHeader('Content-Disposition', 'attachment; filename='+fname+'.xlsx');
               }else if(type=='word'){
                   this.setHeader('Content-Type', 'application/octet-stream');
                   this.setHeader('Content-Disposition', 'attachment; filename='+fname+'.docx');
               }
               else if(type=='csv'){
                   this.setHeader('Content-Type', 'application/octet-stream');
                   this.setHeader('Content-Disposition', 'attachment; filename='+fname+'.csv');
            
               } else if(type=='html'){
                   this.setHeader('Content-Type', 'text/html');
                  // this.setHeader('Content-Disposition', 'attachment; filename='+fname+'.csv');
            
               } else if(type=='xml'){
                   this.setHeader('Content-Type', 'application/octet-stream');
                   this.setHeader('Content-Disposition', 'attachment; filename='+fname+'.xml');
            
               }
               else{
                   this.setHeader('Content-Type', 'application/pdf');
                   this.setHeader('Content-Disposition', 'attachment; filename='+fname+'.pdf');
               }
              bufferStream.pipe(this);
        }

        req._guid=function() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
                }
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
       }

       next();
    
    });

    callback();

}