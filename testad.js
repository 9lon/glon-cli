var ActiveDirectory = require('activedirectory');
var config = { url: 'ldap://bkk01.ad.kmutnb.ac.th',
               baseDN: 'cn=sso,ou=Users,dc=ad,dc=kmutnb,dc=ac,dc=th',
               username: 'ssoDemoTest',
               password: 'ssoDemoTest8421!' }
var ad = new ActiveDirectory(config);

var username = 'ssoDemoTest';
var password = 'ssoDemoTest8421!';

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
  
  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});