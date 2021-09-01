CREATE DATABASE colors;

CREATE TABLE color(
  id SERIAL PRIMARY KEY,
  color_name VARCHAR(255)
);

INSERT INTO color(color_name) VALUES('red');
INSERT INTO color(color_name) VALUES('pink');
INSERT INTO color(color_name) VALUES('yello');

UPDATE color
SET color_name='blue'
WHERE id=4;

SELECT color_name from color;