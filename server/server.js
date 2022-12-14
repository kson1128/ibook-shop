const express = require('express');
const next = require('next');
const { PrismaClient } = require('@prisma/client');
const morgan = require('morgan');
const PORT = process.env.PORT || 8000;

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

server.get('*', (req, res) => {
  return handle(req, res);
});
// });

server.listen(PORT, err => {
  if (err) throw err;
  console.log(`Ready on ${PORT}`);
});

module.exports = server;
