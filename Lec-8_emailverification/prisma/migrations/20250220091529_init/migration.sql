-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isverify" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "token" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);
