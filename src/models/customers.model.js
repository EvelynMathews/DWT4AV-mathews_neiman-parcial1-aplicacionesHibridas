import { ObjectId } from 'mongodb';
import { getDb } from '../db/mongo.js';

export async function createCustomer(doc) {
  const db = await getDb();
  const { insertedId } = await db.collection('Customers').insertOne(doc);
  return { _id: insertedId, ...doc };
}

export async function listCustomers() {
  const db = await getDb();
  return db.collection('Customers').find({}).toArray();
}

export async function listProductsByCustomerId(customerId) {
  const db = await getDb();
  return db.collection('Products')
           .find({ customerId: customerId })
           .toArray();
}

