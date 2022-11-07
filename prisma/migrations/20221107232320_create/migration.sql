-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` VARCHAR(191) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `sexo` VARCHAR(1) NOT NULL,
    `nome` VARCHAR(60) NOT NULL,
    `senha` VARCHAR(8) NOT NULL,
    `tipo_usuario` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `minha_lista` (
    `id_minha_lista` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `id_usuario` VARCHAR(191) NULL,

    PRIMARY KEY (`id_minha_lista`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lista_livros` (
    `id_minha_lista` INTEGER NOT NULL,
    `id_livro` INTEGER NOT NULL,

    PRIMARY KEY (`id_minha_lista`, `id_livro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `avaliacao` (
    `conteudo` VARCHAR(256) NOT NULL,
    `id_livro` INTEGER NOT NULL,
    `id_usuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_livro`, `id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `livros` (
    `id_livro` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(60) NOT NULL,
    `sinopse` VARCHAR(1024) NOT NULL,
    `caminho_arquivo` VARCHAR(2048) NOT NULL,
    `capa` VARCHAR(2048) NOT NULL,
    `editora` VARCHAR(45) NOT NULL,
    `idioma` VARCHAR(45) NOT NULL,
    `ano` YEAR NOT NULL,

    PRIMARY KEY (`id_livro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autor` (
    `id_autor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(60) NOT NULL,
    `data_nasc` DATE NOT NULL,
    `data_falesc` DATE NOT NULL,

    PRIMARY KEY (`id_autor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `liv_aut` (
    `livroId` INTEGER NOT NULL,
    `autorId` INTEGER NOT NULL,

    PRIMARY KEY (`livroId`, `autorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gen_liv` (
    `livroId` INTEGER NOT NULL,
    `generoId` INTEGER NOT NULL,

    PRIMARY KEY (`livroId`, `generoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genero` (
    `id_genero` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_genero`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nascionalidade` (
    `id_nascionalidade` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(65) NOT NULL,

    PRIMARY KEY (`id_nascionalidade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `minha_lista` ADD CONSTRAINT `minha_lista_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lista_livros` ADD CONSTRAINT `lista_livros_id_minha_lista_fkey` FOREIGN KEY (`id_minha_lista`) REFERENCES `minha_lista`(`id_minha_lista`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lista_livros` ADD CONSTRAINT `lista_livros_id_livro_fkey` FOREIGN KEY (`id_livro`) REFERENCES `livros`(`id_livro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacao` ADD CONSTRAINT `avaliacao_id_livro_fkey` FOREIGN KEY (`id_livro`) REFERENCES `livros`(`id_livro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacao` ADD CONSTRAINT `avaliacao_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `liv_aut` ADD CONSTRAINT `liv_aut_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `livros`(`id_livro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `liv_aut` ADD CONSTRAINT `liv_aut_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `autor`(`id_autor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gen_liv` ADD CONSTRAINT `gen_liv_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `livros`(`id_livro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gen_liv` ADD CONSTRAINT `gen_liv_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `genero`(`id_genero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nascionalidade` ADD CONSTRAINT `nascionalidade_id_nascionalidade_fkey` FOREIGN KEY (`id_nascionalidade`) REFERENCES `autor`(`id_autor`) ON DELETE RESTRICT ON UPDATE CASCADE;
