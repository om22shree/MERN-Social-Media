const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://username:password@cluster0.dfvvi.mongodb.net/TodoApp?retryWrites=true&w=majority')

async function start() {
  await client.connect()
  module.exports = client.db()
  const app = require('./app')
  app.listen(3000)
}

start()