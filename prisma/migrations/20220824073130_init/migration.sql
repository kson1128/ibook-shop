/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_userId_key" ON "Order"("userId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
