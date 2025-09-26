import { create, getAll, getProducts, addProduct } from '../services/customers.service.js';

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

export async function buyProduct(req, res, next){
  try {
    const customer = await addProduct(req.params.id, req.params.productId);
    res.status(200).json(customer);
  }
  catch (e) { next(e); }
}