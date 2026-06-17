USE roxiler_store_rating;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(400),
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN','USER','OWNER') DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE stores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    address VARCHAR(400),
    owner_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);



CREATE TABLE ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    store_id INT,
    rating INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (store_id) REFERENCES stores(id)
);


USE roxiler_store_rating;

SELECT * FROM users;



USE roxiler_store_rating;


INSERT INTO stores
(name,email,address)
VALUES
(
'Apple Store',
'apple@gmail.com',
'Pune'
);


INSERT INTO stores
(name,email,address)
VALUES
(
'Nike Store',
'nike@gmail.com',
'Mumbai'
);


INSERT INTO stores
(name,email,address)
VALUES
(
'Adidas Store',
'adidas@gmail.com',
'Delhi'
);


USE roxiler_store_rating;

SELECT * FROM stores;


CREATE TABLE IF NOT EXISTS ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    store_id INT,
    rating INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(id),

    FOREIGN KEY (store_id)
    REFERENCES stores(id)
);



SHOW TABLES;


SELECT * FROM ratings;

SELECT * FROM ratings;

SELECT * FROM ratings;



SELECT * FROM stores;


UPDATE stores
SET owner_id = 3
WHERE id = 1;



SELECT * FROM ratings;