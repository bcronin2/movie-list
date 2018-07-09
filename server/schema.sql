DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE collection (
  id INTEGER NOT NULL AUTO_INCREMENT,
  title VARCHAR(32),
  year INTEGER(4),
  rating DECIMAL,
  poster VARCHAR(32),
  watched TINYINT,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`title`, `year`, `poster`)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/
