const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const database = 'blog';
const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('users');

}

module.exports = dbconnect;