CREATE DATABASE car_db;

USE car_db;

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    brand VARCHAR(100),
    model VARCHAR(100),
    year INT,
    color VARCHAR(50),
    price DECIMAL(10, 2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cars (name, brand, model, year, color, price)
VALUES ('Tesla Model 3', 'Tesla', 'Model 3', 2023, 'White', 50000);

