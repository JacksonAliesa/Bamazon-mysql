DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NULL,
  deptName VARCHAR(45) NULL,
  price DECIMAL(10, 5) DEFAULT 0 NULL,
  stockQuantity INTEGER (500)
  PRIMARY KEY (id)
);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("iPad 32GB", "electronics", $319.98, 50);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("iPad 7th Generation Case", "electronics", $45.99, 25);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("iPod Touch 32GB", "electronics", $189.00, 25);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("iPod Touch Case", "electronics", $19.99, 10);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("Apple AirPods(Latest Model)", "electronics", $144.00, 20);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("Apple Watch Series 3", "electronics", $179.00, 5);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("Apple Pencil", "electronics", $94.88, 100);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("Apple Magic Mouse(wireless)", "electronics", $69.00, 10);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("MacBook Pro(15-inch, 256GB)", "electronics", $1,999.00, 10);

INSERT INTO products (productName, deptName, price, stockQuantity)
VALUES ("Mac Book Pro Charger", "electronics", $29.99, 50);

