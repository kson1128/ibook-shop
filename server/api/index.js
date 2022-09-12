const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = require('express').Router();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
// GET    api/products
router.get('/allProducts/', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// GET    /products/:id
router.get('/allProducts/:id', async (req, res) => {
  const { id } = req.params;
  console.log('THE ID IS--', req);
  const book = await prisma.product.findUnique({
    where: { id: Number(id) },
  });
  res.json(book);
});

module.exports = router;

// const router = require('express').Router();

// // router.use('/users', require('./users'));
// // router.use('/products', require('./products'));
// // router.use('/cart', require('./cart'));
// // router.use('/order', require('./orders'));

// router.use((req, res, next) => {
//   const error = new Error('API route not found!');
//   error.status = 404;
//   next(error);
// });

// module.exports = router;
