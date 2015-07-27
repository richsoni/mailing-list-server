"use strict";

const assert      = require("assert")
const Connection  = require(__dirname + "/../../lib/connection")
const fs          = require("fs")

const connection = new Connection(C.TEST_DIR)

let email = 'rich@richsoni.com'
connection.addUser(email)
assert(connection.userExists(email), 'user exists')
connection.addUser(email)
assert(connection.userExists(email), 'user exists')

connection.removeUser(email)
assert(!connection.userExists(email), 'user doesnt exist')
