DROP DATABASE IF EXISTS trivioke;

CREATE DATABASE trivioke;

USE trivioke;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(15) NOT NULL,
  pw varchar(20) NOT NULL,
  score int(3) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE songs (
  id int NOT NULL AUTO_INCREMENT,
  song varchar(100) NOT NULL,
  uri varchar(100) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/