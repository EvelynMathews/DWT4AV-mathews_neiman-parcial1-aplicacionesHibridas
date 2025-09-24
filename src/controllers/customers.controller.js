import { create, getAll, getProducts } from '../services/customers.service.js';

export async function createOne(req, res, next){
  try { res.status(201).json(await create(req.body)); }
  catch (e) { next(e); }
}

export async function list(req, res, next){
  try { res.json(await getAll()); }
  catch (e) { next(e); }
}

export async function listProducts(req, res, next){
  try { res.json(await getProducts(req.params.id)); }
  catch (e) { next(e); }
}