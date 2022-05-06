SELECT * FROM sakila.film;

SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Conheço esse filme', 'Nao conheco esse filme') AS 'Conheço o filme?'
FROM sakila.film;

SELECT title, rating, 
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Nao recomendado para menores de 13 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Nao recomendado para menores de 17 anos'
		ELSE 'Nao recomendado para menores de idade'
    END AS 'Classificaçao'
FROM sakila.film;

SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(length)
FROM sakila.film
GROUP BY rating;