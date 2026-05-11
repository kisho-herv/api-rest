CREATE DATABASE api_rest_db;

USE api_rest_db;

CREATE TABLE recetas_cocina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    categoria VARCHAR(80),
    tiempo_preparacion_min INT,
    dificultad VARCHAR(30),
    ingredientes TEXT,
    pasos TEXT,
    publicada BOOLEAN
);

ALTER TABLE recetas_cocina
ADD porciones SMALLINT NOT NULL DEFAULT 4;

CREATE TABLE vehiculos_flotilla (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(20),
    marca VARCHAR(60),
    modelo VARCHAR(60),
    anio SMALLINT,
    kilometraje INT,
    estado VARCHAR(30),
    asegurado BOOLEAN
);

ALTER TABLE vehiculos_flotilla
DROP COLUMN kilometraje;