SELECT * FROM sakila.payment
WHERE customer_id IN (269, 239, 126, 399, 142)
;

SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas')
;

SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120
;

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name
;

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17'
;

SELECT * FROM sakila.payment
;