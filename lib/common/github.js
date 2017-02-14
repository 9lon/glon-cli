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

var fs = require('fs');
var zlib = require('zlib');
var tar = require("tar");
var https = require('https');
var http = require('http');
var url = require('url');

exports.restDownload = function(uri,callback) {
   //  uri="https://api.github.com/repos/9lon/gl-form-label/tarball";
    var saft=this;
      console.log( url.parse(uri).host);
      console.log(url.parse(uri).pathname);
      https.get({
          host: url.parse(uri).host,
          path: url.parse(uri).pathname,
          headers: {
              'User-Agent': 'Awesome-Octocat-App'
          }
        }, function(response) {
           if(response.statusCode == 200){
              //  var out=fs.createWriteStream("extract/test");
                response.pipe(zlib.createGunzip()).pipe(tar.Extract({path:"extract"}));
           }else if(response.statusCode == 302){
              // console.log( response.statusCode);
               console.log( response.headers.location);
               saft.restDownload(response.headers.location,callback) ;
           }
         
      });
};

exports.restJson = function(uri,callback) {
   
      https.get({
          host: url.parse(uri).host,
          path: url.parse(uri).pathname,
          headers: {
              'User-Agent': 'Awesome-Octocat-App'
          }
        }, function(response) {
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
               // console.log(body);
                var parsed = JSON.parse(body);
                callback(parsed);
            });
      });
};