# HP Merchandising Store – Parcial Apps Híbridas

- Puerto: **3333**
- DB: **AH20232CP1**
- Colecciones: **Products**, **Customers**
- Imágenes: **URLs** (ej. https://picsum.photos/)
- ESM + Express + Driver nativo MongoDB

## Scripts
- `npm run dev` — levanta servidor en localhost:3333
- `npm run seed` — inserta datos de ejemplo en Mongo

## Endpoints
- Products:
  - GET `/api/products?section=...&material=...`
  - POST `/api/products`
  - PUT `/api/products/:id`
  - DELETE `/api/products/:id`
- Customers:
  - POST `/api/customers`
  - GET `/api/customers`
  - GET `/api/customers/:id/products`
- Houses (JSON local):
  - GET `/api/houses`

## Páginas
- `/` menú principal de categorías
- `/section.html?section=clothing` lista productos por categoría
- `/houses.html` muestra casas de HP (desde JSON local)

## Categorías de Productos
- **Ropa** (clothing): Camisetas, bufandas, etc.
- **Accesorios** (accessories): Varitas, collares, etc.
- **Libros** (books): Libros de Harry Potter
- **Coleccionables** (collectibles): Snitch dorada, figuras, etc.
- **Hogar** (home): Lámparas, decoración, etc.

## .env (ejemplo)

```
PORT=3333
MONGO_URI=mongodb://localhost:27017
DB_NAME=AH20232CP1
```