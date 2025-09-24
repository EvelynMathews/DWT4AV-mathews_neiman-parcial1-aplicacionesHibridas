import { MongoClient } from 'mongodb';
import 'dotenv/config';

let dbInstance;

export async function getDb() {
  if (!dbInstance) {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    dbInstance = client.db(process.env.DB_NAME);
  }
  return dbInstance;
}