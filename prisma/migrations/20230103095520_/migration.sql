/*
  Warnings:

  - Added the required column `anon_user_id` to the `pokemons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemons` ADD COLUMN `anon_user_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `mid_party_to_pokemon` (
    `party_id` VARCHAR(191) NOT NULL,
    `pokemonId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`party_id`, `pokemonId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Item_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pokemons` ADD CONSTRAINT `pokemons_anon_user_id_fkey` FOREIGN KEY (`anon_user_id`) REFERENCES `anonymous_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pokemons` ADD CONSTRAINT `pokemons_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mid_party_to_pokemon` ADD CONSTRAINT `mid_party_to_pokemon_party_id_fkey` FOREIGN KEY (`party_id`) REFERENCES `parties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mid_party_to_pokemon` ADD CONSTRAINT `mid_party_to_pokemon_pokemonId_fkey` FOREIGN KEY (`pokemonId`) REFERENCES `pokemons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
