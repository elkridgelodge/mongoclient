var program = require('commander')

connection = 'meteor'
hosts = ['127.0.0.1:27017']
database = 'meteor'

rootfile = '/path/to/file'

coll = 'todos'

pattern = {}

output = function(results) {
  var return_array = new Array()
  results.map( r => return_array.push(r._id) )
    if (!program.thread) {
      console.error(return_array)
      process.exit()
    }
  return JSON.stringify(return_array)
}
