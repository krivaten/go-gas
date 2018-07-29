import { MongoClient } from 'mongodb';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const URI = process.env.DB_URI;

export const start = async () => {
    const client = await MongoClient.connect(URI);
    const db = client.db('krivaten-api');
    const Users = db.collection('users');
    const Posts = db.collection('posts');
    const Comments = db.collection('comments');

    return {
        Posts,
        Comments,
        Users
    }
}