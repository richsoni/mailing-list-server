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

connection.subscribe(email)
assert(connection.userExists(email), 'user exists')
assert(connection.subscriberExists(email), 'user subscribed')

connection.removeUser(email)
assert(!connection.userExists(email), 'user doesnt exist')
assert(!connection.subscriberExists(email), 'user doesnt exist')

connection.subscribe(email)
connection.unsubscribe(email)
assert(connection.userExists(email), 'user exists')
assert(!connection.subscriberExists(email), 'user doesnt exist')
