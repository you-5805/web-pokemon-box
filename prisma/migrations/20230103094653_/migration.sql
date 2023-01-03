/*
  Warnings:

  - You are about to drop the column `createdAt` on the `anonymous_users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `anonymous_users` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `anonymous_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anonymous_users` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `parties` (
    `id` VARCHAR(191) NOT NULL,
    `anon_user_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `publicity` ENUM('PUBLIC', 'PRIVATE') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pokemons` (
    `id` VARCHAR(191) NOT NULL,
    `pokedex_entry_id` VARCHAR(191) NOT NULL,
    `individual_value_h` INTEGER NOT NULL,
    `individual_value_a` INTEGER NOT NULL,
    `individual_value_b` INTEGER NOT NULL,
    `individual_value_c` INTEGER NOT NULL,
    `individual_value_d` INTEGER NOT NULL,
    `individual_value_s` INTEGER NOT NULL,
    `effort_value_h` INTEGER NOT NULL,
    `effort_value_a` INTEGER NOT NULL,
    `effort_value_b` INTEGER NOT NULL,
    `effort_value_c` INTEGER NOT NULL,
    `effort_value_d` INTEGER NOT NULL,
    `effort_value_s` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `parties` ADD CONSTRAINT `parties_anon_user_id_fkey` FOREIGN KEY (`anon_user_id`) REFERENCES `anonymous_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pokemons` ADD CONSTRAINT `pokemons_pokedex_entry_id_fkey` FOREIGN KEY (`pokedex_entry_id`) REFERENCES `pokedex_entries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
