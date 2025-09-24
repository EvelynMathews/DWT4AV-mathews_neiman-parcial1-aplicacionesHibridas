import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function getHouses(){
  const p = path.join(__dirname, '../../data/houses.json');
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw);
}