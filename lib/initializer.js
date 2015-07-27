"use strict";
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

module.exports = Initializer
