/*
  Warnings:

  - You are about to drop the column `Commution` on the `bets` table. All the data in the column will be lost.
  - Added the required column `commution` to the `bets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bets" DROP COLUMN "Commution",
ADD COLUMN     "commution" DECIMAL(65,30) NOT NULL;
