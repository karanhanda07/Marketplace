const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://karanhanda40:KaranHanda@marketplace.hxa4bzw.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;
