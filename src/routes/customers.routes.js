import { Router } from 'express';
import { createOne, list, listProducts, buyProduct } from '../controllers/customers.controller.js';

const r = Router();

r.post('/', createOne);
r.get('/', list);
r.get('/:id/products', listProducts);
r.post('/:id/buy/:productId', buyProduct);

export default r;