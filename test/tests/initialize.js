"use strict";

const assert      = require("assert")
const fs          = require("fs")
const Initializer = require(__dirname + "/../../lib/initializer")

let initializer = new Initializer('test/.data')
try {
  fs.unlinkSync(initializer.dir)
} catch(e) {}
initializer.initialize()
assert(fs.statSync(initializer.dir).isDirectory() === true, 'creates dir if not there')
initializer.initialize()
assert(fs.statSync(initializer.dir).isDirectory() === true, 'can be initialized if dir is there')
