-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMPLETE', 'INCOMPLETE');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "defaultValue" TEXT NOT NULL DEFAULT 'INCOMPLETE',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
