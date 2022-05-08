SELECT * from sakila.customer;

SELECT `active`, COUNT(*) FROM sakila.customer
GROUP BY `active`;

SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;

SELECT * from sakila.film;

SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating
ORDER BY rating DESC;

SELECT * FROM sakila.address;

SELECT district, COUNT(*) AS contagem FROM sakila.address
GROUP BY district
ORDER BY contagem DESC;