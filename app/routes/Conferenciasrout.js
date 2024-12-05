const express = require('express');
const Conferencias = require('../models/Conferencias');

const router = express.Router();

// Endpoint para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const Conferenciasrout = await Conferencias.findAll(); // Consulta todos los registros
        res.json(Conferenciasrout); // Devuelve los datos en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios', detalle: error.message });
    }
});

module.exports = router;
