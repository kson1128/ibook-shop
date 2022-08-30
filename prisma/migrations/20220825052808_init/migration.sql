-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_id_fkey";

-- DropIndex
DROP INDEX "Order_userId_key";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
