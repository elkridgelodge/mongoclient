connection = 'meteor'
hosts = ['127.0.0.1:27017']
database = 'meteor'

rootfile = '/path/to/file'

coll = 'todos'

pattern = {}

output = function(results) {
  results.map( r => console.log(r._id) )
}

returnoutput = function(results) {
  return results.length
}

