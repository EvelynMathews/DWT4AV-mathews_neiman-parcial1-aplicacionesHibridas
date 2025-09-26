import * as Model from '../models/products.model.js';

export async function getAll(filters) {
  return await Model.listProducts(filters);
}

export async function create(data){
  if(!data.name || !data.description || !data.img || !data.section || !data.price) {
    throw Object.assign(new Error('name, description, img, section y price son requeridos'), { status: 400 });
  }

  if(typeof data.name !== 'string' || data.name.trim() === '') {
    throw Object.assign(new Error('name debe ser un texto válido'), { status: 400 });
  }

  if(typeof data.description !== 'string' || data.description.trim() === '') {
    throw Object.assign(new Error('description debe ser un texto válido'), { status: 400 });
  }

  if(typeof data.img !== 'string' || !data.img.startsWith('http')) {
    throw Object.assign(new Error('img debe ser una URL válida'), { status: 400 });
  }

  if(typeof data.section !== 'string' || !['clothing', 'accessories', 'books', 'collectibles', 'food'].includes(data.section)) {
    throw Object.assign(new Error('section debe ser: clothing, accessories, books, collectibles o food'), { status: 400 });
  }

  if(typeof data.price !== 'number' || data.price <= 0) {
    throw Object.assign(new Error('price debe ser un número mayor a 0'), { status: 400 });
  }

  if(data.category && typeof data.category !== 'string') {
    throw Object.assign(new Error('category debe ser un texto'), { status: 400 });
  }

  if(data.link && (typeof data.link !== 'string' || !data.link.startsWith('http'))) {
    throw Object.assign(new Error('link debe ser una URL válida'), { status: 400 });
  }

  return await Model.createProduct(data);
}

export async function update(id, patch){
  if(!id) throw Object.assign(new Error('id requerido'), { status: 400 });

  if(Object.keys(patch).length === 0) {
    throw Object.assign(new Error('Debe proporcionar al menos un campo para actualizar'), { status: 400 });
  }

  if(patch.name && (typeof patch.name !== 'string' || patch.name.trim() === '')) {
    throw Object.assign(new Error('name debe ser un texto válido'), { status: 400 });
  }

  if(patch.description && (typeof patch.description !== 'string' || patch.description.trim() === '')) {
    throw Object.assign(new Error('description debe ser un texto válido'), { status: 400 });
  }

  if(patch.price && (typeof patch.price !== 'number' || patch.price <= 0)) {
    throw Object.assign(new Error('price debe ser un número mayor a 0'), { status: 400 });
  }

  if(patch.section && (!['clothing', 'accessories', 'books', 'collectibles', 'food'].includes(patch.section))) {
    throw Object.assign(new Error('section debe ser: clothing, accessories, books, collectibles o food'), { status: 400 });
  }

  const result = await Model.updateProduct(id, patch);
  if(!result) {
    throw Object.assign(new Error('Producto no encontrado'), { status: 404 });
  }
  return result;
}

export async function remove(id){
  if(!id) throw Object.assign(new Error('id requerido'), { status: 400 });
  const ok = await Model.deleteProduct(id);
  if(!ok) throw Object.assign(new Error('No encontrado'), { status: 404 });
  return { ok: true };
}

// Productos por cada cliente 
export async function getClientPurchases() {
  return await Model.getProductsByClients();
}