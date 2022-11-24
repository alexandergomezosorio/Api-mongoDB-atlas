const mongoose = require('mongoose');

const Vendedor = mongoose.model('vendedor',
    new mongoose.Schema({
        idvendedor: { type: String, require: true },
        nombre: { type: String, require: true },
        correo: { type: String, require: true },
        totalComision: { type: Number, require: true }
    }))

const Venta = mongoose.model('venta',
    new mongoose.Schema({
        idvendedor: { type: String, required: true },
        fecha: { type: Date, required: true },
        valorVenta: { type: Number, required: true },
        zona: { type: String, required: true }
    }))

module.exports = {
    Vendedor: Vendedor,
    Venta: Venta
}