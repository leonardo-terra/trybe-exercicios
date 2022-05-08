SELECT * FROM sakila.actor;

SELECT * FROM sakila.film_actor;

SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

SELECT * FROM sakila.staff;

SELECT * FROM sakila.address;

SELECT S.first_name, S.last_name, A.address
FROM sakila.staff S
INNER JOIN sakila.address A
ON S.address_id = A.address_id;

SELECT
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM
    sakila.customer AS C
INNER JOIN 
	sakila.address AS A 
ON 
	C.address_id = A.address_id
ORDER BY 
	C.first_name DESC
LIMIT 100;

SELECT
    C.first_name, 
    C.email, 
    C.address_id, 
    A.address, 
    A.district
FROM
    sakila.customer AS C
INNER JOIN
    sakila.address AS A 
ON 
	C.address_id = A.address_id
WHERE
	A.district = 'California'
	AND 
    C.first_name LIKE '%rene%';
    
SELECT
    c.first_name,
    COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
INNER JOIN
    sakila.address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    first_name DESC,
    last_name DESC;
    
    
SELECT
    A.actor_id,
    A.first_name,
    F.film_id,
    F.title
FROM
    sakila.actor AS A
INNER JOIN
    sakila.film_actor AS FA ON A.actor_id = FA.actor_id
INNER JOIN
    sakila.film AS F ON F.film_id = FA.film_id;
