import { Router } from 'express';
import { list } from '../controllers/houses.controller.js';

const r = Router();
r.get('/', list);
export default r;