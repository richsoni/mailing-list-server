"use strict";

const assert = require("assert")
// const fs         = require("fs")

const fs         = require("fs")
const INITAL_DIR = './.data'
class Initializer {
  constructor(dir) {
    this.dir = dir || INITAL_DIR
  }

  dirExists(){
    try {
      stats = fs.statSync(this.dir)
    } catch (e) {
      return false
    }
    return true
  }
}

let initializer = new Initializer()
try {
  fs.unlinkSync(initializer.dir)
} catch(e) {}

assert(initializer.dirExists() === false, 'sees no dir')
