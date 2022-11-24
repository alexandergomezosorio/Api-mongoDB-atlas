const mongoose = require('mongoose');

const vendedor = mongoose.Schema({
    idvend: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    totalComision: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Vendedor', vendedor);	