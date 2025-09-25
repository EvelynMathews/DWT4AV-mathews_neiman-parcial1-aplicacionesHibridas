# PotterCraft - Taller de Personalización Mágica

Tienda de productos personalizados de Harry Potter. Los usuarios pueden explorar diferentes categorías de productos  y personalizar según sus necesidades.

- Puerto: **3333**
- DB: **AH20232CP1** (MongoDB Atlas)
- Colecciones: **Products**, **Customers**
- Arquitectura: **MVC** con división de responsabilidades
- ESM + Express + Driver nativo MongoDB + Bootstrap 5

## Scripts
- `npm run dev` — levanta servidor en localhost:3333
- `npm start` — inicia servidor en producción

## API Endpoints

### Products (Productos personalizables)
- `GET /api/products` — todos los productos
- `GET /api/products?section=clothing` — filtrar por sección
- `GET /api/products?section=books&category=piedra` — filtrar por sección y categoría
- `POST /api/products` — crear producto
- `PUT /api/products/:id` — actualizar producto
- `DELETE /api/products/:id` — eliminar producto

### Customers (Clientes del taller)
- `POST /api/customers` — crear cliente
- `GET /api/customers` — listar todos los clientes
- `GET /api/customers/:id/products` — productos de un cliente específico

### Houses (Casas de Hogwarts)
- `GET /api/houses` — información de las 4 casas (desde JSON local)

## Páginas Web

- **`/`** — página principal con hero banner y categorías
- **`/section.html?section=clothing`** — productos filtrados por categoría
- **`/houses.html`** — información detallada de las casas de Hogwarts

## Categorías de Productos

- **Ropa** (clothing): Prendas oficiales de las casas
- **Accesorios** (accessories): Varitas, llaveros, objetos mágicos
- **Libros** (books): Ediciones especiales de la saga
- **Coleccionables** (collectibles): Artículos exclusivos
- **Comestibles** (food): Grajeas, ranas de chocolate, cerveza de mantequilla

## Características Técnicas

### Frontend
- **Responsive Design** con Bootstrap 5
- **Fuente personalizada** Harry Potter (HARRYP__.TTF)
- **Favicons** completos para todos los dispositivos
- **JavaScript modular** en archivos externos
- **Efectos parallax** y animaciones CSS

### Backend
- **Validación robusta** de datos de entrada
- **Códigos HTTP apropiados** (200, 201, 400, 404)
- **Arquitectura MVC**: Routes → Controllers → Services → Models
- **Driver nativo MongoDB** sin ODM
- **Manejo de errores** centralizado

### Base de Datos
- **MongoDB Atlas** en la nube
- **Colecciones**: Products, Customers
- **Relación**: Products tienen customerId opcional
- **Validación** de tipos y formatos

## Variables de Entorno

```env
PORT=3333
MONGO_URI=mongodb+srv://user:pass@cluster0.xyz.mongodb.net/?retryWrites=true&w=majority
DB_NAME=AH20232CP1
```

## Instalación

```bash
npm install
npm run dev
```

El servidor estará disponible en `http://localhost:3333`