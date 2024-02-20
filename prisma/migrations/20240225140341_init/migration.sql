/*
  Warnings:

  - The primary key for the `Ammo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Ammo" DROP CONSTRAINT "Ammo_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Ammo_pkey" PRIMARY KEY ("id");
