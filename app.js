const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.get("/recetas", (req, res) => {

    db.query("SELECT * FROM recetas_cocina", (err, rows) => {

        if (err) {
            return res.send(err);
        }

        res.json(rows);

    });

});

app.post("/recetas", (req, res) => {

    const {
        nombre,
        categoria,
        tiempo_preparacion_min,
        dificultad,
        ingredientes,
        pasos,
        publicada
    } = req.body;

    const sql = `
        INSERT INTO recetas_cocina
        (nombre, categoria, tiempo_preparacion_min, dificultad, ingredientes, pasos, publicada)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        nombre,
        categoria,
        tiempo_preparacion_min,
        dificultad,
        ingredientes,
        pasos,
        publicada
    ], (err, result) => {

        if (err) {
            return res.send(err);
        }

        res.json({
            mensaje: "Receta creada"
        });

    });

});

app.get("/recetas/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM recetas_cocina WHERE id = ?",
        [id],
        (err, rows) => {

            if (err) {
                return res.send(err);
            }

            res.json(rows);

        }
    );

});

app.put("/recetas/:id", (req, res) => {

    const { id } = req.params;

    const {
        nombre,
        categoria,
        tiempo_preparacion_min,
        dificultad,
        ingredientes,
        pasos,
        publicada
    } = req.body;

    const sql = `
        UPDATE recetas_cocina
        SET
        nombre = ?,
        categoria = ?,
        tiempo_preparacion_min = ?,
        dificultad = ?,
        ingredientes = ?,
        pasos = ?,
        publicada = ?
        WHERE id = ?
    `;

    db.query(sql, [
        nombre,
        categoria,
        tiempo_preparacion_min,
        dificultad,
        ingredientes,
        pasos,
        publicada,
        id
    ], (err, result) => {

        if (err) {
            return res.send(err);
        }

        res.json({
            mensaje: "Receta actualizada"
        });

    });

});

app.delete("/recetas/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM recetas_cocina WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.send(err);
            }

            res.json({
                mensaje: "Receta eliminada"
            });

        }
    );

});


app.get("/vehiculos", (req, res) => {

    db.query("SELECT * FROM vehiculos_flotilla", (err, rows) => {

        if (err) {
            return res.send(err);
        }

        res.json(rows);

    });

});

app.post("/vehiculos", (req, res) => {

    const {
        placa,
        marca,
        modelo,
        anio,
        kilometraje,
        estado,
        asegurado
    } = req.body;

    const sql = `
        INSERT INTO vehiculos_flotilla
        (placa, marca, modelo, anio, kilometraje, estado, asegurado)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        placa,
        marca,
        modelo,
        anio,
        kilometraje,
        estado,
        asegurado
    ], (err, result) => {

        if (err) {
            return res.send(err);
        }

        res.json({
            mensaje: "Vehiculo creado"
        });

    });

});

app.get("/vehiculos/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "SELECT * FROM vehiculos_flotilla WHERE id = ?",
        [id],
        (err, rows) => {

            if (err) {
                return res.send(err);
            }

            res.json(rows);

        }
    );
});

app.put("/vehiculos/:id", (req, res) => {

    const { id } = req.params;

    const {
        placa,
        marca,
        modelo,
        anio,
        kilometraje,
        estado,
        asegurado
    } = req.body;

    const sql = `
        UPDATE vehiculos_flotilla
        SET
        placa = ?,
        marca = ?,
        modelo = ?,
        anio = ?,
        kilometraje = ?,
        estado = ?,
        asegurado = ?
        WHERE id = ?
    `;

    db.query(sql, [
        placa,
        marca,
        modelo,
        anio,
        kilometraje,
        estado,
        asegurado,
        id
    ], (err, result) => {

        if (err) {
            return res.send(err);
        }

        res.json({
            mensaje: "Vehiculo actualizado"
        });

    });

});

app.delete("/vehiculos/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM vehiculos_flotilla WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.send(err);
            }

            res.json({
                mensaje: "Vehiculo eliminado"
            });

        }
    );

});

app.listen(3000, () => {
    console.log("Servidor corriendo");
});