import { Router } from 'express';
import { list, createOne, updateOne, deleteOne } from '../controllers/products.controller.js';

const r = Router();

r.get('/', list);
r.post('/', createOne);
r.put('/:id', updateOne);
r.delete('/:id', deleteOne);

export default r;