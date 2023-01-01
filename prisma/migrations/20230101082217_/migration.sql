-- CreateTable
CREATE TABLE `pokemons` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `global_number` INTEGER NULL,
    `gen_1_number` INTEGER NULL,
    `gen_2_number` INTEGER NULL,
    `gen_3_number` INTEGER NULL,
    `gen_4_number` INTEGER NULL,
    `gen_5_number` INTEGER NULL,
    `gen_6_number` INTEGER NULL,
    `gen_7_number` INTEGER NULL,
    `gen_8_number` INTEGER NULL,
    `gen_9_number` INTEGER NULL,
    `status_h` INTEGER NOT NULL,
    `status_a` INTEGER NOT NULL,
    `status_b` INTEGER NOT NULL,
    `status_c` INTEGER NOT NULL,
    `status_d` INTEGER NOT NULL,
    `status_s` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
