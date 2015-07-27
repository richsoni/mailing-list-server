"use strict";
var execFile       = require('child_process').execFile;
var TEST_FILES     = '*.js'
var TEST_DIR       = process.env.PWD+'/test/tests'

module.exports = function(files, dir){
  var _files = files || TEST_FILES;
  var _dir       = dir       || TEST_DIR
  execFile('find', [_dir, '-name', _files], function(err, stdout, stderr) {
    stdout
      .split('\n')
      .filter(function(str) { return str !== '' })
      .map(require)
  });
}
