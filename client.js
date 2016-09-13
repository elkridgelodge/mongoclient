'use strict'

var config = require('./config')

var Mongo = require('poseidon-mongo')
var Driver = new Mongo.Driver()
var Database = Mongo.Database
var fs = require('fs')

Driver.configure(connection, { hosts: hosts, database: database })

var client = new Database(Driver, database)

fs.readFile(file, 'utf8',
  function (err, data) {
    if (err) {
      console.log("could not read file")
    }
    console.log(data)
  }
)

function step(p, o) {
  client.collection(coll)
  .then(function(collection){
    return collection.find(p)
  }).then(function (cursor) {
    return cursor.toArray()
  }).then(function (results) {
    o(results)
  }).finally(function () {
    client.close()
  }).done()
}

step(pattern, operation)
