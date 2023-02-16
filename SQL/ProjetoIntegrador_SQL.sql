/*---------------------BASE DE DADOS USANDO PostgreeSQL---------------------*/

CREATE DATABASE vitanaturalle;

USE vitanaturalle;


/*Criar Base de Dados*/
CREATE TABLE customer (
    id_costumer SERIAL PRIMARY KEY,
    costumer_name VARCHAR(150) UNIQUE,
    costumer_email VARCHAR(50) NOT NULL,
    costumer_password VARCHAR(08) NOT NULL,
    fk_id_order INT
)

CREATE TABLE products (
    id_products SERIAL PRIMARY KEY,
    products_name VARCHAR(50) UNIQUE,
    products_price INT NOT NULL,
    products_descount INT
)

CREATE TABLE orders (
    id_order SERIAL PRIMARY KEY,
    fk_id_costumer INT NOT NULL,
    order_date DATE NOT NULL
)

CREATE TABLE shipments (
    id_shipment SERIAL PRIMARY KEY,
    fk_order_id INT NOT NULL,
    shipment_date DATE NOT NULL
)


/*Popular Base de Dados*/
INSERT INTO customer
    (costumer_name, costumer_email, costumer_password)
VALUES
    ('Clayton Souza', 'clayton.souza@gmail.com','senha1'),
    ('Gisele Monteiro', 'gisele.monteiro@gmail', 'senha2')

INSERT INTO products
    (products_name, products_price)
VALUES
    ('Choco Wheyfer Bites', 9),
    ('Café Orgânico Native', 27)

INSERT INTO orders
    (fk_id_costumer, order_date)
VALUES
    (1, '2023-02-09'),
    (2, '2023-02-10')

INSERT INTO shipments
    (fk_order_id, shipment_date)
VALUES
    (1, '2023_02_19'),
    (1, '2023_02_20')


/*Consulta Juntando 3 Tabelas*/
SELECT customer.costumer_name, orders.id_order, orders.order_date, shipments.shipment_date
FROM customer
JOIN orders
ON customer.id_costumer = orders.fk_id_costumer
JOIN shipments
ON orders.id_order = shipments.fk_order_id;