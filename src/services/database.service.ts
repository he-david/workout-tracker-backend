import { MongoClient, Collection, Db } from 'mongodb';
import dotenv from 'dotenv';

export const collections: { workout?: Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const client = new MongoClient(process.env.MONGODB_URI!);
  const db: Db = client.db(process.env.DB_NAME);
  collections.workout = db.collection(process.env.COLLECTION_NAME!);

  console.log('Sucessfully connected to the database.');
}
