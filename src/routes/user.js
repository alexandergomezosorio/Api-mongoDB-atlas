const express = require('express');
// importar el esquema de models
const userSchema = require('../models/user');

const router = express.Router();

// Rutas
// Agregar user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})
// Recuperar todos los users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Recuperar user por id
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Actualizar user por id
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Eliminar user por id
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


module.exports = router;
