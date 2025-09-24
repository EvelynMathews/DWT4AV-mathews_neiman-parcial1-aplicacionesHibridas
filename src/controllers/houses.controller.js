import { getHouses } from '../services/houses.service.js';

export async function list(req, res, next){
  try { res.json(await getHouses()); }
  catch (e) { next(e); }
}