import { getAll, create, update, remove } from '../services/products.service.js';

export async function list(req, res, next){
  try {
    const { section, category } = req.query;
    res.json(await getAll({ section, category }));
  } catch (e) { next(e); }
}

export async function createOne(req, res, next){
  try { res.status(201).json(await create(req.body)); }
  catch (e) { next(e); }
}

export async function updateOne(req, res, next){
  try { res.json(await update(req.params.id, req.body)); }
  catch (e) { next(e); }
}

export async function deleteOne(req, res, next){
  try { res.json(await remove(req.params.id)); }
  catch (e) { next(e); }
}