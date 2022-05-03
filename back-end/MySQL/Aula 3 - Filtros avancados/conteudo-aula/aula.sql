SELECT * FROM sakila.actor
WHERE last_name = 'Davis';

SELECT * FROM sakila.actor
WHERE actor_id = 101;

SELECT * FROM sakila.film
WHERE length > 50
order by length;

SELECT * FROM sakila.film
WHERE length < 50
order by length;

SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
order by length;

SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
order by length
AND replacement_cost > 20;

SELECT * FROM sakila.film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13' ;

SELECT * FROM sakila.rental
WHERE return_date is NULL
;

SELECT * FROM sakila.staff
WHERE active IS TRUE
;

SELECT * FROM sakila.address
WHERE address2 IS NOT NULL
;

