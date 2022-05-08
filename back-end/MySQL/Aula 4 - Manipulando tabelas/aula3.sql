SET SQL_SAFE_UPDATES = 0;

SELECT * FROM sakila.actor;

SELECT * FROM sakila.actor 
WHERE first_name = 'Jules';

UPDATE sakila.actor
SET first_name = 'Jules'
WHERE first_name = 'Julia';

SELECT * FROM sakila.category;

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

SELECT * FROM sakila.film;

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

UPDATE sakila.film
SET rental_rate = 35
WHERE length > 100 
AND rating IN ('G','PG','PG-13')
AND replacement_cost > 20;

UPDATE sakila.film
SET rental_rate = 10
WHERE length BETWEEN 0 AND 100;

UPDATE sakila.film
SET rental_rate = (
	CASE 
		WHEN length BETWEEN 1 AND 100 THEN 15
		ELSE 33
            
END);


