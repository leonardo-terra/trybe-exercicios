SELECT * FROM sakila.staff;

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
VALUES ('Leonardo', 'Terra', 2, 2, 'palajesus');

INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES 
('Leonardo2', 'Terra', 2, 2, 'palajesus2'),
('Raquel', 'Almeida', 2, 2, 'amorzinho')
;

SELECT first_name, last_name FROM sakila.customer LIMIT 5;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

SELECT * FROM sakila.actor;
