const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = require('express').Router();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

//GET    /api/products
router.get('/products', async (req, res) => {
  //GET all the books
  const products = await prisma.product.findMany();
  res.json(products);
});

module.exports = router;
