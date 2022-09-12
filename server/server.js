const express = require('express');
const next = require('next');
const { PrismaClient } = require('@prisma/client');
const morgan = require('morgan');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const prisma = new PrismaClient();

const server = express();
server.use(express.json());

server.use('/api', require('./api'));
// logging middleware
server.use(morgan('dev'));

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
// server.get('/api/allProducts', async (req, res) => {
//   const products = await prisma.product.findMany();
//   res.json(products);
// });

//GET    /products/:id
// server.get('api/allProducts/:id', async (req, res) => {
//   const { id } = req.params;
//   console.log('THE ID IS--', id);
//   const book = await prisma.product.findUnique({
//     where: { id: Number(id) },
//   });
//   res.json(book);
// });

server.listen(8000, err => {
  if (err) throw err;
  console.log('Ready on http://localhost:8000');
});

module.exports = server;
