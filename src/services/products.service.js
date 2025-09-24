import * as Model from '../models/products.model.js';

export async function getAll(filters) {
  return await Model.listProducts(filters);
}

export async function create(data){
  if(!data.name || !data.description || !data.img || !data.section || !data.price) {
    throw Object.assign(new Error('name, description, img, section y price son requeridos'), { status: 400 });
  }
  return await Model.createProduct(data);
}

export async function update(id, patch){
  if(!id) throw Object.assign(new Error('id requerido'), { status: 400 });
  return await Model.updateProduct(id, patch);
}

export async function remove(id){
  if(!id) throw Object.assign(new Error('id requerido'), { status: 400 });
  const ok = await Model.deleteProduct(id);
  if(!ok) throw Object.assign(new Error('No encontrado'), { status: 404 });
  return { ok: true };
}