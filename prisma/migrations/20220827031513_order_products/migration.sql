/*
  Warnings:

  - The values [COMPLETE,INCOMPLETE] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('CART', 'PURCHASED', 'SHIPPED', 'REFUNDED');
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "defaultValue" SET DEFAULT 'CART';

-- CreateTable
CREATE TABLE "OrderProducts" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "subtotal" INTEGER NOT NULL,

    CONSTRAINT "OrderProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderProducts_id_key" ON "OrderProducts"("id");
