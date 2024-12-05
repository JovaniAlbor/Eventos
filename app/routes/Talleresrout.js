const express = require('express');
const Talleres = require('../models/Talleres');

const router = express.Router();

// Endpoint para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const Talleresrout = await Talleres.findAll(); // Consulta todos los registros
        res.json(Talleresrout); // Devuelve los datos en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios', detalle: error.message });
    }
});

module.exports = router;