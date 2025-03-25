/*
  Warnings:

  - You are about to drop the column `order_id` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_order_id_fkey`;

-- DropIndex
DROP INDEX `Product_order_id_fkey` ON `Product`;

-- AlterTable
ALTER TABLE `Ingredients` ADD COLUMN `orderProductId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `order_id`;

-- CreateTable
CREATE TABLE `OrderProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NULL,
    `quantity` INTEGER NOT NULL,
    `image_url` VARCHAR(45) NULL,
    `restaurant_id` INTEGER NOT NULL,
    `product_category_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,

    UNIQUE INDEX `OrderProduct_id_product_category_id_key`(`id`, `product_category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderProduct` ADD CONSTRAINT `OrderProduct_restaurant_id_fkey` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderProduct` ADD CONSTRAINT `OrderProduct_product_category_id_fkey` FOREIGN KEY (`product_category_id`) REFERENCES `ProductCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderProduct` ADD CONSTRAINT `OrderProduct_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingredients` ADD CONSTRAINT `Ingredients_orderProductId_fkey` FOREIGN KEY (`orderProductId`) REFERENCES `OrderProduct`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
