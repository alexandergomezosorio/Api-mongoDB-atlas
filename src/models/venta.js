const mongoose = require('mongoose');

const ventaSchema = mongoose.Schema({
    idvend: {
        type: String,
        required: true
    },
    
    fecha: {
        type: Date,
        required: true
    },
    valorVenta: {
        type: Number,
        required: true
    },
    zona: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Venta', ventaSchema);	