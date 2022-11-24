const  Vendedor  = require("../models/vendedor")

// Recuperar todos los vendedores
exports.getVendedor = (req, res) =>
    Vendedor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });


exports.getVendedorById = (req, res) =>
    Vendedor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });

exports.createVendedor = (req, res) =>
    new Vendedor({ idvend: req.body.idvend, nombre: req.body.nombre, correo: req.body.correo, totalComision: req.body.totalComision })
        .save((err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
exports.updateVendedor = (req, res) =>
    Vendedor.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { idvend: req.body.idvend, nombre: req.body.nombre, correo: req.body.correo, totalComision: req.body.totalComision } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
exports.deleteVendedor = (req, res) =>
    Vendedor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });






