/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY['user']::TEXT[];

-- DropTable
DROP TABLE "Employee";
