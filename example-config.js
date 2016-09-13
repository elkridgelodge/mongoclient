connection = 'meteor'
hosts = ['127.0.0.1:27017']
database = 'meteor'

file = '/path/to/file'

coll = 'todos'

pattern = {}

operation = function(results) {
  results.map( r => console.log(r._id) )
}
