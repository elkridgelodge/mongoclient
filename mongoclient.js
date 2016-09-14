#!/usr/bin/env node

'use strict'

var config = require('./config')

var program = require('commander')
var Promise = require('bluebird')
var Mongo = require('poseidon-mongo')
var Driver = new Mongo.Driver()
var Database = Mongo.Database
var lineReader = require('line-reader')
var eachLine = Promise.promisify(lineReader.eachLine)
Driver.configure(connection, { hosts: hosts, database: database })

program
    .version('0.0.1')
    .usage('<keywords>')
    .parse(process.argv)

if(!program.args.length) {
    program.help()
}

var client = new Database(Driver, database)

var lineperids = []

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function(data) {
  step(pattern, output, data)
})

function step(p, o, d) {
  eachLine(rootfile, function(line) {
    lineperids.push(line)
  }).then(function() {
    client.collection(coll)
    .then(function(collection){
      return collection.find({_id: {$in: lineperids}})
    }).then(function (cursor) {
      return cursor.toArray()
    }).then(function (results) {
      o(results)
    }).finally(function () {
      client.close()
    }).done()
  })
}

step(pattern, output)
