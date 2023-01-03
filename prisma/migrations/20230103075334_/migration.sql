/*
  Warnings:

  - Made the column `number` on table `pokemons` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `pokemons` MODIFY `number` INTEGER NOT NULL;
