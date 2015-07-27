"use strict";

const assert      = require("assert")
const fs          = require("fs")
const Connection  = require(__dirname + "/../../lib/connection")

let connection = new Connection('test/.data')
try {
  fs.unlinkSync(connection.dir)
} catch(e) {}
connection._initialize()
assert(fs.statSync(connection.dir).isDirectory() === true, 'creates dir if not there')
assert(fs.statSync(connection.dir+'/users').isDirectory() === true, 'creates dir if not there')
assert(fs.statSync(connection.dir+'/subscribers').isDirectory() === true, 'creates dir if not there')
connection._initialize()
assert(fs.statSync(connection.dir).isDirectory() === true, 'can be initialized if dir is there')
