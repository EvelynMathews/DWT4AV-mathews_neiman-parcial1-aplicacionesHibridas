import * as Customers from '../models/customers.model.js';
import * as Products from '../models/products.model.js';

export async function create(data){
  if(!data.name || !data.photo || !data.description) {
    throw Object.assign(new Error('name, photo y description son requeridos'), { status: 400 });
  }

  if(typeof data.name !== 'string' || data.name.trim() === '') {
    throw Object.assign(new Error('name debe ser un texto válido'), { status: 400 });
  }

  if(typeof data.photo !== 'string' || !data.photo.startsWith('http')) {
    throw Object.assign(new Error('photo debe ser una URL válida'), { status: 400 });
  }

  if(typeof data.description !== 'string' || data.description.trim() === '') {
    throw Object.assign(new Error('description debe ser un texto válido'), { status: 400 });
  }

  return await Customers.createCustomer(data);
}

export async function getAll() {
  return await Customers.listCustomers();
}

export async function getProducts(customerId) {
  return await Customers.listProductsByCustomerId(customerId);
}

export async function addProduct(customerId, productId){
 const product = await Products.getProductById(productId)
 await Customers.addProductToCustomer(customerId, product);
 return product;
}