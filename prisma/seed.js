const { PrismaClient } = require('@prisma/client');

const productData = require('./products.js');
const users = require('./user');
const orders = require('./order');
const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (const product of productData) {
    const eachProduct = await prisma.product.create({
      data: product,
    });
  }

  for (const user of users) {
    const eachUser = await prisma.user.create({
      data: user,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
