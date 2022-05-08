SELECT * FROM northwind.purchase_orders;
SELECT notes FROM northwind.purchase_orders;
SELECT * FROM northwind.purchase_orders 
WHERE created_by >= 3
ORDER BY created_by DESC, id ASC;

SELECT notes FROM northwind.purchase_orders
WHERE notes IS NOT NULL;

SELECT notes FROM northwind.purchase_orders
WHERE notes LIKE 'Purchase generated based on Order #3_';

SELECT submitted_date FROM northwind.purchase_orders
WHERE DATE(submitted_date) = '2006-04-26';

SELECT supplier_id FROM northwind.purchase_orders
WHERE supplier_id IN (1,3);

SELECT supplier_id FROM northwind.purchase_orders
WHERE supplier_id BETWEEN 1 AND 3;

SELECT HOUR(submitted_date) FROM northwind.purchase_orders;

SELECT submitted_date FROM northwind.purchase_orders
WHERE DATE(submitted_date) BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';

SELECT id, supplier_id FROM northwind.purchase_orders
WHERE supplier_id IN (1, 3, 5, 7);

SELECT * FROM northwind.purchase_orders
WHERE supplier_id = 3 AND status_id = 2;

SELECT count(*) AS orders_count FROM northwind.orders
WHERE employee_id IN (5,6) AND shipper_id =2;