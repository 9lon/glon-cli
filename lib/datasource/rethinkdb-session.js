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

var rethinkdb = require('rethinkdbdash');
var cache = require('memory-cache');

module.exports = function (session) {
  var Store = session.Store;

  function RethinkStore(options) {
    options = options || {};
    options.connectOptions = options.connectOptions || {};

    Store.call(this, options);
  

    r = options.connection || new rethinkdb(options.connectOptions);

    this.emit('connect');
    this.sessionTimeout = options.sessionTimeout || 86400000; // 1 day
    this.db = options.db || 'oauth';
    this.table = options.table || 'session';
    this.debug = options.debug || false;
    setInterval( function() {
      try {
        r.db(this.db).table(this.table).filter( r.row('expires').lt(r.now().toEpochTime().mul(1000)) ).delete().run(function(err, user) {
          return null;
        });
      }
      catch (error) {
        console.error( error );
        return null;
      }
    }.bind( this ), options.flushInterval || 60000 );
  }

  RethinkStore.prototype = new Store();

  // Get Session
  RethinkStore.prototype.get = function (sid, fn) {
    var sdata = cache.get('sess-'+sid);
    if (sdata) {
      if( this.debug ){ console.log( 'SESSION: (get)', JSON.parse(sdata.session) ) };
      return fn(null, JSON.parse(sdata.session));
    } else {
        r.db(this.db).table(this.table).get(sid).run().then(function (data) {
          return fn(null, data ? JSON.parse(data.session) : null);
        }).error(function (err) {
          return fn(err);
        });
    }
  };

  // Set Session
  RethinkStore.prototype.set = function (sid, sess, fn) {
    var sessionToStore = {
      id: sid,
      expires: new Date().getTime() + (sess.cookie.originalMaxAge || this.sessionTimeout),
      session: JSON.stringify(sess)
    };

    r.db(this.db).table(this.table).insert(sessionToStore, { conflict: 'replace', returnChanges: true }).run().then(function (data) {
      var sdata = null;
      if(data.changes[0] != null)
        sdata = data.changes[0].new_val || null;

      if (sdata){
          if (this.debug){ console.log( 'SESSION: (set)', sdata.id ); }
          cache.put( 'sess-'+ sdata.id, sdata, 30000 );
      }
      if (typeof fn === 'function') {
        return fn();
      }
      else
        return null
    }).error(function (err) {
      return fn(err);
    });
  };

  // Destroy Session
  RethinkStore.prototype.destroy = function (sid, fn) {
    if (this.debug){ console.log( 'SESSION: (destroy)', sid ); }
    cache.del('sess-'+sid);
    r.db(this.db).table(this.table).get(sid).delete().run().then(function (data) {
      if (typeof fn === 'function'){
        return fn();
      }
      else return null;
    }).error(function (err) {
      return fn(err);
    });
  };

  return RethinkStore;
};