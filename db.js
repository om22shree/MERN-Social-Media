const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://om:2002@cluster0.dfvvi.mongodb.net/ComplexApp?retryWrites=true&w=majority"
);

async function start() {
  await client.connect();
  module.exports = client.db();
  const app = require("./app");
  app.listen(3000);
}

start();
