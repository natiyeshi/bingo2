-- CreateTable
CREATE TABLE "bets" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numberOfPlayers" INTEGER NOT NULL,
    "betAmount" INTEGER NOT NULL,
    "netWinnerGain" INTEGER NOT NULL,
    "Commution" INTEGER NOT NULL,
    "currRate" DECIMAL(65,30) NOT NULL,
    "dealerId" TEXT NOT NULL,

    CONSTRAINT "bets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bets" ADD CONSTRAINT "bets_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "dealers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
