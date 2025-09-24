import express from 'express';
import 'dotenv/config';

import productsRoutes from './routes/products.routes.js';
import customersRoutes from './routes/customers.routes.js';
import housesRoutes from './routes/houses.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

app.use('/api/products', productsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/houses', housesRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Error' });
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`http://localhost:${process.env.PORT || 3333}`);
});