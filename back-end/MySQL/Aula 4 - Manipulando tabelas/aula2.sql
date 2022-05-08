SELECT * FROM sakila.staff;

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.staff
SET first_name = 'Leandro'
WHERE first_name = 'Leonardo2';

UPDATE sakila.staff
SET first_name = 'Leonardooo', last_name='leo'
WHERE staff_id = 4;