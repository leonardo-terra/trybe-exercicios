SELECT * FROM northwind.order_details;

INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id)
VALUES (69, 80, 15000, 15000, 0, 2, NULL, NULL, 129);

INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id)
VALUES 
(69, 80, 15000, 15000, 0, 2, NULL, NULL, 129),
(69, 80, 15000, 15000, 0, 2, NULL, NULL, 129)
;

SELECT * FROM northwind.order_details;
SET SQL_SAFE_UPDATES = 0;

UPDATE northwind.order_details
SET discount =15;

