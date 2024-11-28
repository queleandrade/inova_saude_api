const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// Listar todas as localizações
router.get('/', async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar localizações' });
    }
});

// Criar uma nova localização
router.post('/', async (req, res) => {
    try {
        const { name, latitude, longitude } = req.body;
        const newLocation = new Location({ name, latitude, longitude });
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar localização' });
    }
});

module.exports = router;
