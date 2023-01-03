-- CreateTable
CREATE TABLE `pokedex_entries` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `base_name` VARCHAR(191) NOT NULL,
    `variant` VARCHAR(191) NULL,
    `number` INTEGER NOT NULL,
    `status_h` INTEGER NOT NULL,
    `status_a` INTEGER NOT NULL,
    `status_b` INTEGER NOT NULL,
    `status_c` INTEGER NOT NULL,
    `status_d` INTEGER NOT NULL,
    `status_s` INTEGER NOT NULL,
    `status_sum` INTEGER NOT NULL,

    UNIQUE INDEX `pokedex_entries_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
