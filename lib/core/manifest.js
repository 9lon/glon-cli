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
var manifest = JSON.parse(fs.readFileSync(process.cwd() + '/public/manifest.json', 'utf8'));
exports.manifest=manifest;