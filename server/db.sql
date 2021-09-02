CREATE DATABASE colors;

CREATE TABLE color(
  id SERIAL PRIMARY KEY,
  color_name VARCHAR(255)
);

INSERT INTO color(color_name) VALUES('red');
INSERT INTO color(color_name) VALUES('pink');
INSERT INTO color(color_name) VALUES('yello');

UPDATE color
SET color_name='yellow'
WHERE id=3;

DELETE FROM color WHERE id > 4;


SELECT color_name from color;