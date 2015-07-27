"use strict";

const assert = require("assert")
// const fs         = require("fs")

const fs         = require("fs")
const INITAL_DIR = './.data'
class Initializer {
  constructor(dir) {
    this.dir = dir || INITAL_DIR
  }

  initialize(){
    try {
      fs.mkdirSync(this.dir)
    } catch (e) {}
    return true
  }
}

let initializer = new Initializer()
try {
  fs.unlinkSync(initializer.dir)
} catch(e) {}
initializer.initialize()
assert(fs.statSync(initializer.dir).isDirectory() === true, 'creates dir if not there')
initializer.initialize()
assert(fs.statSync(initializer.dir).isDirectory() === true, 'can be initialized if dir is there')
