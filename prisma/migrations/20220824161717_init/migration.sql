/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
