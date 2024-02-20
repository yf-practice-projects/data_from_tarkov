-- CreateTable
CREATE TABLE "Ammo" (
    "type" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "damage" INTEGER NOT NULL,
    "penetration" INTEGER NOT NULL,

    CONSTRAINT "Ammo_pkey" PRIMARY KEY ("type")
);
