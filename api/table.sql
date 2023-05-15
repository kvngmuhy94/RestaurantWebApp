create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);

insert into user(name, contactNumber, email, password,status,role) values ('Admin','123456789','admin@gmail.com','admin','true','admin');

create table category(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    primary key(id)
);

create table product(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    categoryId integer NOT NULL,
    description varchar(255),
    price integer,
    status varchar(20),
    primary key(id)
);

create table bill(
    id int NOT NULL AUTO_INCREMENT,
    uuid varchar(200) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    contactNumber varchar(20) NOT NULL,
    paymentMethod varchar(50) NOT NULL,
    total int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy varchar(255) NOT NULL,
    primary key(id)
);

 CREATE TABLE Company (
      id int NOT NULL AUTO_INCREMENT,
      company_name VARCHAR(200) NOT NULL,
      slogan VARCHAR(100),
      description TEXT,
      logo BLOB,
      owner_name VARCHAR(50),
      phone_number VARCHAR(20) NOT NULL,
      email VARCHAR(50),
      company_type VARCHAR(50),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      primary key(id)
     );

ALTER TABLE product ADD companyId integer NOT NULL;
ALTER TABLE category ADD companyId integer NOT NULL;
ALTER TABLE product ADD image1 BLOB;
ALTER TABLE product ADD image2 BLOB;
ALTER TABLE product ADD image3 BLOB;
