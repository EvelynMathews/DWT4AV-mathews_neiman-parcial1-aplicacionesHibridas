import { getAll, create, update, remove } from '../services/products.service.js';

export async function list(req, res, next){
  try {
    const { section, category } = req.query;
    const products = await getAll({ section, category });
    res.status(200).json(products);
  } catch (e) { next(e); }
}

export async function createOne(req, res, next){
  try { res.status(201).json(await create(req.body)); }
  catch (e) { next(e); }
}

export async function updateOne(req, res, next){
  try {
    const updatedProduct = await update(req.params.id, req.body);
    res.status(200).json(updatedProduct);
  }
  catch (e) { next(e); }
}

export async function deleteOne(req, res, next){
  try {
    await remove(req.params.id);
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  }
  catch (e) { next(e); }
}