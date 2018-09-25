CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100)NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("Basketball", "Sports", 25, 50),
("Football", "Sports", 20, 75),
("Baseball", "Sports", 10, 100),
("Soccer Ball", "Sports", 50, 100),
("Shirt", "Clothing", 10, 250),
("Pants", "Clothing", 25, 250),
("Shoes", "Clothing", 100, 100),
("Bracelet", "Accessories", 50, 50),
("Watch", "Accessories", 100, 50),
("Necklace", "Accessories", 150, 25);


SELECT * FROM products;