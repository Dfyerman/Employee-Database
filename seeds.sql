DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

\c departments_db;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    departments_name VARCHAR(100) NOT NULL
);

CREATE TABLE departments_roles (
    id SERIAL PRIMARY KEY,
    departments_id INT,

)