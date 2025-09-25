import { getHouses } from '../services/houses.service.js';

export async function list(req, res, next){
  try {
    const houses = await getHouses();
    res.status(200).json(houses);
  }
  catch (e) { next(e); }
}