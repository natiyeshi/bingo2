/*
  Warnings:

  - Added the required column `totalBet` to the `bets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bets" ADD COLUMN     "totalBet" DECIMAL(65,30) NOT NULL,
ALTER COLUMN "netWinnerGain" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "Commution" SET DATA TYPE DECIMAL(65,30);
