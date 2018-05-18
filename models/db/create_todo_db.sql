-- MySQL Script generated by MySQL Workbench
-- Sat May 19 07:11:39 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema yizhangyichi
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `yizhangyichi` ;

-- -----------------------------------------------------
-- Schema yizhangyichi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `yizhangyichi` DEFAULT CHARACTER SET utf8 ;
USE `yizhangyichi` ;

-- -----------------------------------------------------
-- Table `yizhangyichi`.`Todo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yizhangyichi`.`Todo` ;

CREATE TABLE IF NOT EXISTS `yizhangyichi`.`Todo` (
  `TodoID` BIGINT(100) NOT NULL AUTO_INCREMENT,
  `Content` TEXT NULL,
  `CreatedTime` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `UpdatedTime` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Status` INT NULL COMMENT '0: created\n1: finished\n2: snoozed',
  `Type` INT NULL COMMENT '0 normal\n1 timer todo\n2 recur todo',
  `TodoType` VARCHAR(45) NOT NULL DEFAULT 'chi' COMMENT 'zhang\nchi',
  `Note` VARCHAR(1024) NULL,
  PRIMARY KEY (`TodoID`, `TodoType`),
  INDEX `create` (`CreatedTime` ASC),
  INDEX `update` (`UpdatedTime` ASC),
  INDEX `status` (`Status` ASC))
ENGINE = InnoDB PARTITION BY LIST COLUMNS(TodoType) PARTITIONS 2( PARTITION part0 VALUES IN ('zhang'),  PARTITION part1 VALUES IN ('chi')) ;


-- -----------------------------------------------------
-- Table `yizhangyichi`.`Project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yizhangyichi`.`Project` ;

CREATE TABLE IF NOT EXISTS `yizhangyichi`.`Project` (
  `ProjectID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) NULL,
  `CreatedTime` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedTime` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `UserID` VARCHAR(100) NULL,
  PRIMARY KEY (`ProjectID`),
  INDEX `created_time` (`CreatedTime` ASC),
  INDEX `updated_time` (`UpdatedTime` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yizhangyichi`.`ProjectTodo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yizhangyichi`.`ProjectTodo` ;

CREATE TABLE IF NOT EXISTS `yizhangyichi`.`ProjectTodo` (
  `Todo_id` BIGINT(100) NOT NULL,
  `Project_id` INT NOT NULL,
  `ProjectTodoID` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ProjectTodoID`),
  INDEX `ProjectUserIdx` (`Todo_id` ASC, `Project_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yizhangyichi`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yizhangyichi`.`User` ;

CREATE TABLE IF NOT EXISTS `yizhangyichi`.`User` (
  `UserID` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NULL,
  `type` VARCHAR(64) NULL COMMENT 'google\nmicrosoft',
  `email` VARCHAR(100) NULL,
  `deviceID` VARCHAR(100) NULL,
  `deviceType` VARCHAR(100) NULL,
  `pushType` VARCHAR(100) NULL,
  `pushToken` VARCHAR(100) NULL,
  PRIMARY KEY (`UserID`),
  INDEX `deviceTypeIdx` (`deviceType` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `yizhangyichi`.`UserTodo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yizhangyichi`.`UserTodo` ;

CREATE TABLE IF NOT EXISTS `yizhangyichi`.`UserTodo` (
  `UserTodoID` BIGINT(100) NOT NULL,
  `UserID` VARCHAR(45) NULL,
  `TodoID` VARCHAR(45) NULL,
  PRIMARY KEY (`UserTodoID`),
  INDEX `UserTodoIdx` (`UserID` ASC, `TodoID` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
