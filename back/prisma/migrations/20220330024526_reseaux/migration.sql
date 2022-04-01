-- CreateTable
CREATE TABLE "Reseaux" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workColleagueId" TEXT NOT NULL,

    CONSTRAINT "Reseaux_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reseaux_userId_workColleagueId_key" ON "Reseaux"("userId", "workColleagueId");

-- AddForeignKey
ALTER TABLE "Reseaux" ADD CONSTRAINT "Reseaux_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseaux" ADD CONSTRAINT "Reseaux_workColleagueId_fkey" FOREIGN KEY ("workColleagueId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
