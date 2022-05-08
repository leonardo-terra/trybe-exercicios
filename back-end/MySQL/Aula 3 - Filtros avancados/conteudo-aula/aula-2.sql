SELECT title, description FROM sakila.film
WHERE title LIKE '%ace%'
;

SELECT * FROM sakila.film
WHERE description LIKE '%china'
;

SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title like '%lord'
;

SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
;

SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%_ocumentary%'
;

SELECT * from sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%'
;

SELECT * FROM sakila.film
WHERE description like '%monkey%'
AND description like '%sumo%'
;