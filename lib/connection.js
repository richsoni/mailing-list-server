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
    try {
      fs.mkdirSync(this.usersDir())
    } catch (e) {}
    try {
      fs.mkdirSync(this.dir + '/subscribers')
    } catch (e) {}
    return true
  }

  _createUser(email) {
    fs.writeFileSync(this.usersDir(email), '{}')
  }

  addUser(email) {
    if(this.userExists(email)){
      return true;
    } else {
      return this._createUser(email)
    }
  }

  usersDir(email) {
    const base = this.dir + '/users'
    if(email){
      return base + '/' + email
    } else {
      return base
    }
  }

  userExists(email){
    try {
      return fs.statSync(this.usersDir(email)).isFile()
    } catch (e) {
      return false;
    }
  }

  removeUser(email) {
    if(this.userExists(email)){
      fs.unlinkSync(this.usersDir(email))
    }
    return true
  }
}

module.exports = Connection
