import { create, getAll, getProducts } from '../services/customers.service.js';

export async function createOne(req, res, next){
  try { res.status(201).json(await create(req.body)); }
  catch (e) { next(e); }
}

export async function list(req, res, next){
  try {
    const customers = await getAll();
    res.status(200).json(customers);
  }
  catch (e) { next(e); }
}

export async function listProducts(req, res, next){
  try {
    const products = await getProducts(req.params.id);
    res.status(200).json(products);
  }
  catch (e) { next(e); }
}