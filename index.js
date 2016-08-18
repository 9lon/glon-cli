#!/usr/bin/env node
 
/**
 * Module dependencies.
 */

var program = require('commander');
var rest = require("./restclient.js");

function init(){
   rest.restJson("https://api.github.com/repos/9lon/gl-form-label/releases/latest",
    function(data){
      rest.restDownload(
        data.tarball_url,
        function(){
          console.log("ok");
        })
    }
  );
 /* download(
    function (jsonp){
      var xss="http://www.codeunbug.com/cc.tar.gz";
      console.log( url.parse(xss).host);
      console.log(url.parse(xss).pathname);
     //  var output = fs.createWriteStream("output/cc.tar");
       http.get({
          host:  url.parse(xss).host,
          path: url.parse(xss).pathname,
          headers: {
              'User-Agent': 'Awesome-Octocat-App'
          }
        }, function(response) {
          response.pipe(zlib.createGunzip()).pipe(tar.Extract());
      });
    }
);*/
 
  

}



//function download(callback){
  /*return https.get({
        host: 'api.github.com',
        path: '/repos/9lon/gl-form-label/releases/latest',
        headers: {
            'User-Agent': 'Awesome-Octocat-App'
        }
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            callback(parsed);
        });
    });*/
//}




program
  .version('1.0.4')
  .option('-i, --init', 'Add peppers',init)
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
 
console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);