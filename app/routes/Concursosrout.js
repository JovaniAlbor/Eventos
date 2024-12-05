const express = require('express');
const Concursos = require('../models/Concursos');

const router = express.Router();

// Endpoint para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const Concursosrout = await Concursos.findAll(); // Consulta todos los registros
        res.json(Concursosrout); // Devuelve los datos en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios', detalle: error.message });
    }
});

module.exports = router;