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
  const customer = await db.collection('Customers')
           .findOne({ _id: new ObjectId(customerId )});
  return customer?.products || [];
}

export async function addProductToCustomer(customerId, product) {
  const db = await getDb();
  const customer = await db.collection('Customers')
                           .findOneAndUpdate(
                             { _id: new ObjectId(customerId)},
                             { $push: { products: product } },
                             { returnDocument: 'after' }
                            );
  return customer.value?.products || [];
}