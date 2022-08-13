const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

const client = new MongoClient(process.env.CONNECTIONSTRING);

async function start() {
  await client.connect();
  module.exports = client.db();
  const app = require("./app");
  app.listen(3000);
}

start();
