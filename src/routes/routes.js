const cors = require('cors')
const express = require('express');

//const controllerVendedor = require("../controlers/vendedor");
//const controllerVenta = require("../models/venta");
const controllers = require("../controlers/controllersTodo")

const router = express.Router();
//Vendedor
router.get("/vendedor", cors(), controllers.getVendedor);
router.get("/vendedor/:id", cors(), controllers.getVendedorById);
router.post("/vendedor", cors(), controllers.createVendedor);
router.put("/vendedor/:id", cors(), controllers.updateVendedor);
router.put("/vendedor/:id", cors(), controllers.findOneAndUpdate);
router.delete("/vendedor/:id", cors(), controllers.deleteVendedor);

//Venta
router.get("/venta", cors(), controllers.getVentas);
router.get("/venta/:id", cors(), controllers.getVentaById);
router.post("/venta", cors(), controllers.createVenta);
router.put("/venta/:id", cors(), controllers.updateVenta);
router.delete("/venta/:id", cors(), controllers.deleteVenta);


/* router.get("/vendedor", cors(), controllerVendedor.getVendedor);   // Read All
router.get("/vendedor/:id", cors(), controllerVendedor.getVendedorById);    // Read
router.delete("/vendedor/:id", cors(), controllerVendedor.deleteVendedor);  // Delete
router.put("/vendedor/:id", cors(), controllerVendedor.updateVendedor);  // Update
router.post("/vendedor", cors(), controllerVendedor.createVendedor);  // Create */

module.exports = router;



/* const vendedorSchema = require('../models/vendedor');

// Rutas
// Agregar vendedor
router.post('/vendedor', (req, res) => {
    const vendedor = vendedorSchema(req.body);
    vendedor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})
// Recuperar todos los vendedor
router.get('/vendedor', (req, res) => {
    vendedorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Recuperar user por id
router.get('/vendedor/:id', (req, res) => {
    const { id } = req.params;
    vendedorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Actualizar vendedor por id
router.put('/vendedor/:id', (req, res) => {
    const { id } = req.params;
    const { idvend, nombre, correo, totalComision } = req.body;
    vendedorSchema
        .updateOne({ _id: id }, { $set: { idvend, nombre, correo, totalComision } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Eliminar vendedor por id
router.delete('/vendedor/:id', (req, res) => {
    const { id } = req.params;
    vendedorSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Rutas para venta
const ventaSchema = require('../models/venta');

// Rutas
// Agregar venta
router.post('/venta', (req, res) => {
    const venta = ventaSchema(req.body);
    venta
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})
// Recuperar todos los venta
router.get('/venta', (req, res) => {
    ventaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Recuperar venta por id
router.get('/venta/:id', (req, res) => {
    const { id } = req.params;
    ventaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Actualizar venta por id
router.put('/venta/:id', (req, res) => {
    const { id } = req.params;
    const { idvend, fecha, valorVenta, zona } = req.body;
    ventaSchema
        .updateOne({ _id: id }, { $set: { idvend, fecha, valorVenta, zona } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Eliminar user por id
router.delete('/venta/:id', (req, res) => {
    const { id } = req.params;
    ventaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
}) */
