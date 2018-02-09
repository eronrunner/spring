-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema example
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema example
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `example` DEFAULT CHARACTER SET utf8 ;
USE `example` ;

-- -----------------------------------------------------
-- Table `example`.`ACCOUNT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `example`.`ACCOUNT` (
  `accountId` VARCHAR(50) NOT NULL,
  `password` TEXT NOT NULL,
  `registeredEmail` VARCHAR(100) NOT NULL,
  `activated` TINYINT(1) NOT NULL,
  `accountType` SMALLINT NOT NULL,
  PRIMARY KEY (`accountId`),
  UNIQUE INDEX `registeredEmail_UNIQUE` (`registeredEmail` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `example`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `example`.`USER` (
  `userId` BIGINT NOT NULL,
  `firstname` TEXT NOT NULL,
  `lastname` TEXT NOT NULL,
  `phone` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  `address` TEXT NOT NULL,
  `account` VARCHAR(50) NULL,
  PRIMARY KEY (`userId`),
  INDEX `fk_USER_ACCOUNT_idx` (`account` ASC),
  UNIQUE INDEX `account_UNIQUE` (`account` ASC),
  CONSTRAINT `fk_USER_ACCOUNT`
    FOREIGN KEY (`account`)
    REFERENCES `example`.`ACCOUNT` (`accountId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
