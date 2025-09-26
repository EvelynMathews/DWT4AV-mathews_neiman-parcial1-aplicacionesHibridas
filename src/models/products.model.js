import { ObjectId } from 'mongodb';
import { getDb } from '../db/mongo.js';

export async function listProducts({ section, category }) {
  const db = await getDb();
  const q = {};
  if (section) q.section = section;
  if (category) {
    const escapedCategory = category.replace(/[aáàäâ]/gi, '[aáàäâ]')
                                   .replace(/[eéèëê]/gi, '[eéèëê]')
                                   .replace(/[iíìïî]/gi, '[iíìïî]')
                                   .replace(/[oóòöô]/gi, '[oóòöô]')
                                   .replace(/[uúùüû]/gi, '[uúùüû]');

    if (section === 'books') {
      q.$or = [
        { category: { $regex: escapedCategory, $options: 'i' } },
        { name: { $regex: escapedCategory, $options: 'i' } }
      ];
    } else {
      q.category = { $regex: escapedCategory, $options: 'i' };
    }
  }
  return db.collection('Products').find(q).toArray();
}

export async function getProductById(id) {
  const db = await getDb();
  return db.collection('Products').findOne({ _id: new ObjectId(id) });
}

export async function createProduct(doc) {
  const db = await getDb();
  const { insertedId } = await db.collection('Products').insertOne(doc);
  return { _id: insertedId, ...doc };
}

export async function updateProduct(id, patch) {
  const db = await getDb();
  await db.collection('Products').updateOne(
    { _id: new ObjectId(id) },
    { $set: patch }
  );
  return db.collection('Products').findOne({ _id: new ObjectId(id) });
}

export async function deleteProduct(id) {
  const db = await getDb();
  const res = await db.collection('Products').deleteOne({ _id: new ObjectId(id) });
  return res.deletedCount === 1;
}
