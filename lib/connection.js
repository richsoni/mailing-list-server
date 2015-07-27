"use strict";
const fs         = require("fs")
const path       = require("path")
const INITAL_DIR = './.data'

class Connection {
  constructor(dir) {
    this.dir = dir || INITAL_DIR
    this._initialize()
  }

  subscribe(email) {
    if(this.addUser(email)){
      this._linkSubscriber(email)
    }
  }

  unsubscribe(email){
    if(this.subscriberExists(email)){
      fs.unlinkSync(this.subscribersPath(email))
    }
    return true
  }

  addUser(email) {
    if(this.userExists(email)){
      return true;
    } else {
      return this._createUser(email)
    }
  }

  subscribersPath(email) {
    const base = path.resolve(this.dir + '/subscribers')
    if(email){
      return base + '/' + email
    } else {
      return base
    }
  }

  usersPath(email) {
    const base = path.resolve(this.dir + '/users')
    if(email){
      return base + '/' + email
    } else {
      return base
    }
  }

  subscriberExists(email){
    try {
      return fs.lstatSync(this.subscribersPath(email)).isSymbolicLink()
    } catch (e) {
      return false;
    }
  }

  userExists(email){
    try {
      return fs.statSync(this.usersPath(email)).isFile()
    } catch (e) {
      return false;
    }
  }

  removeUser(email) {
    if(this.userExists(email)){
      fs.unlinkSync(this.usersPath(email))
    }
    this.unsubscribe(email)
    return true
  }


  _initialize(){
    try {
      fs.mkdirSync(this.dir)
    } catch (e) {}
    try {
      fs.mkdirSync(this.usersPath())
    } catch (e) {}
    try {
      fs.mkdirSync(this.subscribersPath())
    } catch (e) {}
    return true
  }

  _createUser(email) {
    fs.writeFileSync(this.usersPath(email), '')
    return true
  }

  _linkSubscriber(email){
    try {
      let output = fs.symlinkSync(this.usersPath(email), this.subscribersPath(email))
    } catch(e) {
      console.log(e)
    }
    return true
  }

}

module.exports = Connection
