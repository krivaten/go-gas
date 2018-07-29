import { MongoClient } from 'mongodb';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const uri = process.env.DB_URI;

export function handler(event, context, callback) {
  MongoClient.connect(uri, (connectErr, connectClient) => {
    const db = connectClient.db('krivaten-api');
    const collection = db.collection('users');
    collection.find().toArray((reqErr, response) => {
      callback(reqErr, {
        statusCode: 200,
        body: JSON.stringify(response)
      });
    })
 });
}