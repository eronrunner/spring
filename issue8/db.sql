-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`AUTHOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`AUTHOR` ;

CREATE TABLE IF NOT EXISTS `mydb`.`AUTHOR` (
  `authorId` BIGINT NOT NULL,
  `authorName` TEXT NOT NULL,
  PRIMARY KEY (`authorId`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `authorId_UNIQUE` ON `mydb`.`AUTHOR` (`authorId` ASC);


-- -----------------------------------------------------
-- Table `mydb`.`BOOK`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`BOOK` ;

CREATE TABLE IF NOT EXISTS `mydb`.`BOOK` (
  `bookId` BIGINT NOT NULL,
  `bookTitle` TEXT NOT NULL,
  `author` BIGINT NOT NULL,
  PRIMARY KEY (`bookId`),
  CONSTRAINT `fk_BOOK_AUTHOR`
    FOREIGN KEY (`author`)
    REFERENCES `mydb`.`AUTHOR` (`authorId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_BOOK_AUTHOR_idx` ON `mydb`.`BOOK` (`author` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
