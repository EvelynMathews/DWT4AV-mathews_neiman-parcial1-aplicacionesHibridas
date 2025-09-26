import { Router } from 'express';
import { list, createOne, updateOne, deleteOne, listClientPurchases } from '../controllers/products.controller.js';

const r = Router();

r.get('/', list);
r.post('/', createOne);
r.put('/:id', updateOne);
r.delete('/:id', deleteOne);
r.get('/client-purchases', listClientPurchases); // Agregamos una ruta de productos por cada cliente

export default r;