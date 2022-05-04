SELECT product_name from northwind.products;
SELECT * from northwind.products;
SELECT id from northwind.products;
SELECT COUNT(product_name) FROM northwind.products;
SELECT * FROM northwind.products LIMIT 9 OFFSET 3;
SELECT product_name, id FROM northwind.products
ORDER BY product_name;
SELECT id FROM northwind.products
ORDER BY id desc limit 5;

SELECT 5+6 AS A, 'de' AS 'Trybe', 2+8 as 'eh'
