"use strict";
const fs         = require("fs")
const INITAL_DIR = './.data'

class Connection {
  constructor(dir) {
    this.dir = dir || INITAL_DIR
    this._initialize()
  }

  _initialize(){
    try {
      fs.mkdirSync(this.dir)
    } catch (e) {}
    return true
  }
}

module.exports = Connection
