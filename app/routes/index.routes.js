module.exports=function(app){
    var index=require('../controllers/index.controller');
    app.get('/',index.index);
    app.get('/db',index.db);
     app.get('/info',index.info);
    app.get('/report',index.report);
     app.get('/push',index.push);
      app.get('/sha1',index.sha1);

    app.get('/xxxx', (req, res) => {
        var stream = res.push('/main.js', {
            status: 200, // optional
            method: 'GET', // optional
            request: {
                accept: '*/*'
            },
            response: {
                'content-type': 'application/javascript'
            }
        });

        stream.on('error', function() {
        });

        stream.end('alert("hello from push stream! '+req.httpVersion+'");')
            res.end('<script src="/main.js"></script>')
        });
    
}