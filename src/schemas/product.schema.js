export function validateProductSchema(data) {
  const errors = [];

  const requiredFields = ['name', 'description', 'img', 'section', 'price'];
  for (const field of requiredFields) {
    if (!data[field]) {
      errors.push(`${field} es requerido`);
    }
  }

  const validSections = ['clothing', 'accessories', 'books', 'collectibles', 'food'];
  if (data.section && !validSections.includes(data.section)) {
    errors.push(`section debe ser: ${validSections.join(', ')}`);
  }

  if (data.name && typeof data.name !== 'string') {
    errors.push('name debe ser texto');
  }

  if (data.description && typeof data.description !== 'string') {
    errors.push('description debe ser texto');
  }

  if (data.price && (typeof data.price !== 'number' || data.price <= 0)) {
    errors.push('price debe ser un número mayor a 0');
  }

  if (data.img && (typeof data.img !== 'string' || !data.img.startsWith('http'))) {
    errors.push('img debe ser una URL válida');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}