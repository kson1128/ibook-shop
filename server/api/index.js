const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = require('express').Router();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
// GET    api/products
router.get('/allProducts/', async (req, res) => {
  // const products = await prisma.product.findMany();
  // console.log('prods-', products);
  const products = await prisma.product.findMany();
  console.log(products);
  res.json(products);
});

// GET    /products/:id
router.get('/allProducts/:id', async (req, res) => {
  const { id } = req.params;

  const book = await prisma.product.findUnique({
    where: { id: Number(id) },
  });
  res.json(book);
});

module.exports = router;
