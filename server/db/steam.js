const connection = require('./connection')

function getSteamId(db = connection) {
  return db('ids')
  .select()
}

// based on user input, it will send a query to steam api 
