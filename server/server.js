const express = require('express');
const next = require('next');
const { PrismaClient } = require('@prisma/client');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const prisma = new PrismaClient();

const server = express();
server.use(express.json());

//middleware
// express.use(bodyParser.json());
// express.use(bodyParser.urlencoded({ extended: false }));
// express.use(favicon(path.join(__dirname, '..', 'public', 'favicon.png')));

// auth and api routes

// server.use('/api', require('./api'));

// app.prepare().then(() => {
//   const server = express();

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   });
// });

//GET    api/products
server.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

server.listen(3000, err => {
  if (err) throw err;
  console.log('Ready on http://localhost:3000');
});

module.exports = server;
