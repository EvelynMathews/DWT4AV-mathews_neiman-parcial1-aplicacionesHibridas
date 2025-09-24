import { Router } from 'express';
import { createOne, list, listProducts } from '../controllers/customers.controller.js';

const r = Router();

r.post('/', createOne);
r.get('/', list);
r.get('/:id/products', listProducts);

export default r;