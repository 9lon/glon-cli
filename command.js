#!/usr/bin/env node

 
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

var program = require('commander');

function app_init(){
  var init=require('./lib/bin/init');
  init.create(__dirname);
}

function app_server(){
  var server=require('./lib/bin/server');
  console.log("nylon-dir::"+__dirname);
  server.serve(__dirname);
}

program
  .version('1.3.3')
  .option('-i, init', 'init project',app_init)
  .option('-s, serve', 'start nylon server',app_server)
  .parse(process.argv);
 
