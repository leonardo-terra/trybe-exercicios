SELECT * FROM sakila.film;

SELECT title, IF (rental_rate > 0.99, 'CARO', 'BARATO') AS Classificacao FROM sakila.film;

SELECT title, rental_rate, 
	CASE 
		WHEN rental_rate = 15 THEN 'CARO'
        WHEN rental_rate = 33 THEN 'NORMAL'
        WHEN rental_rate = 0.99 THEN 'BARATO'
	END AS Classe
FROM sakila.film;