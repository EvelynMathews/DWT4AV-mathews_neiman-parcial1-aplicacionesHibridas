import * as Customers from '../models/customers.model.js';

export async function create(data){
  if(!data.name || !data.photo || !data.description) {
    throw Object.assign(new Error('name, photo y description son requeridos'), { status: 400 });
  }
  return await Customers.createCustomer(data);
}

export async function getAll() {
  return await Customers.listCustomers();
}

export async function getProducts(customerId) {
  return await Customers.listProductsByCustomerId(customerId);
}